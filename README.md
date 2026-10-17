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

## Démarrer en 30 secondes

1. Ouvre le site.
2. Écris ton message : **Agora Gratuit** répond déjà, sans rien configurer.
3. Pour des IA plus rapides, va dans **Comptes IA**, clique sur **Lier** à côté d'une IA gratuite (Gemini, Groq ou OpenRouter), crée ta clé et colle-la.

### Si tu utilises les comptes Agora
Dans Supabase, va dans **Authentication**, puis **URL Configuration**, et remplace l'ancienne adresse par ton nouveau domaine, dans **Site URL** comme dans **Redirect URLs**.

## Confidentialité

La politique complète est ici : **[confidentialite.html](https://rvm-lua.github.io/Agora/confidentialite.html)**. En bref :

- **Sans compte**, tout reste dans le navigateur (localStorage). Rien ne passe par un serveur Agora.
- Les messages vont **directement** de ton navigateur à l'IA que tu as choisie.
- **Avec un compte**, les données sont synchronisées dans la base Supabase du propriétaire du site. Avec une **phrase secrète**, elles sont chiffrées dans ton navigateur avant l'envoi (AES-256).
- Les extensions et l'application PC gardent tes clés sur ton appareil (chiffrées par Windows pour l'app PC). Une page web n'est lue par l'extension que quand tu le demandes.
- La lecture de documentation passe par [Jina Reader](https://jina.ai/reader/). Tu peux changer ce service dans **Réglages**, puis **Général**.

## Feuille de route

- [x] Chat multi-IA, comparaison, pièces jointes, assistants
- [x] Mode Code, documentation automatique, GitHub, agents Copilot et Cursor
- [x] Comptes et synchronisation
- [x] Application Windows (agent de code)
- [x] Extension VS Code et Cursor
- [x] Extension Chrome, Edge, Brave (installation manuelle)

## Contribuer

Les idées et les bugs sont les bienvenus : utilise l'onglet **Suggestion** dans Agora, ou ouvre une [issue](https://github.com/rvm-lua/Agora/issues).

## Crédits

- Orbes animées : [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs), © Jakub Antalik, licence MIT.
- Bibliothèques : marked, DOMPurify, highlight.js, Mermaid, pdf.js, supabase-js.
- Agora Gratuit est fourni par [Pollinations.ai](https://pollinations.ai).

## Licence

© 2026 Agora.  
Tous droits réservés.