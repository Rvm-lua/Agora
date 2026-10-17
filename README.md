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
