<div align="center">

<img src="icon.svg" width="96" height="96" alt="Logo Agora">

# Agora

**Toutes les IA dans un seul chat. Gratuit, sans installation, sans compte obligatoire.**

[Ouvrir Agora](https://rvm-lua.github.io/Agora/) · [Signaler un bug](https://github.com/rvm-lua/Agora/issues/new?labels=bug) · [Proposer une idée](https://github.com/rvm-lua/Agora/issues/new?labels=suggestion)

</div>

---

## Présentation

Agora est une application web de chat multi‑IA. Elle regroupe immédiatement plusieurs fournisseurs (Gemini, Groq, OpenRouter, Mistral, Cerebras, Claude, ChatGPT, Grok, etc.) dans votre navigateur. Les clés API restent localement, sauf option de synchronisation.

## Fonctionnalités clés

### Chat simple
- Choisissez un **mode** (Polyvalent, Rapide, Code, Réflexion, Images) et Agora sélectionne l’IA la plus adaptée.
- Spécifiez un modèle précis (Claude Opus, Sonnet, Haiku… ; GPT‑4.1 ; Gemini 2.5 Pro, Flash, etc.).
- **Comparer** deux ou trois réponses côte à côte et choisissez la meilleure.
- **Pièces jointes** : images, écrans, fichier de code, PDF.
- **Branches** : modifiez un message afin de créer un nouvel historique sans perdre les versions précédentes.
- **Assistants** prêts à l’emploi (Dev FiveM, Support joueurs, Annonces Discord…) ou créés sur mesure.
- **Commandes courtes** (ex. `/premortem`, `/80‑20`, `/hormozi`, `/debug`, `/logs`) et vos propres raccourcis.
- **Modes d’usage** (concise, expert, pirate…) et **plugins** activables (Superpowers, OmniRoute, RTK, Graphify, Claude Security, HyperFrames…).

### Mode Code dédié
- Spécifiez la plateforme cible (FiveM, RedM, Roblox, Minecraft, Unity, iOS, Android, Web…).
- Documentation **auto‑extrait** : Agora lit la doc officielle et fournit les passages pertinents à l’IA.
- Panneau **Aperçu / Code** : code en direct à droite, aperçu web et console.
- **Intégration GitHub** : l’IA lit votre dépôt, propose des modifications sur une branche et ouvre une pull‑request.
- **Agents de code** : confiez une tâche à GitHub Copilot ou à Cursor directement depuis Agora.
- Modes de *permission* (Demander, Auto ou Plan) accessibles via `Shift+Tab`.
- Analyse de logs FiveM, regroupement d’erreurs par ressource et proposition de correctifs.

### Personnalisation
- Design : thème clair/sombre, 8 palettes, couleurs, polices, arrondis, fond animé.
- **Suivi token** par IA et modèle.
- **Compte Agora** (facultatif) : authentifiez via Google, Discord, GitHub, Apple ou mail; synchronisez vos données dans Supabase; chiffrement AES‑256 via phrase secrète.
- Exportable comme application native (Windows, macOS, Linux, iOS, Android) par future release.

## Démarrage rapide (30 s)
1. Accédez à https://rvm-lua.github.io/Agora/
2. Tapez un message : **Agora Gratuit** répond immédiatement.
3. Pour des IA plus robustes, ouvrez “Comptes IA”, cliquez sur **Lier** à côté de Gemini, Groq ou OpenRouter, créez votre clé et collez‑la.

## Confidentialité & Sécurité

- Sans compte : tout est local (`localStorage`). Aucun flux vers nos serveurs.
- Les messages transitent directement du navigateur à l’IA ciblée.
- Avec compte : les données se synchronisent dans la base Supabase (chiffrée optionnellement).
- La lecture de documentation passe par [Jina Reader](https://jina.ai/reader/), modifiable dans **Réglages > Général**.

## Feuille de route

- [x] Chat multi‑IA, comparaison, pièces jointes, assistants
- [x] Mode Code, documentation auto, GitHub, agents Copilot & Cursor
- [x] Comptes & synchronisation
- [ ] Application Windows
- [ ] Applications iOS/Android
- [x] Extension VS Code & Cursor
- [ ] Extension Chrome

## Contribution

Vos idées et bugs sont toujours les bienvenus. Ouvrez un ticket via l’onglet **Suggestion** dans Agora ou créez une [issue](https://github.com/rvm-lua/Agora/issues).

## Crédits

- Orbes animées : [thinking‑orbs](https://github.com/Jakubantalik/thinking-orbs) © Jakub Antalik, licence MIT.
- Bibliothèques : marked, DOMPurify, highlight.js, Mermaid, pdf.js, supabase-js.
- Agora Gratuit fourni par [Pollinations.ai](https://pollinations.ai).

## Politique de confidentialité

Site Agora, extension Chrome et extension VS Code · mise à jour le 17 octobre 2026

Agora est un outil gratuit qui permet de discuter avec plusieurs IA. Il n'a pas de serveur qui lit tes messages : tout se passe dans ton navigateur ou ton éditeur.

### Ce qui reste sur ton appareil

- Tes clés API, tes réglages et tes discussions sont enregistrés localement (stockage du navigateur ou de l'éditeur).
- Agora ne vend, ne partage et n'analyse aucune donnée. Il n'y a ni publicité ni outil de mesure d'audience.

### Ce qui est envoyé, et à qui

- **Tes messages** partent directement vers l'IA que tu as choisie (par exemple Groq, Google Gemini, Mistral, OpenAI, Anthropic, xAI, OpenRouter, Cerebras ou Pollinations pour Agora Gratuit). Leur propre politique de confidentialité s'applique.
- **Le contenu d'une page web** n'est lu par l'extension Chrome que quand tu le demandes (bouton « Joindre la page », résumé ou clic droit). Il est alors envoyé à l'IA choisie avec ta question, et nulle part ailleurs.
- **Le texte sélectionné** n'est envoyé que quand tu utilises un menu Agora du clic droit.
- **Import des clés** : ce bouton lit les clés que tu as enregistrées sur le site Agora, dans ton propre navigateur, et les copie dans l'extension.

### Compte Agora (facultatif)

Si tu crées un compte sur le site, tes réglages et discussions sont synchronisés dans une base Supabase. Avec une phrase secrète, ils sont chiffrés dans ton navigateur avant l'envoi. Tu peux supprimer ton compte à tout moment depuis les réglages.

### Contact

Pour toute question : <https://github.com/rvm-lua/Agora/issues>.
