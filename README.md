# ReadFlow - Apprends l'anglais en lisant

Une Progressive Web App (PWA) moderne pour apprendre l'anglais en lisant des histoires interactives avec traduction, audio et quiz entièrement réalisée grâce au Vibe Coding.

## Fonctionnalités

- 📖 **Bibliothèque d'histoires** : Trois niveaux de difficulté (Débutant, Intermédiaire, Avancé)
- 🔤 **Traduction interactive** : Cliquez sur les mots ou phrases pour voir la traduction française
- 🔊 **Audio intégré** : Écoutez la prononciation avec accents américain et britannique
- 📝 **Mode simplifié** : Version simplifiée du texte pour débutants
- 🎯 **Quiz interactifs** : Testez vos connaissances après chaque histoire
- 📊 **Suivi des progrès** : Statistiques personnelles et objectifs quotidiens
- 📚 **Vocabulaire personnel** : Dictionnaire des mots appris
- 📱 **PWA** : Fonctionne hors ligne et peut être installée comme une app native

## Technologies utilisées

- **Framework** : SvelteKit
- **Styling** : Tailwind CSS
- **Langage** : TypeScript
- **PWA** : Service Worker, Manifest
- **Audio** : Web Speech API

## Installation

```bash
# Cloner le repository
git clone https://github.com/tomar/read-flow.git
cd read-flow

# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm run dev

# Ouvrir http://localhost:5173 dans votre navigateur
```

## Scripts disponibles

- `pnpm run dev` : Lance le serveur de développement
- `pnpm run build` : Construit l'application pour la production
- `pnpm run preview` : Prévisualise la version de production
- `pnpm run check` : Vérifie les types TypeScript
- `pnpm run lint` : Vérifie le code avec ESLint
- `pnpm run format` : Formate le code avec Prettier

## Déploiement

L'application est automatiquement déployée sur GitHub Pages via GitHub Actions à chaque push sur la branche `main`.

Pour activer le déploiement :

1. Aller dans **Settings > Pages** du repository GitHub
2. Sélectionner **GitHub Actions** comme source de déploiement

## Fonctionnalités PWA

L'application peut être installée comme une PWA sur mobile et desktop. Elle fonctionne également hors ligne grâce au Service Worker.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — utilisation non commerciale uniquement. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
