<div align="center">

<img src="icon.svg" width="96" height="96" alt="Logo Agora">

# Agora

**Toutes les IA dans un seul chat. Gratuit, sans installation, sans compte obligatoire.**

[Ouvrir Agora](https://rvm-lua.github.io/Agora/) · [Télécharger](#télécharger) · [Confidentialité](https://rvm-lua.github.io/Agora/confidentialite.html) · [Signaler un bug](https://github.com/rvm-lua/Agora/issues/new?labels=bug) · [Proposer une idée](https://github.com/rvm-lua/Agora/issues/new?labels=suggestion)

</div>

---

## Présentation

Agora est un chat d'IA qui réunit plusieurs fournisseurs au même endroit : Gemini, Groq, OpenRouter, Mistral, Cerebras, et aussi Claude, ChatGPT et Grok si tu as une clé. Tu peux discuter tout de suite, sans compte, grâce à **Agora Gratuit**.

Tout se passe dans ton navigateur. Tes clés API et tes conversations restent sur ton appareil, sauf si tu choisis de les synchroniser avec un compte Agora.

## Fonctionnalités

### Discuter
- **Choix simple** : tu choisis entre Polyvalent, Rapide, Code, Réflexion ou Images, et Agora prend la meilleure IA disponible.
- **Versions des modèles** : tu peux aussi choisir une IA et sa version précise (Claude Opus, Sonnet, Haiku, Fable ; GPT-4.1 ; Gemini 2.5 Pro ou Flash, etc.).
- **Comparer** : 2 ou 3 IA répondent côte à côte, puis tu gardes la meilleure réponse.
- **Pièces jointes** : images, captures d'écran, fichiers de code et PDF.
- **Branches** : tu modifies un ancien message et l'IA repart de là, sans perdre la version précédente.
- **Assistants** : rôles prêts à l'emploi (Dev FiveM, Support joueurs, Annonces Discord…) ou créés par toi.
- **Codes secrets** : `/premortem`, `/80-20`, `/hormozi`, `/debug`, `/logs`… et tes propres codes.
- **Modes** de ton (concis, expert, pirate…) et **plugins** activables (Superpowers, OmniRoute, RTK, Graphify, Claude Security, HyperFrames…).

### Coder
- **Mode Code** avec ta plateforme : FiveM, RedM, Roblox, Minecraft, Unity, iOS, Android, Web…
- **Documentation officielle automatique** : Agora lit la doc de ta plateforme et de ton framework, puis donne les bons extraits à l'IA.
- **Panneau Aperçu / Code** : le code s'affiche en direct à droite, avec un aperçu des pages web et une console.
- **GitHub** : l'IA lit ton dépôt, envoie ses modifications sur une branche et ouvre une pull request.
- **Agents de code** : tu peux confier une tâche à GitHub Copilot ou à Cursor directement depuis Agora.
- **Modes de permission** comme Claude Code : Demander, Auto ou Plan (raccourci `Maj+Tab`).
- **Analyse de logs FiveM** : les erreurs sont regroupées par ressource, avec un correctif pour chacune.

### Personnaliser
- **Design** : thème clair ou sombre, 8 palettes, couleurs, polices, arrondis et fond animé.
- **Suivi des tokens** par IA et par modèle.
- **Compte Agora** (facultatif) : connexion avec Discord, GitHub ou par e-mail, synchronisation entre appareils et chiffrement de bout en bout en option.
- **Installable** comme une application sur téléphone et sur PC.

## Télécharger

| | Pour | Fichier |
|---|---|---|
| 🖥️ **Application Windows** | Windows 10 / 11 — agent de code comme Claude Code | [**Agora-Setup.exe**](https://github.com/rvm-lua/Agora/releases/latest/download/Agora-Setup.exe) (88 Mo) |
| 🧩 **Extension VS Code** | VS Code et Cursor | [**agora-vscode.vsix**](https://github.com/rvm-lua/Agora/releases/latest/download/agora-vscode.vsix) |
| 🌐 **Extension navigateur** | Chrome, Edge, Brave, Opera | [**agora-chrome.zip**](https://github.com/rvm-lua/Agora/releases/latest/download/agora-chrome.zip) |

Toutes les versions : [page Releases](https://github.com/rvm-lua/Agora/releases).

### Application Windows
1. Télécharge **Agora-Setup.exe** et lance-le.
2. Si Windows affiche « Windows a protégé votre ordinateur », clique sur **Informations complémentaires**, puis **Exécuter quand même** (l'application n'est pas encore signée).
3. Ouvre Agora, clique sur **Ouvrir un dossier** et choisis ton projet. Agora lit, modifie et crée les fichiers, et lance des commandes : chaque modification s'affiche en diff avec **Accepter / Refuser**. Modes **Demander**, **Auto** et **Plan** (`Maj+Tab`).
4. Astuce : un fichier `AGORA.md` à la racine de ton projet sert d'instructions permanentes pour l'IA.

### Extension VS Code / Cursor
1. Télécharge **agora-vscode.vsix**.
2. Dans VS Code ou Cursor : `Ctrl+Maj+P` → **Extensions: Install from VSIX…** → choisis le fichier.
3. Clique sur l'icône Agora dans la barre de gauche. Sélectionne du code et fais clic droit → **Agora** pour l'expliquer ou le corriger.

### Extension navigateur
1. Télécharge **agora-chrome.zip** et dézippe-le.
2. Ouvre `chrome://extensions` (ou `edge://extensions`) et active le **Mode développeur**.
3. Clique sur **Charger l'extension non empaquetée** et choisis le dossier dézippé.
4. Clique sur l'icône Agora (ou `Alt+Maj+A`) pour ouvrir le panneau. Clic droit sur un texte ou une page → **Agora**.

> Pour coder, choisis **Groq** ou **Gemini** (clés gratuites) : Agora Gratuit est plus lent et moins fiable pour modifier des fichiers.

## Démarrer en 30 secondes

1. Ouvre le site.
2. Écris ton message : **Agora Gratuit** répond déjà, sans rien configurer.
3. Pour des IA plus rapides, va dans **Comptes IA**, clique sur **Lier** à côté d'une IA gratuite (Gemini, Groq ou OpenRouter), crée ta clé et colle-la.

## Mettre en ligne sur GitHub Pages

1. Crée un dépôt **public** (ici : `rvm-lua/Agora`).
2. Envoie tous les fichiers de ce dossier à la **racine** du dépôt : **Add file**, puis **Upload files**, puis **Commit changes**.
3. Va dans **Settings**, puis **Pages**. Dans **Source**, choisis **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`, et clique sur **Save**.
4. Après 1 à 2 minutes, le site est en ligne sur `https://rvm-lua.github.io/Agora/`.

**Mettre à jour** : envoie le nouveau `index.html` avec **Upload files**. Le fichier `CNAME` (domaine personnalisé) et les autres fichiers restent en place.

## Publier une nouvelle version des applications

Les boutons **Télécharger** du site et de ce README pointent vers la **dernière Release**. Pour qu'ils marchent, les fichiers doivent avoir **exactement** ces noms :

| Fichier à joindre | Contenu |
|---|---|
| `Agora-Setup.exe` | l'installateur Windows |
| `agora-vscode.vsix` | l'extension VS Code / Cursor |
| `agora-chrome.zip` | l'extension navigateur |

1. Dans le dépôt, colonne de droite : **Releases**, puis **Draft a new release**.
2. **Choose a tag** : tape `v0.8.0` puis **Create new tag**. Titre : `Agora 0.8.0`.
3. Glisse les 3 fichiers dans **Attach binaries** (jusqu'à 2 Go par fichier).
4. Laisse **Set as the latest release** coché, puis **Publish release**.

Pour une mise à jour, crée une nouvelle Release (`v0.8.1`…) avec les mêmes noms de fichiers : les liens n'ont pas besoin de changer.

## Utiliser ton propre nom de domaine

Par exemple `agora.mondomaine.fr` ou `mondomaine.fr`.

### 1. Vérifier le domaine (recommandé)
Cette étape empêche quelqu'un d'autre d'utiliser ton domaine sur GitHub.
1. Clique sur ta photo en haut à droite, puis **Settings**, puis **Pages** dans le menu de gauche.
2. Clique sur **Add a domain** et entre `mondomaine.fr`.
3. GitHub te donne un enregistrement **TXT** à créer chez ton registraire de domaine (OVH, Cloudflare, Namecheap…).
4. Une fois l'enregistrement créé, reviens et clique sur **Verify**.

### 2. Configurer le DNS chez ton registraire

**Pour un sous-domaine** (`agora.mondomaine.fr` ou `www.mondomaine.fr`), c'est le plus simple :

| Type  | Nom     | Valeur              |
|-------|---------|---------------------|
| CNAME | `agora` | `rvm-lua.github.io` |

**Pour le domaine principal** (`mondomaine.fr`) :

| Type | Nom | Valeur |
|------|-----|--------|
| A    | `@` | `185.199.108.153` |
| A    | `@` | `185.199.109.153` |
| A    | `@` | `185.199.110.153` |
| A    | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` *(facultatif)* |
| AAAA | `@` | `2606:50c0:8001::153` *(facultatif)* |
| AAAA | `@` | `2606:50c0:8002::153` *(facultatif)* |
| AAAA | `@` | `2606:50c0:8003::153` *(facultatif)* |

Ajoute aussi un CNAME `www` vers `rvm-lua.github.io` pour que `www.mondomaine.fr` fonctionne.

> Le CNAME pointe vers `rvm-lua.github.io` **sans** le nom du dépôt.
> Sur Cloudflare, mets ces enregistrements en **« DNS only »** (nuage gris) le temps que GitHub crée le certificat HTTPS.

### 3. Déclarer le domaine dans le dépôt
1. Dans le dépôt, va dans **Settings**, puis **Pages**, puis **Custom domain**.
2. Entre `agora.mondomaine.fr` et clique sur **Save**. GitHub ajoute un fichier `CNAME` dans le dépôt : ne le supprime pas.
3. Attends que la vérification DNS soit au vert. Ça prend de quelques minutes à 24 h.
4. Coche **Enforce HTTPS**. Cette case peut mettre jusqu'à 24 h à apparaître.

### 4. Si tu utilises les comptes Agora
Dans Supabase, va dans **Authentication**, puis **URL Configuration**, et remplace l'ancienne adresse par ton nouveau domaine, dans **Site URL** comme dans **Redirect URLs**.

## Configuration

Trois lignes en haut de `index.html` :

```js
// Comptes Agora (Supabase). Laisse vide pour désactiver les comptes.
window.AGORA_CLOUD = { url: 'https://iiegjllgfqbjlegkafnl.supabase.co', anonKey: 'sb_publishable_…' };

// Lien vers ce dépôt et vers les téléchargements.
window.AGORA_LINKS = {
  github: 'https://github.com/rvm-lua/Agora',
  // Dossier des fichiers à télécharger (page Applications)
  downloads: 'https://github.com/rvm-lua/Agora/releases/latest/download/'
};

// Version affichée dans les suggestions.
window.AGORA_VERSION = '0.8.0';
```

### Activer les comptes Agora
1. Crée un projet gratuit sur [supabase.com](https://supabase.com/dashboard).
2. Ouvre **SQL Editor** et lance le script fourni dans Agora (**Réglages**, puis **Compte Agora**). Il crée la table des données synchronisées et la boîte à suggestions.
3. Dans **Authentication**, puis **URL Configuration**, mets `https://rvm-lua.github.io/Agora/` dans **Site URL** et **Redirect URLs**.
4. Dans **Authentication**, puis **Providers**, active Discord et GitHub (adresse de retour : `https://iiegjllgfqbjlegkafnl.supabase.co/auth/v1/callback`).
5. Copie l'**URL du projet** et la **clé publique** (Publishable key) dans `AGORA_CLOUD`.
6. Sur les projets Supabase récents, donne au site l'accès aux tables (déjà inclus dans le script du guide) :

```sql
grant select, insert, update, delete on public.agora_state to authenticated;
grant insert on public.agora_feedback to anon, authenticated;
```

La clé publique (Publishable ou « anon ») est faite pour être visible. La sécurité vient des règles RLS du script, qui limitent chaque personne à ses propres données.

## Confidentialité

La politique complète est ici : **[confidentialite.html](https://rvm-lua.github.io/Agora/confidentialite.html)**. En bref :

- **Sans compte**, tout reste dans le navigateur (localStorage). Rien ne passe par un serveur Agora.
- Les messages vont **directement** de ton navigateur à l'IA que tu as choisie.
- **Avec un compte**, les données sont synchronisées dans la base Supabase du propriétaire du site. Avec une **phrase secrète**, elles sont chiffrées dans ton navigateur avant l'envoi (AES-256).
- Les extensions et l'application PC gardent tes clés sur ton appareil (chiffrées par Windows pour l'app PC). Une page web n'est lue par l'extension que quand tu le demandes.
- La lecture de documentation passe par [Jina Reader](https://jina.ai/reader/). Tu peux changer ce service dans **Réglages**, puis **Général**.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète |
| `manifest.webmanifest` | Installation comme application |
| `sw.js` | Ouverture hors ligne |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Icônes |
| `confidentialite.html` | Politique de confidentialité (demandée par les stores d'extensions) |
| `.nojekyll` | Indique à GitHub Pages de servir les fichiers tels quels |
| `CNAME` | Créé par GitHub si tu ajoutes un domaine personnalisé |

## Feuille de route

- [x] Chat multi-IA, comparaison, pièces jointes, assistants
- [x] Mode Code, documentation automatique, GitHub, agents Copilot et Cursor
- [x] Comptes et synchronisation
- [x] Application Windows (agent de code)
- [ ] Applications iOS et Android
- [x] Extension VS Code et Cursor
- [x] Extension Chrome, Edge, Brave (installation manuelle)
- [ ] Extension sur les stores (Edge, Firefox)
- [ ] Bot Discord
- [ ] Ressource FiveM

## Contribuer

Les idées et les bugs sont les bienvenus : utilise l'onglet **Suggestion** dans Agora, ou ouvre une [issue](https://github.com/rvm-lua/Agora/issues).

## Crédits

- Orbes animées : [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs), © Jakub Antalik, licence MIT.
- Bibliothèques : marked, DOMPurify, highlight.js, Mermaid, pdf.js, supabase-js.
- Agora Gratuit est fourni par [Pollinations.ai](https://pollinations.ai).

## Licence

Aucune licence n'est encore choisie : par défaut, tous droits réservés. Pour autoriser la réutilisation du code, ajoute un fichier `LICENSE` (par exemple MIT) depuis **Add file**, puis **Create new file**, et nomme-le `LICENSE` : GitHub propose des modèles.
