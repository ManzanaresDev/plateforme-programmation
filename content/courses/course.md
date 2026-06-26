---
title: Apprendre Python par la pratique
description: Crée des projets concrets dès le premier jour. Aucune théorie inutile.
level: Débutant
sandboxUrl: https://trinket.io/embed/python3
---

# Apprendre Python par la pratique 🐍

## Objectif

Apprendre Python en créant des petits projets concrets.

Aucune théorie inutile. Chaque notion est utilisée immédiatement dans un exercice ou un mini-projet.

---

# Projet 1 - Afficher du texte

```python
print("Bonjour !")
print("Je découvre Python.")
```

## Exercice

Affiche :

```text
Bonjour !
J'apprends Python.
J'ai hâte de créer des jeux.
```

---

# Projet 2 - Parler avec l'utilisateur

```python
nom = input("Comment t'appelles-tu ? ")

print("Bonjour", nom)
```

## Exercice

Demande :

- le prénom
- l'âge

Puis affiche :

```text
Bonjour Lucas
Tu as 15 ans
```

---

# Projet 3 - Utiliser des nombres

```python
age = int(input("Quel âge as-tu ? "))

print(age + 10)
```

## Explication

`input()` renvoie du texte.

`int()` transforme ce texte en nombre.

---

# Projet 4 - Calculatrice

```python
nombre1 = int(input("Premier nombre : "))
nombre2 = int(input("Deuxième nombre : "))

print(nombre1 + nombre2)
```

## Exercice

Ajouter :

```python
print(nombre1 - nombre2)
print(nombre1 * nombre2)
print(nombre1 / nombre2)
```

---

# Projet 5 - Conditions

```python
age = int(input("Ton âge : "))

if age >= 18:
    print("Majeur")
else:
    print("Mineur")
```

## Exercice

Créer ce système :

```text
0 à 12 ans  -> Enfant
13 à 17 ans -> Adolescent
18+ ans     -> Adulte
```

---

# Projet 6 - Mot de passe

```python
mot_de_passe = "python"

saisie = input("Mot de passe : ")

if saisie == mot_de_passe:
    print("Connexion réussie")
else:
    print("Mot de passe incorrect")
```

## Exercice

Compter le nombre d'essais.

---

# Projet 7 - Boucle FOR

```python
for i in range(1, 11):
    print(i)
```

Résultat :

```text
1
2
3
4
5
6
7
8
9
10
```

## Exercice

Afficher uniquement les nombres pairs.

---

# Projet 8 - Compte à rebours

```python
for i in range(10, 0, -1):
    print(i)

print("Décollage !")
```

---

# Projet 9 - Boucle WHILE

```python
compteur = 1

while compteur <= 5:
    print(compteur)
    compteur += 1
```

## Explication

La boucle continue tant que la condition est vraie.

---

# Projet 10 - Devine le nombre

```python
nombre_secret = 7

while True:

    proposition = int(input("Devine le nombre : "))

    if proposition == nombre_secret:
        print("Bravo !")
        break

    print("Essaie encore")
```

## Version améliorée

```python
import random

nombre_secret = random.randint(1, 10)
```

---

# Projet 11 - Les listes

```python
jeux = [
    "Minecraft",
    "Roblox",
    "Fortnite"
]

print(jeux)
```

Afficher le premier élément :

```python
print(jeux[0])
```

---

# Projet 12 - Ajouter des éléments

```python
courses = []

courses.append("Pain")
courses.append("Lait")

print(courses)
```

Résultat :

```text
['Pain', 'Lait']
```

---

# Projet 13 - Liste de courses interactive

```python
courses = []

while True:

    produit = input("Produit : ")

    if produit == "stop":
        break

    courses.append(produit)

print(courses)
```

---

# Projet 14 - Parcourir une liste

```python
animaux = [
    "Chat",
    "Chien",
    "Lapin"
]

for animal in animaux:
    print(animal)
```

---

# Projet 15 - Fonctions

```python
def saluer(nom):
    print("Bonjour", nom)

saluer("Lucas")
saluer("Emma")
```

## Pourquoi ?

Éviter de répéter du code.

---

# Projet 16 - Générateur de pseudo

```python
import random

prefixes = [
    "Dark",
    "Mega",
    "Shadow",
    "Crazy"
]

suffixes = [
    "Wolf",
    "Dragon",
    "Ghost",
    "Ninja"
]

pseudo = random.choice(prefixes) + random.choice(suffixes)

print(pseudo)
```

---

# Projet 17 - Pierre Feuille Ciseaux

```python
import random

ordinateur = random.choice(
    ["pierre", "feuille", "ciseaux"]
)

joueur = input(
    "Pierre, feuille ou ciseaux ? "
)

print("Ordinateur :", ordinateur)
```

## Exercice

Ajouter toutes les règles du jeu.

---

# Projet 18 - Gestionnaire de notes

```python
notes = []

while True:

    note = input(
        "Note (stop pour quitter) : "
    )

    if note == "stop":
        break

    notes.append(float(note))

moyenne = sum(notes) / len(notes)

print("Moyenne :", moyenne)
```

---

# Projet 19 - Sauvegarder dans un fichier

```python
texte = input("Écris quelque chose : ")

with open("notes.txt", "w") as fichier:
    fichier.write(texte)
```

Lire le fichier :

```python
with open("notes.txt", "r") as fichier:
    contenu = fichier.read()

print(contenu)
```

---

# Projet 20 - Mini RPG

```python
vie_monstre = 50

while vie_monstre > 0:

    attaque = 10

    vie_monstre -= attaque

    print(
        "PV restants :",
        vie_monstre
    )

print("Monstre vaincu !")
```

---

# Projet 21 - Inverser une chaîne

```python
mot = input("Entre un mot : ")

print(mot[::-1])
```

## Exercice

Vérifier si le mot est un palindrome :

```text
"kayak" -> C'est un palindrome !
"python" -> Ce n'est pas un palindrome.
```

---

# Projet 22 - Convertisseur d'unités

```python
def km_vers_miles(km):
    return km * 0.621371

distance = float(input("Distance en km : "))

print(distance, "km =", km_vers_miles(distance), "miles")
```

## Exercice

Ajouter d'autres conversions :

- Celsius → Fahrenheit
- Kilos → Livres
- Euros → Dollars (avec un taux fixe)

---

# Projet 23 - Compteur de mots

```python
texte = input("Entre une phrase : ")

mots = texte.split()

print("Nombre de mots :", len(mots))
```

## Exercice

Afficher aussi :

- Le nombre de caractères (sans espaces)
- Le mot le plus long

---

# Projet 24 - Table de multiplication

```python
def table(n):
    for i in range(1, 11):
        print(n, "x", i, "=", n * i)

nombre = int(input("Quelle table ? "))
table(nombre)
```

## Exercice

Afficher toutes les tables de 1 à 10 dans un tableau.

---

# Projet 25 - Mini Quiz

```python
score = 0

questions = [
    ("Quelle est la capitale de la France ?", "paris"),
    ("Combien font 7 x 8 ?", "56"),
    ("Quel est le plus grand océan ?", "pacifique"),
]

for question, bonne_reponse in questions:
    reponse = input(question + " ").lower()
    if reponse == bonne_reponse:
        print("Correct !")
        score += 1
    else:
        print("Faux. Réponse :", bonne_reponse)

print("Score :", score, "/", len(questions))
```

## Exercice

Ajouter 5 questions et afficher un message selon le score.

---

# Projet 26 - Dictionnaire Python

```python
contacts = {
    "Lucas": "06 12 34 56 78",
    "Emma": "07 98 76 54 32",
}

nom = input("Chercher un contact : ")

if nom in contacts:
    print("Numéro :", contacts[nom])
else:
    print("Contact introuvable.")
```

## Exercice

Permettre d'ajouter et de supprimer des contacts.

---

# Projet 27 - Générateur de mot de passe

```python
import random
import string

longueur = int(input("Longueur du mot de passe : "))

caracteres = string.ascii_letters + string.digits + "!@#$%"

mot_de_passe = "".join(
    random.choice(caracteres) for _ in range(longueur)
)

print("Mot de passe :", mot_de_passe)
```

## Exercice

Permettre à l'utilisateur de choisir s'il veut des chiffres et/ou des symboles.

---

# Projet 28 - Chronomètre

```python
import time

input("Appuie sur Entrée pour démarrer...")
debut = time.time()

input("Appuie sur Entrée pour arrêter...")
fin = time.time()

duree = fin - debut
print(f"Temps écoulé : {duree:.2f} secondes")
```

## Exercice

Afficher le temps en minutes et secondes si la durée dépasse 60 secondes.

---

# Projet 29 - Tri de liste

```python
nombres = []

print("Entre 5 nombres (un par un) :")
for i in range(5):
    n = int(input(f"Nombre {i+1} : "))
    nombres.append(n)

print("Liste originale :", nombres)
print("Triée (croissant) :", sorted(nombres))
print("Triée (décroissant) :", sorted(nombres, reverse=True))
print("Min :", min(nombres))
print("Max :", max(nombres))
```

---

# Projet 30 - Jeu du pendu (version simple)

```python
import random

mots = ["python", "programmation", "ordinateur", "variable", "fonction"]
mot = random.choice(mots)
lettres_trouvees = []
essais = 6

while essais > 0:
    affichage = " ".join(
        lettre if lettre in lettres_trouvees else "_"
        for lettre in mot
    )
    print(affichage)

    if "_" not in affichage:
        print("Bravo, tu as gagné !")
        break

    lettre = input("Propose une lettre : ").lower()

    if lettre in lettres_trouvees:
        print("Déjà proposée !")
    elif lettre in mot:
        print("Bonne lettre !")
        lettres_trouvees.append(lettre)
    else:
        essais -= 1
        print(f"Raté ! Il te reste {essais} essai(s).")
else:
    print("Perdu ! Le mot était :", mot)
```

---

# Défi Final : Gestionnaire de tâches

Créer un programme capable de :

- Ajouter une tâche
- Afficher les tâches
- Supprimer une tâche
- Sauvegarder les tâches dans un fichier

Exemple :

```text
1 - Ajouter
2 - Afficher
3 - Supprimer
4 - Quitter
```

---

# Niveau suivant

Quand tous les projets précédents sont terminés :

- Modules Python
- POO (Programmation Orientée Objet)
- Tkinter
- Pygame
- APIs Web
- Web Scraping
- Automatisation
- Intelligence Artificielle

---

# Règle d'or

Ne jamais recopier du code sans le modifier.

Après chaque exercice :

- changer les variables ;
- ajouter une fonctionnalité ;
- casser le programme puis le réparer ;
- expérimenter.

C'est ainsi qu'on devient développeur.
