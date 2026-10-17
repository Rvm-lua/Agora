// Agora pour VS Code et Cursor : chat multi-IA dans le panneau latéral.
const vscode = require('vscode');

const PROVIDERS = {
  pollinations: { name: 'Agora Gratuit', key: false, chat: 'https://text.pollinations.ai/openai', models: 'https://text.pollinations.ai/models', def: 'openai' },
  groq:       { name: 'Groq', keyUrl: 'https://console.groq.com/keys', chat: 'https://api.groq.com/openai/v1/chat/completions', models: 'https://api.groq.com/openai/v1/models', def: 'llama-3.3-70b-versatile' },
  gemini:     { name: 'Gemini', keyUrl: 'https://aistudio.google.com/apikey', chat: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', models: 'https://generativelanguage.googleapis.com/v1beta/openai/models', def: 'gemini-2.5-flash' },
  openrouter: { name: 'OpenRouter', keyUrl: 'https://openrouter.ai/keys', chat: 'https://openrouter.ai/api/v1/chat/completions', models: 'https://openrouter.ai/api/v1/models', def: 'meta-llama/llama-3.3-70b-instruct:free', freeOnly: true },
  mistral:    { name: 'Mistral', keyUrl: 'https://console.mistral.ai/api-keys', chat: 'https://api.mistral.ai/v1/chat/completions', models: 'https://api.mistral.ai/v1/models', def: 'codestral-latest' },
  cerebras:   { name: 'Cerebras', keyUrl: 'https://cloud.cerebras.ai', chat: 'https://api.cerebras.ai/v1/chat/completions', models: 'https://api.cerebras.ai/v1/models', def: 'llama-3.3-70b' },
  openai:     { name: 'ChatGPT', keyUrl: 'https://platform.openai.com/api-keys', chat: 'https://api.openai.com/v1/chat/completions', models: 'https://api.openai.com/v1/models', def: 'gpt-4.1-mini' },
  anthropic:  { name: 'Claude', keyUrl: 'https://console.anthropic.com/settings/keys', chat: 'https://api.anthropic.com/v1/messages', models: 'https://api.anthropic.com/v1/models', def: 'claude-sonnet-5-5', kind: 'anthropic' },
  xai:        { name: 'Grok', keyUrl: 'https://console.x.ai', chat: 'https://api.x.ai/v1/chat/completions', models: 'https://api.x.ai/v1/models', def: 'grok-4' },
};

const ACTIONS = {
  explain:  s => `Explique ce code simplement : ce qu'il fait, comment, et les points à surveiller.\n\n${s}`,
  fix:      s => `Trouve le ou les bugs dans ce code. Explique la cause en une phrase, puis donne le code corrigé complet.\n\n${s}`,
  refactor: s => `Refactorise ce code pour qu'il soit plus lisible et maintenable, sans changer son comportement. Donne le code complet puis les changements en 3 points.\n\n${s}`,
  comment:  s => `Ajoute des commentaires utiles à ce code (en français), sans modifier la logique. Donne le code complet commenté.\n\n${s}`,
  tests:    s => `Écris des tests pour ce code, y compris les cas limites. Si la plateforme n'a pas de framework de test, décris des scénarios de test manuels.\n\n${s}`,
};

let ctx, view, history = [], abort = null;
const cfg = () => vscode.workspace.getConfiguration('agora');

async function getKey(p) { return PROVIDERS[p].key === false ? '' : (await ctx.secrets.get('agora.key.' + p)) || ''; }
async function linkedList() {
  const out = [];
  for (const [id, p] of Object.entries(PROVIDERS)) out.push({ id, name: p.name, linked: p.key === false || !!(await ctx.secrets.get('agora.key.' + id)) });
  return out;
}

function editorContext() {
  const ed = vscode.window.activeTextEditor;
  if (!ed) return null;
  const doc = ed.document, sel = ed.selection;
  const name = vscode.workspace.asRelativePath(doc.uri);
  if (!sel.isEmpty) return { name, lang: doc.languageId, text: doc.getText(sel), range: `lignes ${sel.start.line + 1}–${sel.end.line + 1}`, selection: true };
  const text = doc.getText();
  return { name, lang: doc.languageId, text: text.length > 14000 ? text.slice(0, 14000) + '\n… (fichier tronqué)' : text, range: 'fichier entier', selection: false };
}
const ctxBlock = c => c ? `Contexte : \`${c.name}\` (${c.range})\n\`\`\`${c.lang}\n${c.text}\n\`\`\`` : '';

async function postState() {
  if (!view) return;
  const c = editorContext();
  view.webview.postMessage({ type: 'state', provider: cfg().get('provider'), model: cfg().get('model') || PROVIDERS[cfg().get('provider')]?.def, providers: await linkedList(),
    includeFile: cfg().get('includeFile'), context: c ? { name: c.name, range: c.range, selection: c.selection } : null });
}

let stateTimer = 0;
function postStateSoon(){ clearTimeout(stateTimer); stateTimer = setTimeout(postState, 250) }

async function listModels(p) {
  const P = PROVIDERS[p], key = await getKey(p);
  const headers = P.kind === 'anthropic' ? { 'x-api-key': key, 'anthropic-version': '2023-06-01' } : key ? { Authorization: 'Bearer ' + key } : {};
  const r = await fetch(P.models, { headers });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const j = await r.json();
  let list = Array.isArray(j) ? j : (j.data || j.models || []);
  if (P.freeOnly) list = list.filter(m => (m.id || '').endsWith(':free'));
  return [...new Set(list.map(m => typeof m === 'string' ? m : (m.id || m.name)).filter(Boolean).map(id => id.replace(/^models\//, '')))]
    .filter(id => !/embed|whisper|tts|moderation|image|audio|realtime|transcribe/i.test(id)).sort();
}

async function send(userText) {
  if (!view) return;
  const pid = cfg().get('provider'), P = PROVIDERS[pid];
  const model = cfg().get('model') || P.def;
  const key = await getKey(pid);
  if (P.key !== false && !key) {
    view.webview.postMessage({ type: 'error', msg: `${P.name} n'est pas lié. Clique sur « Lier » ou choisis Agora Gratuit.` });
    return;
  }
  history.push({ role: 'user', content: userText });
  const sys = (cfg().get('instructions') || '') + '\nTu es Agora, un assistant de code intégré à l\'éditeur. Quand tu modifies un fichier, donne son contenu complet dans un bloc de code avec le bon langage.';
  view.webview.postMessage({ type: 'start', model: `${P.name} · ${model}` });
  abort = new AbortController();
  let content = '';
  try {
    let r;
    if (P.kind === 'anthropic') {
      r = await fetch(P.chat, { method: 'POST', signal: abort.signal, headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model, max_tokens: 8192, stream: true, system: sys, messages: history.slice(-20) }) });
    } else {
      const headers = { 'Content-Type': 'application/json' }; if (key) headers.Authorization = 'Bearer ' + key;
      if (pid === 'openrouter') { headers['X-Title'] = 'Agora VS Code'; headers['HTTP-Referer'] = 'https://rvm-lua.github.io/Agora/' }
      r = await fetch(P.chat, { method: 'POST', signal: abort.signal, headers,
        body: JSON.stringify({ model, stream: true, messages: [{ role: 'system', content: sys }, ...history.slice(-20)] }) });
    }
    if (!r.ok) {
      let m = `${P.name} : erreur ${r.status}`; try { const j = await r.json(); m += ' — ' + (j.error?.message || j.message || '') } catch {}
      if (r.status === 401 || r.status === 403) m += '. Vérifie ta clé (commande « Agora : Lier une IA »).';
      if (r.status === 429) m += '. Limite gratuite atteinte, change d\'IA ou attends un peu.';
      throw new Error(m);
    }
    const ct = r.headers.get('content-type') || '';
    if (!ct.includes('event-stream')) {
      const j = await r.json().catch(() => ({}));
      content = P.kind === 'anthropic' ? (j.content || []).map(b => b.text || '').join('') : (j.choices?.[0]?.message?.content || '');
      view.webview.postMessage({ type: 'delta', text: content });
    } else {
      const reader = r.body.getReader(), dec = new TextDecoder(); let buf = '';
      while (true) {
        const { done, value } = await reader.read(); if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split('\n'); buf = lines.pop();
        for (const line of lines) {
          const t = line.trim(); if (!t.startsWith('data:')) continue;
          const data = t.slice(5).trim(); if (!data || data === '[DONE]') continue;
          let j; try { j = JSON.parse(data) } catch { continue }
          const piece = P.kind === 'anthropic' ? (j.type === 'content_block_delta' && j.delta?.type === 'text_delta' ? j.delta.text : '') : (j.choices?.[0]?.delta?.content || '');
          if (piece) { content += piece; view.webview.postMessage({ type: 'delta', text: piece }) }
        }
      }
    }
    history.push({ role: 'assistant', content });
    view.webview.postMessage({ type: 'done' });
  } catch (e) {
    if (e.name === 'AbortError') { history.push({ role: 'assistant', content: content || '(arrêté)' }); view.webview.postMessage({ type: 'done', stopped: true }) }
    else { history.pop(); view.webview.postMessage({ type: 'error', msg: e.message || String(e) }) }
  }
  abort = null;
}

async function insertCode(code, mode, lang) {
  if (mode === 'newfile') {
    const doc = await vscode.workspace.openTextDocument({ content: code, language: lang || undefined });
    return vscode.window.showTextDocument(doc, { preview: false });
  }
  const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.scheme !== 'output') || vscode.window.activeTextEditor;
  if (!ed) return vscode.window.showWarningMessage('Ouvre un fichier pour y insérer le code.');
  await ed.edit(b => { if (mode === 'replace' && !ed.selection.isEmpty) b.replace(ed.selection, code); else b.insert(ed.selection.active, code) });
  vscode.window.showTextDocument(ed.document, ed.viewColumn);
}

async function linkKey(preset) {
  const items = Object.entries(PROVIDERS).filter(([, p]) => p.key !== false).map(([id, p]) => ({ label: p.name, description: id === 'anthropic' || id === 'openai' || id === 'xai' ? 'payant' : 'gratuit', id }));
  const pick = preset ? items.find(i => i.id === preset) : await vscode.window.showQuickPick(items, { placeHolder: 'Quelle IA veux-tu lier ?' });
  if (!pick) return;
  const P = PROVIDERS[pick.id];
  const open = 'Créer une clé';
  const choice = await vscode.window.showInformationMessage(`Il faut une clé ${P.name}. Crée-la sur leur site, puis colle-la ici.`, open, 'J\'ai déjà ma clé');
  if (choice === open) vscode.env.openExternal(vscode.Uri.parse(P.keyUrl));
  if (!choice) return;
  const key = await vscode.window.showInputBox({ prompt: `Colle ta clé ${P.name}`, password: true, ignoreFocusOut: true });
  if (!key) return;
  await ctx.secrets.store('agora.key.' + pick.id, key.trim());
  await cfg().update('provider', pick.id, vscode.ConfigurationTarget.Global);
  await cfg().update('model', '', vscode.ConfigurationTarget.Global);
  vscode.window.showInformationMessage(`${P.name} est lié à Agora.`);
  postState();
}

async function runAction(kind, question) {
  const c = editorContext();
  if (!c || !c.selection) return vscode.window.showWarningMessage('Sélectionne d\'abord du code.');
  await vscode.commands.executeCommand('agora.chat.focus');
  const block = ctxBlock(c);
  const text = kind === 'ask' ? `${question}\n\n${block}` : ACTIONS[kind](block);
  const label = kind === 'ask' ? question : { explain: 'Expliquer', fix: 'Corriger', refactor: 'Refactoriser', comment: 'Commenter', tests: 'Tests' }[kind] + ` · ${c.name} (${c.range})`;
  setTimeout(() => { view?.webview.postMessage({ type: 'userEcho', text: label }); send(text) }, view ? 0 : 600);
}

class ChatView {
  resolveWebviewView(v) {
    view = v;
    v.webview.options = { enableScripts: true, localResourceRoots: [vscode.Uri.joinPath(ctx.extensionUri, 'media')] };
    const nonce = Math.random().toString(36).slice(2);
    const orb = v.webview.asWebviewUri(vscode.Uri.joinPath(ctx.extensionUri, 'media', 'icon.png'));
    v.webview.html = require('fs').readFileSync(vscode.Uri.joinPath(ctx.extensionUri, 'media', 'chat.html').fsPath, 'utf8')
      .replace(/%NONCE%/g, nonce).replace(/%CSP%/g, v.webview.cspSource).replace(/%ICON%/g, String(orb));
    v.webview.onDidReceiveMessage(async m => {
      if (m.type === 'ready') postState();
      if (m.type === 'send') {
        const c = cfg().get('includeFile') ? editorContext() : null;
        send(c ? `${m.text}\n\n${ctxBlock(c)}` : m.text);
      }
      if (m.type === 'stop') abort?.abort();
      if (m.type === 'setProvider') { await cfg().update('provider', m.provider, vscode.ConfigurationTarget.Global); await cfg().update('model', '', vscode.ConfigurationTarget.Global); postState() }
      if (m.type === 'setModel') { await cfg().update('model', m.model, vscode.ConfigurationTarget.Global); postState() }
      if (m.type === 'toggleFile') { await cfg().update('includeFile', !cfg().get('includeFile'), vscode.ConfigurationTarget.Global); postState() }
      if (m.type === 'listModels') { try { v.webview.postMessage({ type: 'models', list: await listModels(cfg().get('provider')) }) } catch (e) { v.webview.postMessage({ type: 'models', list: [], error: e.message }) } }
      if (m.type === 'insert') insertCode(m.code, m.mode, m.lang);
      if (m.type === 'link') linkKey(m.provider);
      if (m.type === 'newChat') { history = [] }
      if (m.type === 'openWeb') vscode.env.openExternal(vscode.Uri.parse('https://rvm-lua.github.io/Agora/'));
    });
  }
}

function activate(context) {
  ctx = context;
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('agora.chat', new ChatView(), { webviewOptions: { retainContextWhenHidden: true } }),
    ...Object.keys(ACTIONS).map(k => vscode.commands.registerCommand('agora.' + k, () => runAction(k))),
    vscode.commands.registerCommand('agora.ask', async () => { const q = await vscode.window.showInputBox({ prompt: 'Ta question sur le code sélectionné' }); if (q) runAction('ask', q) }),
    vscode.commands.registerCommand('agora.linkKey', () => linkKey()),
    vscode.commands.registerCommand('agora.unlinkKey', async () => {
      const pick = await vscode.window.showQuickPick(Object.entries(PROVIDERS).filter(([, p]) => p.key !== false).map(([id, p]) => ({ label: p.name, id })), { placeHolder: 'Quelle IA délier ?' });
      if (pick) { await ctx.secrets.delete('agora.key.' + pick.id); vscode.window.showInformationMessage(`${pick.label} délié.`); postState() }
    }),
    vscode.commands.registerCommand('agora.newChat', () => { history = []; view?.webview.postMessage({ type: 'clear' }) }),
    vscode.commands.registerCommand('agora.openWeb', () => vscode.env.openExternal(vscode.Uri.parse('https://rvm-lua.github.io/Agora/'))),
    vscode.window.onDidChangeActiveTextEditor(() => postStateSoon()),
    vscode.window.onDidChangeTextEditorSelection(() => postStateSoon()),
  );
}
function deactivate() { abort?.abort() }
module.exports = { activate, deactivate };
