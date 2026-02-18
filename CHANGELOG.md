# Changelog

Tous les changements notables de ce projet sont documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et ce projet adhère au [Versionnage Sémantique](https://semver.org/lang/fr/).

## [0.1.2] - 2026-02-18

### Ajouté

- Filtres par niveau dans la bibliothèque (Tous / Débutant / Intermédiaire / Avancé)
- Toggle "Non lus" pour masquer les histoires déjà lues
- Stories lues grisées avec badge "✓ Lu"
- Scroll automatique vers la première histoire non lue au retour à la bibliothèque
- Tracking des IDs des histoires lues (persisté en localStorage)

## [0.1.1] - 2026-02-18

### Modifié

- Suppression du bouton accent américain dans le popup de traduction (accent britannique uniquement)
- Chargement des stories via `import.meta.glob` — plus besoin de déclarer manuellement chaque story dans `index.ts`
- Mise à jour des dépendances : Biome 2.4.2, SvelteKit 2.52.0, Svelte 5.51.3, Tailwind CSS 4.2.0, svelte-check 4.4.0

## [0.1.0] - 2026-02-12

### Ajouté

- Bibliothèque de 15 histoires en anglais avec 3 niveaux de difficulté
- Lecteur interactif avec traduction mot-à-mot et phrase-à-phrase
- Mode simplifié pour les textes difficiles
- Synthèse vocale (accents américain et britannique)
- Quiz de compréhension après chaque histoire
- Dictionnaire personnel de vocabulaire
- Suivi de progression (streak, points, temps de lecture)
- Objectifs quotidiens
- Application PWA installable avec support hors-ligne
- Page À propos avec changelog, crédits et numéro de version
- Détection automatique de nouvelle version avec reset du cache PWA
