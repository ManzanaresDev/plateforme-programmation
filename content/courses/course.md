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
