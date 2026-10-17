<div align="center">

<img src="icon.svg" width="96" height="96" alt="Logo Agora">

# Agora

**Toutes les IA dans un seul chat. Gratuit, sans installation, sans compte obligatoire.**

[Ouvrir Agora](https://ton-pseudo.github.io/agora/) · [Signaler un bug](../../issues/new?labels=bug) · [Proposer une idée](../../issues/new?labels=suggestion)

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
- **Compte Agora** (facultatif) : connexion avec Google, Discord, GitHub, Apple ou par e-mail, synchronisation entre appareils et chiffrement de bout en bout en option.
- **Installable** comme une application sur téléphone et sur PC.

## Démarrer en 30 secondes

1. Ouvre le site.
2. Écris ton message : **Agora Gratuit** répond déjà, sans rien configurer.
3. Pour des IA plus rapides, va dans **Comptes IA**, clique sur **Lier** à côté d'une IA gratuite (Gemini, Groq ou OpenRouter), crée ta clé et colle-la.

## Mettre en ligne sur GitHub Pages

1. Crée un dépôt **public**, par exemple `agora`.
2. Envoie tous les fichiers de ce dossier à la **racine** du dépôt : **Add file**, puis **Upload files**, puis **Commit changes**.
3. Va dans **Settings**, puis **Pages**. Dans **Source**, choisis **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`, et clique sur **Save**.
4. Après 1 à 2 minutes, le site est en ligne sur `https://ton-pseudo.github.io/agora/`.

**Mettre à jour** : envoie le nouveau `index.html` avec **Upload files**. Le fichier `CNAME` (domaine personnalisé) et les autres fichiers restent en place.

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
| CNAME | `agora` | `ton-pseudo.github.io` |

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

Ajoute aussi un CNAME `www` vers `ton-pseudo.github.io` pour que `www.mondomaine.fr` fonctionne.

> Le CNAME pointe vers `ton-pseudo.github.io` **sans** le nom du dépôt.
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
window.AGORA_CLOUD = { url: 'https://xxxx.supabase.co', anonKey: 'eyJhbGci…' };

// Lien vers ce dépôt : bouton « Suivre sur GitHub » et suggestions en issues.
window.AGORA_LINKS = { github: 'https://github.com/ton-pseudo/agora' };

// Version affichée dans les suggestions.
window.AGORA_VERSION = '0.7.0';
```

### Activer les comptes Agora
1. Crée un projet gratuit sur [supabase.com](https://supabase.com/dashboard).
2. Ouvre **SQL Editor** et lance le script fourni dans Agora (**Réglages**, puis **Compte Agora**). Il crée la table des données synchronisées et la boîte à suggestions.
3. Dans **Authentication**, puis **URL Configuration**, mets l'adresse de ton site.
4. Dans **Authentication**, puis **Providers**, active Google, Discord, GitHub et/ou Apple. Pour Apple, il faut un compte développeur payant.
5. Copie l'**URL du projet** et la **clé anon** dans `AGORA_CLOUD`.

La clé « anon » est publique par conception. La sécurité vient des règles RLS du script, qui limitent chaque personne à ses propres données.

## Confidentialité

- **Sans compte**, tout reste dans le navigateur (localStorage). Rien ne passe par un serveur Agora.
- Les messages vont **directement** de ton navigateur à l'IA que tu as choisie.
- **Avec un compte**, les données sont synchronisées dans la base Supabase du propriétaire du site. Avec une **phrase secrète**, elles sont chiffrées dans ton navigateur avant l'envoi (AES-256).
- La lecture de documentation passe par [Jina Reader](https://jina.ai/reader/). Tu peux changer ce service dans **Réglages**, puis **Général**.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète |
| `manifest.webmanifest` | Installation comme application |
| `sw.js` | Ouverture hors ligne |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Icônes |
| `.nojekyll` | Indique à GitHub Pages de servir les fichiers tels quels |
| `CNAME` | Créé par GitHub si tu ajoutes un domaine personnalisé |

## Feuille de route

- [x] Chat multi-IA, comparaison, pièces jointes, assistants
- [x] Mode Code, documentation automatique, GitHub, agents Copilot et Cursor
- [x] Comptes et synchronisation
- [ ] Application Windows
- [ ] Applications iOS et Android
- [ ] Extension VS Code
- [ ] Extension Chrome
- [ ] Bot Discord
- [ ] Ressource FiveM

## Contribuer

Les idées et les bugs sont les bienvenus : utilise l'onglet **Suggestion** dans Agora, ou ouvre une [issue](../../issues).

## Crédits

- Orbes animées : [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs), © Jakub Antalik, licence MIT.
- Bibliothèques : marked, DOMPurify, highlight.js, Mermaid, pdf.js, supabase-js.
- Agora Gratuit est fourni par [Pollinations.ai](https://pollinations.ai).

## Licence

Aucune licence n'est encore choisie : par défaut, tous droits réservés. Pour autoriser la réutilisation du code, ajoute un fichier `LICENSE` (par exemple MIT) depuis **Add file**, puis **Create new file**, et nomme-le `LICENSE` : GitHub propose des modèles.
