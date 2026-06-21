---
title: Bootcamp HTML, CSS & JavaScript
description: Crée des vrais projets web dès le premier jour. Zéro théorie inutile.
level: Débutant
sandboxUrl: https://trinket.io/embed/html
---

# Bootcamp HTML, CSS & JavaScript 🌐

## Objectif

Apprendre à créer des sites web en construisant des projets concrets.

Chaque notion est utilisée immédiatement. Tu ne lis pas — tu codes.

---

# Projet 1 - Ta première page web

Crée un fichier `index.html` et affiche du texte dans le navigateur.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ma page</title>
  </head>
  <body>
    <h1>Bonjour le monde !</h1>
    <p>Ma première page web.</p>
  </body>
</html>
```

## Exercice

Modifie la page pour afficher :
- Ton prénom en titre
- Une phrase qui te décrit

---

# Projet 2 - Les balises essentielles

Découvre les balises HTML les plus utilisées.

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<p>Un paragraphe de texte.</p>
<strong>Texte en gras</strong>
<em>Texte en italique</em>
<br>
<hr>
```

## Exercice

Crée une page "À propos de moi" avec :
- Ton nom en `h1`
- Ta ville en `h2`
- Un paragraphe de présentation
- Une ligne horizontale
- Tes hobbies en gras

---

# Projet 3 - Les listes

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Ouvrir l'éditeur</li>
  <li>Écrire le code</li>
  <li>Sauvegarder</li>
  <li>Ouvrir dans le navigateur</li>
</ol>
```

## Exercice

Crée une page "Mes films préférés" avec :
- Une liste non ordonnée de 5 films
- Une liste ordonnée de tes 3 étapes préférées dans un film

---

# Projet 4 - Les liens et les images

```html
<a href="https://google.com">Aller sur Google</a>

<a href="page2.html">Page suivante</a>

<img src="https://picsum.photos/300/200" alt="Une image">
```

## Exercice

Crée une page avec :
- Un lien vers ton site préféré
- Une image depuis internet
- Un lien qui ouvre dans un nouvel onglet (`target="_blank"`)

---

# Projet 5 - Les tableaux

```html
<table border="1">
  <tr>
    <th>Prénom</th>
    <th>Âge</th>
    <th>Ville</th>
  </tr>
  <tr>
    <td>Lucas</td>
    <td>15</td>
    <td>Paris</td>
  </tr>
  <tr>
    <td>Emma</td>
    <td>17</td>
    <td>Lyon</td>
  </tr>
</table>
```

## Exercice

Crée un tableau de tes 5 films préférés avec les colonnes :
- Titre
- Année
- Note sur 10

---

# Projet 6 - Les formulaires

```html
<form>
  <label>Prénom :</label>
  <input type="text" placeholder="Ton prénom">

  <label>Email :</label>
  <input type="email" placeholder="ton@email.com">

  <label>Message :</label>
  <textarea rows="4"></textarea>

  <button type="submit">Envoyer</button>
</form>
```

## Exercice

Crée un formulaire de contact avec :
- Nom, email, téléphone
- Un menu déroulant (`select`) pour choisir un sujet
- Un bouton d'envoi

---

# Projet 7 - Introduction au CSS

Ajoute du style à ta page HTML.

```html
<style>
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }

  h1 {
    color: #333;
    text-align: center;
  }

  p {
    color: #666;
    font-size: 16px;
  }
</style>
```

## Exercice

Stylise ta page "À propos de moi" :
- Fond de couleur
- Police personnalisée
- Couleur de titre différente

---

# Projet 8 - Classes et IDs

```html
<style>
  .carte {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }

  #titre-principal {
    font-size: 32px;
    color: navy;
  }

  .rouge { color: red; }
  .vert { color: green; }
</style>

<h1 id="titre-principal">Mon titre</h1>
<div class="carte">
  <p class="rouge">Texte rouge</p>
  <p class="vert">Texte vert</p>
</div>
```

## Exercice

Crée 3 cartes avec la même classe `.carte` mais des couleurs de fond différentes via des classes supplémentaires.

---

# Projet 9 - Le modèle de boîte (Box Model)

```html
<style>
  .boite {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 30px;
    border: 2px solid black;
    background: lightblue;
  }
</style>

<div class="boite">Contenu</div>
```

## Exercice

Crée 3 boîtes côte à côte avec :
- Des tailles différentes
- Des marges qui les séparent
- Des bordures colorées

---

# Projet 10 - Flexbox

```html
<style>
  .conteneur {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }

  .item {
    background: coral;
    padding: 20px;
    border-radius: 8px;
    color: white;
  }
</style>

<div class="conteneur">
  <div class="item">Un</div>
  <div class="item">Deux</div>
  <div class="item">Trois</div>
</div>
```

## Exercice

Crée une barre de navigation horizontale avec Flexbox :
- Logo à gauche
- Liens à droite

---

# Projet 11 - CSS Grid

```html
<style>
  .grille {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  .cellule {
    background: steelblue;
    color: white;
    padding: 24px;
    text-align: center;
    border-radius: 8px;
  }
</style>

<div class="grille">
  <div class="cellule">1</div>
  <div class="cellule">2</div>
  <div class="cellule">3</div>
  <div class="cellule">4</div>
  <div class="cellule">5</div>
  <div class="cellule">6</div>
</div>
```

## Exercice

Crée une galerie photo 3 colonnes avec des images depuis `picsum.photos`.

---

# Projet 12 - Page responsive (media queries)

```html
<style>
  .conteneur {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 768px) {
    .conteneur {
      grid-template-columns: 1fr;
    }
  }
</style>
```

## Exercice

Prends ta galerie du projet 11 et rends-la responsive :
- 3 colonnes sur desktop
- 2 colonnes sur tablette
- 1 colonne sur mobile

---

# Projet 13 - Les variables CSS

```html
<style>
  :root {
    --couleur-principale: #3b82f6;
    --couleur-texte: #333;
    --rayon: 8px;
    --espacement: 16px;
  }

  .bouton {
    background: var(--couleur-principale);
    color: white;
    padding: var(--espacement);
    border-radius: var(--rayon);
    border: none;
    cursor: pointer;
  }
</style>

<button class="bouton">Cliquez ici</button>
```

## Exercice

Crée un système de thème avec des variables CSS pour :
- 2 couleurs principales
- La police
- Les espacements

---

# Projet 14 - Les animations CSS

```html
<style>
  @keyframes apparaitre {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes tourner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .anime {
    animation: apparaitre 0.5s ease forwards;
  }

  .roue {
    width: 50px;
    height: 50px;
    background: coral;
    animation: tourner 2s linear infinite;
  }
</style>

<div class="anime"><h1>Bonjour !</h1></div>
<div class="roue"></div>
```

## Exercice

Crée un loader animé avec uniquement du CSS.

---

# Projet 15 - Introduction au JavaScript

```html
<script>
  console.log("Bonjour depuis JavaScript !");

  let nom = "Lucas";
  let age = 15;

  console.log("Je m'appelle " + nom + " et j'ai " + age + " ans.");
</script>
```

## Exercice

Déclare des variables pour :
- Ton prénom
- Ta ville
- Ton age

Et affiche une phrase complète dans la console.

---

# Projet 16 - Manipuler le DOM

```html
<h1 id="titre">Titre original</h1>
<button onclick="changerTitre()">Changer</button>

<script>
  function changerTitre() {
    document.getElementById("titre").textContent = "Titre modifié !";
    document.getElementById("titre").style.color = "red";
  }
</script>
```

## Exercice

Crée une page avec :
- Un paragraphe de texte
- Un bouton qui change le texte
- Un bouton qui change la couleur de fond

---

# Projet 17 - Les événements

```html
<button id="btn">Clique-moi</button>
<p id="compteur">0</p>

<script>
  let count = 0;

  document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("compteur").textContent = count;
  });
</script>
```

## Exercice

Crée un compteur avec :
- Bouton `+` pour incrémenter
- Bouton `-` pour décrémenter
- Bouton `Reset` pour remettre à zéro
- Affichage en rouge si négatif, vert si positif

---

# Projet 18 - Les conditions en JS

```html
<input id="age" type="number" placeholder="Ton âge">
<button onclick="verifier()">Vérifier</button>
<p id="resultat"></p>

<script>
  function verifier() {
    let age = parseInt(document.getElementById("age").value);
    let msg = "";

    if (age < 13) {
      msg = "Enfant";
    } else if (age < 18) {
      msg = "Adolescent";
    } else {
      msg = "Adulte";
    }

    document.getElementById("resultat").textContent = msg;
  }
</script>
```

## Exercice

Crée un calculateur d'IMC :
- Inputs pour poids et taille
- Calcul et affichage du résultat
- Message selon la catégorie (insuffisant, normal, surpoids)

---

# Projet 19 - Les boucles en JS

```html
<ul id="liste"></ul>

<script>
  let fruits = ["Pomme", "Banane", "Orange", "Mangue"];

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    document.getElementById("liste").appendChild(li);
  });
</script>
```

## Exercice

Crée une liste de tâches statique avec 5 items générés depuis un tableau JavaScript.

---

# Projet 20 - Les fonctions JS

```html
<script>
  function saluer(prenom) {
    return "Bonjour, " + prenom + " !";
  }

  function addition(a, b) {
    return a + b;
  }

  function estMajeur(age) {
    return age >= 18;
  }

  console.log(saluer("Lucas"));
  console.log(addition(5, 3));
  console.log(estMajeur(15));
</script>
```

## Exercice

Crée ces fonctions :
- `calculerTTC(prix)` → prix × 1.2
- `capitaliser(texte)` → première lettre en majuscule
- `estPair(nombre)` → true ou false

---

# Projet 21 - Todo List basique

```html
<input id="tache" placeholder="Nouvelle tâche...">
<button onclick="ajouterTache()">Ajouter</button>
<ul id="liste"></ul>

<script>
  function ajouterTache() {
    let input = document.getElementById("tache");
    let texte = input.value.trim();

    if (!texte) return;

    let li = document.createElement("li");
    li.textContent = texte;
    document.getElementById("liste").appendChild(li);

    input.value = "";
  }
</script>
```

## Exercice

Améliore la todo list :
- Bouton supprimer sur chaque tâche
- Cliquer sur une tâche la barre (tâche complétée)
- Compter les tâches restantes

---

# Projet 22 - localStorage

```html
<input id="nom" placeholder="Ton prénom">
<button onclick="sauvegarder()">Sauvegarder</button>
<button onclick="charger()">Charger</button>
<p id="affichage"></p>

<script>
  function sauvegarder() {
    let nom = document.getElementById("nom").value;
    localStorage.setItem("prenom", nom);
    alert("Sauvegardé !");
  }

  function charger() {
    let nom = localStorage.getItem("prenom");
    document.getElementById("affichage").textContent = nom || "Rien trouvé";
  }
</script>
```

## Exercice

Améliore la todo list du projet 21 pour que les tâches persistent après rechargement de la page.

---

# Projet 23 - Fetch et les APIs

```html
<button onclick="chargerBlague()">Nouvelle blague</button>
<p id="blague">Clique pour charger...</p>

<script>
  async function chargerBlague() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("blague").textContent =
      data.setup + " — " + data.punchline;
  }
</script>
```

## Exercice

Crée une page qui charge une citation aléatoire depuis `https://api.quotable.io/random` et l'affiche avec son auteur.

---

# Projet 24 - Météo avec une API

```html
<input id="ville" placeholder="Ville...">
<button onclick="getMeteo()">Chercher</button>
<div id="meteo"></div>

<script>
  async function getMeteo() {
    let ville = document.getElementById("ville").value;
    const res = await fetch(
      `https://wttr.in/${ville}?format=j1`
    );
    const data = await res.json();
    let temp = data.current_condition[0].temp_C;
    let desc = data.current_condition[0].weatherDesc[0].value;
    document.getElementById("meteo").innerHTML =
      `<h2>${ville}</h2><p>${temp}°C — ${desc}</p>`;
  }
</script>
```

## Exercice

Ajoute à la page météo :
- L'humidité
- La vitesse du vent
- Une icône selon le temps (soleil, nuage, pluie...)

---

# Projet 25 - Quiz interactif

```html
<div id="question"></div>
<div id="reponses"></div>
<div id="score"></div>

<script>
  const questions = [
    {
      q: "Quelle balise crée un titre principal ?",
      r: ["<h1>", "<p>", "<div>", "<title>"],
      bonne: 0
    },
    {
      q: "Comment centrer un élément avec Flexbox ?",
      r: ["text-align: center", "justify-content: center", "margin: auto", "align: center"],
      bonne: 1
    }
  ];

  let index = 0;
  let score = 0;

  function afficherQuestion() {
    let q = questions[index];
    document.getElementById("question").textContent = q.q;
    document.getElementById("reponses").innerHTML = "";

    q.r.forEach(function(rep, i) {
      let btn = document.createElement("button");
      btn.textContent = rep;
      btn.onclick = function() { repondre(i); };
      document.getElementById("reponses").appendChild(btn);
    });
  }

  function repondre(i) {
    if (i === questions[index].bonne) score++;
    index++;
    if (index < questions.length) {
      afficherQuestion();
    } else {
      document.getElementById("question").textContent = "Terminé !";
      document.getElementById("reponses").innerHTML = "";
      document.getElementById("score").textContent =
        score + "/" + questions.length;
    }
  }

  afficherQuestion();
</script>
```

## Exercice

Ajoute au quiz :
- 8 questions sur HTML, CSS et JS
- Un feedback visuel (vert/rouge) sur chaque réponse
- Un bouton recommencer

---

# Projet 26 - Dark mode toggle

```html
<style>
  body { background: white; color: black; transition: all 0.3s; }
  body.dark { background: #1a1a2e; color: #eee; }
  .btn-theme {
    position: fixed; top: 16px; right: 16px;
    padding: 8px 16px; border-radius: 20px;
    border: none; cursor: pointer;
    background: #333; color: white;
  }
</style>

<button class="btn-theme" onclick="toggleDark()">🌙 Dark</button>
<h1>Mon site</h1>
<p>Contenu de la page...</p>

<script>
  function toggleDark() {
    document.body.classList.toggle("dark");
    let btn = document.querySelector(".btn-theme");
    btn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light" : "🌙 Dark";
  }
</script>
```

## Exercice

Sauvegarde la préférence dans `localStorage` pour que le dark mode persiste au rechargement.

---

# Projet 27 - Carrousel d'images

```html
<style>
  .carrousel { position: relative; width: 400px; overflow: hidden; }
  .slides { display: flex; transition: transform 0.4s ease; }
  .slides img { width: 400px; height: 250px; object-fit: cover; flex-shrink: 0; }
  .btn { position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(0,0,0,0.5); color: white;
    border: none; padding: 12px; cursor: pointer; }
  .prev { left: 0; }
  .next { right: 0; }
</style>

<div class="carrousel">
  <div class="slides" id="slides">
    <img src="https://picsum.photos/400/250?random=1">
    <img src="https://picsum.photos/400/250?random=2">
    <img src="https://picsum.photos/400/250?random=3">
  </div>
  <button class="btn prev" onclick="move(-1)">‹</button>
  <button class="btn next" onclick="move(1)">›</button>
</div>

<script>
  let current = 0;
  const total = 3;

  function move(dir) {
    current = (current + dir + total) % total;
    document.getElementById("slides").style.transform =
      `translateX(-${current * 400}px)`;
  }
</script>
```

## Exercice

Ajoute :
- Des points indicateurs en bas
- Défilement automatique toutes les 3 secondes
- Pause au survol

---

# Projet 28 - Filtrer une liste

```html
<input id="recherche" placeholder="Rechercher..." oninput="filtrer()">
<div id="items"></div>

<script>
  const produits = [
    "Apple", "Banane", "Cerise", "Datte",
    "Fraise", "Kiwi", "Mangue", "Orange"
  ];

  function afficher(liste) {
    document.getElementById("items").innerHTML =
      liste.map(p => `<div class="item">${p}</div>`).join("");
  }

  function filtrer() {
    let q = document.getElementById("recherche").value.toLowerCase();
    afficher(produits.filter(p => p.toLowerCase().includes(q)));
  }

  afficher(produits);
</script>
```

## Exercice

Crée une liste de pays avec :
- Recherche en temps réel
- Filtre par continent (boutons)
- Tri alphabétique

---

# Projet 29 - Formulaire avec validation

```html
<form id="form" onsubmit="valider(event)">
  <input id="email" type="text" placeholder="Email">
  <span id="err-email" class="erreur"></span>

  <input id="mdp" type="password" placeholder="Mot de passe">
  <span id="err-mdp" class="erreur"></span>

  <button type="submit">Connexion</button>
</form>

<script>
  function valider(e) {
    e.preventDefault();
    let ok = true;

    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
      document.getElementById("err-email").textContent = "Email invalide";
      ok = false;
    } else {
      document.getElementById("err-email").textContent = "";
    }

    let mdp = document.getElementById("mdp").value;
    if (mdp.length < 6) {
      document.getElementById("err-mdp").textContent = "6 caractères minimum";
      ok = false;
    } else {
      document.getElementById("err-mdp").textContent = "";
    }

    if (ok) alert("Connexion réussie !");
  }
</script>
```

## Exercice

Ajoute la validation pour :
- Confirmation de mot de passe (les deux doivent correspondre)
- Indicateur de force du mot de passe (faible / moyen / fort)

---

# Projet 30 - Canvas : dessiner avec JS

```html
<canvas id="c" width="400" height="300" style="border:1px solid #ccc"></canvas>

<script>
  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");

  // Rectangle
  ctx.fillStyle = "steelblue";
  ctx.fillRect(20, 20, 150, 100);

  // Cercle
  ctx.beginPath();
  ctx.arc(300, 80, 50, 0, Math.PI * 2);
  ctx.fillStyle = "coral";
  ctx.fill();

  // Texte
  ctx.fillStyle = "#333";
  ctx.font = "24px Arial";
  ctx.fillText("Hello Canvas !", 100, 220);
</script>
```

## Exercice

Crée un mini éditeur de dessin :
- Dessiner en maintenant le clic
- Choisir la couleur
- Choisir la taille du pinceau
- Bouton effacer

---

# Défi Final - Portfolio complet

Crée un portfolio personnel avec :

## Pages

- **Accueil** : présentation, photo, bouton contact
- **Projets** : grille de tes projets avec titre, description, lien
- **Contact** : formulaire complet avec validation

## Fonctionnalités obligatoires

- Navigation entre les sections (smooth scroll)
- Dark mode avec sauvegarde localStorage
- Design responsive (mobile + desktop)
- Animations CSS à l'entrée des sections
- Formulaire de contact validé en JS

## Fonctionnalités bonus

- Filtre des projets par technologie
- Chargement des projets depuis un tableau JS
- Compteur animé pour les stats (ex: "30 projets", "2 ans d'expérience")
- Carrousel pour les témoignages

## Structure recommandée

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav><!-- Navigation --></nav>
  <section id="accueil"><!-- Hero --></section>
  <section id="projets"><!-- Grille projets --></section>
  <section id="contact"><!-- Formulaire --></section>
  <script src="script.js"></script>
</body>
</html>
```

---

# Niveau suivant

Quand le portfolio est terminé :

- **React** — composants, state, props
- **TypeScript** — typage statique
- **Node.js** — backend JavaScript
- **Bases de données** — SQL, MongoDB
- **Next.js** — applications full-stack
- **Git & GitHub** — versioning et collaboration

---

# Règle d'or

Ne jamais recopier du code sans le comprendre.

Après chaque projet :
- Change les couleurs et le contenu
- Ajoute une fonctionnalité non demandée
- Casse quelque chose et répare-le
- Explique le code à voix haute

C'est ainsi qu'on devient développeur.
