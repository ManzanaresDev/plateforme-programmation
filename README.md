# Python Learning Platform

Plateforme interactive d'apprentissage Python développée avec Next.js.

## Fonctionnalités

- Affichage des cours Markdown
- Sommaire automatique
- Navigation entre les projets
- Sauvegarde de la progression
- Sandbox Python intégré
- Responsive
- Déploiement Vercel

## Installation

```bash
git clone <repo>

cd python-learning-platform

npm install

npm run dev
```

Application :

```text
http://localhost:3000
```

## Déploiement Vercel

```bash
npm install -g vercel

vercel
```

ou connecter le dépôt GitHub directement sur Vercel.

## Structure

```text
app/
components/
content/
hooks/
lib/
```

## Progression

La progression est enregistrée dans :

```text
localStorage
```

clé :

```text
python-progress
```

## Technologies

- Next.js 15
- TypeScript
- React Markdown
- Remark GFM
- CSS natif

## Évolutions futures

- Pyodide
- Validation automatique des exercices
- Authentification
- Classement des étudiants
- Certificat PDF
- Tableau de bord administrateur
# plateforme-programmation
