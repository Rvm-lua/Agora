# Agora

Toutes les IA gratuites dans un seul chat : Gemini, Groq, OpenRouter, Mistral, et aussi Claude, ChatGPT et Grok si tu as une clé. Mode code avec la documentation de ta plateforme, panneau aperçu/code, GitHub, assistants, comparaison d'IA, analyse de logs FiveM.

Tout tourne dans le navigateur : les clés API et les conversations restent chez chaque utilisateur.

## Mettre en ligne sur GitHub Pages

1. Crée un dépôt public sur GitHub (par exemple `agora`).
2. Dépose tous les fichiers de ce dossier à la racine du dépôt (`index.html`, `manifest.webmanifest`, `sw.js`, les icônes et `.nojekyll`).
3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Une à deux minutes plus tard, le site est en ligne sur `https://ton-pseudo.github.io/agora/`.

## Activer les comptes Agora (facultatif)

Sans cette étape, Agora marche déjà. Les comptes servent seulement à synchroniser les données entre appareils.

1. Ouvre le site, va dans **Réglages → Compte Agora** et suis le guide : projet Supabase gratuit, script SQL, fournisseurs de connexion (Google, Discord, GitHub, Apple).
2. Pour que tous les visiteurs voient directement les boutons de connexion, ouvre `index.html` et remplis en haut du fichier :

```js
window.AGORA_CLOUD = { url: 'https://xxxx.supabase.co', anonKey: 'eyJhbGci…' };
```

La clé « anon » est publique par conception : la sécurité vient des règles RLS du script SQL, qui limitent chaque personne à ses propres données.

## Boîte à suggestions

L'onglet « Suggestion » envoie les messages :
- dans la table `agora_feedback` de ton Supabase si les comptes sont activés (le script SQL du guide la crée ; tu lis les messages dans Supabase → Table Editor) ;
- sinon, il ouvre une issue pré-remplie sur ton dépôt GitHub si `AGORA_LINKS.github` est rempli.

## Lien vers ton dépôt

Pour afficher « Suivre sur GitHub » sur la page Applications, remplis :

```js
window.AGORA_LINKS = { github: 'https://github.com/ton-pseudo/agora' };
```

## Licences

Moteur d'orbes animées : [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs), © Jakub Antalik, licence MIT.
