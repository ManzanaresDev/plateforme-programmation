---
title: Apprendre Luau (language jeux Roblox) par la pratique
description: Crée des projets concrets dès le premier jour. Aucune théorie inutile.
level: Débutant
sandboxUrl: "https://play.luau.org/"
---

# Tutoriel Luau pour Roblox — Guide pratique complet

> **Prérequis :** avoir installé [Roblox Studio](https://www.roblox.com/create) (gratuit). Tout le code de ce tutoriel se teste directement dans Studio.

---

# Chapitre 1 — Installation et prise en main de Roblox Studio

## Installer Roblox Studio et configurer son environnement

1. Télécharge Roblox Studio sur [roblox.com/create](https://www.roblox.com/create)
2. Connecte-toi avec ton compte Roblox (ou crée-en un gratuitement)
3. Lance Studio → clique sur **New → Baseplate** pour créer un projet vide

**Activer la console de sortie :**

- Menu `View` → coche `Output` et `Explorer` et `Properties`

**Ton premier script :**

- Dans l'`Explorer`, clique droit sur `ServerScriptService` → `Insert Object` → `Script`
- Double-clique sur le script, efface le contenu et écris :

```luau
print("Bonjour Roblox !")
```

- Appuie sur le bouton ▶ **Play** → tu vois le message dans la fenêtre Output ✅

---

## Comprendre les types de scripts dans Roblox

| Type           | Emplacement conseillé             | Rôle                                         |
| -------------- | --------------------------------- | -------------------------------------------- |
| `Script`       | ServerScriptService               | Code côté serveur (logique du jeu)           |
| `LocalScript`  | StarterPlayerScripts / StarterGui | Code côté client (UI, caméra, inputs)        |
| `ModuleScript` | ReplicatedStorage                 | Code partagé, importé par les autres scripts |

**Exemple concret — Script serveur vs LocalScript :**

```luau
-- Script (serveur) : fait apparaître une brique pour tous les joueurs
local part = Instance.new("Part")
part.Size = Vector3.new(4, 1, 4)
part.Position = Vector3.new(0, 5, 0)
part.Parent = workspace
```

```luau
-- LocalScript (client) : affiche un message uniquement à ce joueur
local Players = game:GetService("Players")
local player = Players.LocalPlayer
print("Bienvenue " .. player.Name .. " !")
```

---

# Chapitre 2 — Les bases du langage Luau

## Variables, types et opérateurs

Luau est un langage **dynamiquement typé** dérivé de Lua, avec des ajouts de Roblox.

```luau
-- Déclaration de variables
local nom = "Roblox"          -- string
local vie = 100               -- number
local estVivant = true        -- boolean
local rien = nil              -- nil (valeur vide)

-- Opérateurs arithmétiques
local somme = 10 + 5          -- 15
local puissance = 2 ^ 8       -- 256
local reste = 17 % 5          -- 2

-- Concaténation de chaînes
local message = "Joueur : " .. nom  -- "Joueur : Roblox"

-- Vérification de type
print(type(vie))       -- "number"
print(type(nom))       -- "string"
```

**Les annotations de type (Luau strict) :**

```luau
-- Luau permet d'annoter les types pour éviter les bugs
local vie: number = 100
local nom: string = "Hero"

local function additionner(a: number, b: number): number
    return a + b
end

print(additionner(3, 7))  -- 10
```

---

## Conditions, boucles et fonctions

```luau
-- Condition if / elseif / else
local score = 75

if score >= 90 then
    print("Excellent !")
elseif score >= 60 then
    print("Bien joué !")
else
    print("Essaie encore.")
end

-- Boucle numérique : de 1 à 5
for i = 1, 5 do
    print("Tour " .. i)
end

-- Boucle while
local compteur = 0
while compteur < 3 do
    compteur += 1
    print("compteur = " .. compteur)
end

-- Boucle repeat...until
local x = 0
repeat
    x += 1
until x >= 5
print("x final : " .. x)  -- 5

-- Fonction simple
local function saluer(nom: string): string
    return "Bonjour " .. nom .. " !"
end

print(saluer("Marcos"))  -- "Bonjour Marcos !"

-- Fonction avec plusieurs valeurs de retour
local function diviser(a: number, b: number): (number, number)
    return math.floor(a / b), a % b
end

local quotient, reste = diviser(17, 5)
print(quotient, reste)  -- 3   2
```

---

# Chapitre 3 — Tables et structures de données

## Tableaux et dictionnaires

En Luau, tout est une **table** (équivalent des arrays et objets en JS).

```luau
-- Tableau (array) indexé à partir de 1
local fruits = {"pomme", "banane", "orange"}

print(fruits[1])          -- "pomme"
print(#fruits)            -- 3 (longueur)

-- Ajouter / supprimer
table.insert(fruits, "kiwi")
print(#fruits)            -- 4

table.remove(fruits, 2)   -- supprime "banane"
print(fruits[2])          -- "orange"

-- Parcourir un tableau avec ipairs
for index, valeur in ipairs(fruits) do
    print(index, valeur)
end

-- Dictionnaire (clé → valeur)
local joueur = {
    nom = "Marcos",
    vie = 100,
    niveau = 5,
}

print(joueur.nom)         -- "Marcos"
joueur.niveau += 1
print(joueur.niveau)      -- 6

-- Parcourir un dictionnaire avec pairs
for cle, valeur in pairs(joueur) do
    print(cle .. " = " .. tostring(valeur))
end
```

---

## Tables imbriquées et ModuleScript

Les **ModuleScripts** permettent de partager du code entre scripts.

**Dans ReplicatedStorage → ModuleScript nommé `Config` :**

```luau
-- ModuleScript : Config
local Config = {}

Config.vitesseJoueur = 16
Config.hauteurSaut = 7.2
Config.nomJeu = "Super Adventure"

Config.ennemis = {
    { nom = "Slime",  vie = 30,  degats = 5  },
    { nom = "Dragon", vie = 200, degats = 40 },
}

return Config
```

**Dans un Script ou LocalScript, importer le module :**

```luau
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Config = require(ReplicatedStorage:WaitForChild("Config"))

print(Config.nomJeu)                     -- "Super Adventure"
print(Config.ennemis[1].nom)             -- "Slime"

for _, ennemi in ipairs(Config.ennemis) do
    print(ennemi.nom .. " — Vie : " .. ennemi.vie)
end
```

---

# Chapitre 4 — Manipulation des objets Roblox (Instances)

## Créer, modifier et détruire des Instances

Tout objet dans Roblox est une **Instance**. On les crée et modifie via le code.

```luau
-- Créer une brique colorée
local part = Instance.new("Part")
part.Name        = "MaBrique"
part.Size        = Vector3.new(6, 1, 6)
part.Position    = Vector3.new(0, 0.5, 0)
part.BrickColor  = BrickColor.new("Bright red")
part.Material    = Enum.Material.SmoothPlastic
part.Anchored    = true   -- ne tombe pas sous la gravité
part.Parent      = workspace

-- Modifier après création
part.Size = Vector3.new(10, 1, 10)

-- Attendre que l'objet existe avant de l'utiliser (bonne pratique)
local sol = workspace:WaitForChild("MaBrique")
print(sol.Name)  -- "MaBrique"

-- Détruire un objet
task.wait(5)   -- attendre 5 secondes
part:Destroy()
```

---

## Trouver et parcourir des objets dans le Workspace

```luau
-- Trouver un objet par nom
local lampe = workspace:FindFirstChild("Lampe")
if lampe then
    lampe.BrickColor = BrickColor.new("Bright yellow")
else
    print("Lampe introuvable !")
end

-- Parcourir tous les enfants d'un dossier
local dossier = workspace:FindFirstChild("Obstacles")
if dossier then
    for _, objet in ipairs(dossier:GetChildren()) do
        if objet:IsA("Part") then
            objet.Transparency = 0.5
        end
    end
end

-- Trouver par classe (GetDescendants pour chercher en profondeur)
for _, v in ipairs(workspace:GetDescendants()) do
    if v:IsA("SpawnLocation") then
        print("SpawnLocation trouvé : " .. v.Name)
    end
end
```

---

# Chapitre 5 — Événements et interactions joueur

## Connecter des événements (Touched, Clicked…)

```luau
-- Brique qui donne des points quand on la touche
local part = workspace:WaitForChild("CoinBrique")
local Players = game:GetService("Players")

part.Touched:Connect(function(hit)
    -- Vérifie que c'est un joueur (pas une autre brique)
    local character = hit.Parent
    local player = Players:GetPlayerFromCharacter(character)

    if player then
        print(player.Name .. " a touché la brique !")
        part:Destroy()  -- la brique disparaît
    end
end)
```

```luau
-- ClickDetector : cliquer sur un objet pour l'activer
local part = workspace:WaitForChild("Porte")
local clickDetector = Instance.new("ClickDetector")
clickDetector.MaxActivationDistance = 10
clickDetector.Parent = part

clickDetector.MouseClick:Connect(function(player)
    print(player.Name .. " a cliqué sur la porte !")
    part.Transparency = 0.8
    part.CanCollide = false
    task.wait(3)
    part.Transparency = 0
    part.CanCollide = true
end)
```

---

## Gérer les joueurs qui rejoignent et quittent

```luau
-- Script dans ServerScriptService
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print(player.Name .. " a rejoint la partie !")

    -- Attendre que le personnage soit chargé
    player.CharacterAdded:Connect(function(character)
        print(player.Name .. " a un personnage !")
        local humanoid = character:WaitForChild("Humanoid")
        humanoid.WalkSpeed = 20   -- vitesse personnalisée
        humanoid.JumpPower = 60   -- saut personnalisé
    end)
end)

Players.PlayerRemoving:Connect(function(player)
    print(player.Name .. " a quitté la partie.")
end)
```

---

# Chapitre 6 — Interface utilisateur (GUI)

## Créer une GUI avec du code

```luau
-- LocalScript dans StarterGui
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")

-- Créer le ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "MonInterface"
screenGui.ResetOnSpawn = false
screenGui.Parent = playerGui

-- Créer un cadre
local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 200, 0, 60)
frame.Position = UDim2.new(0, 20, 0, 20)
frame.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
frame.Parent = screenGui

-- Texte dans le cadre
local label = Instance.new("TextLabel")
label.Size = UDim2.new(1, 0, 1, 0)
label.BackgroundTransparency = 1
label.Text = "❤️ Vie : 100"
label.TextColor3 = Color3.fromRGB(255, 255, 255)
label.TextSize = 20
label.Font = Enum.Font.GothamBold
label.Parent = frame
```

---

## Mettre à jour la GUI en temps réel

```luau
-- LocalScript : affiche la vie du joueur en temps réel
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")

-- Récupère le label créé précédemment
local gui = player.PlayerGui:WaitForChild("MonInterface")
local label = gui.Frame.TextLabel

-- Met à jour à chaque changement de vie
humanoid.HealthChanged:Connect(function(newHealth)
    local vie = math.floor(newHealth)
    label.Text = "❤️ Vie : " .. vie

    -- Change la couleur si vie basse
    if vie < 30 then
        label.TextColor3 = Color3.fromRGB(255, 80, 80)
    else
        label.TextColor3 = Color3.fromRGB(255, 255, 255)
    end
end)
```

---

# Chapitre 7 — RemoteEvents : communication serveur ↔ client

## Envoyer des données du client au serveur

Les **RemoteEvents** sont essentiels pour la sécurité : la logique reste sur le serveur.

**Setup dans ReplicatedStorage :**

- Crée un dossier `RemoteEvents` dans `ReplicatedStorage`
- Ajoute un `RemoteEvent` nommé `AttaquerEvent`

```luau
-- LocalScript (client) : le joueur appuie sur une touche pour attaquer
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local UserInputService = game:GetService("UserInputService")
local attaquerEvent = ReplicatedStorage.RemoteEvents:WaitForChild("AttaquerEvent")

UserInputService.InputBegan:Connect(function(input, gameProcessed)
    if gameProcessed then return end  -- ignore si dans un menu

    if input.KeyCode == Enum.KeyCode.F then
        attaquerEvent:FireServer()  -- envoie l'événement au serveur
        print("Attaque envoyée !")
    end
end)
```

```luau
-- Script (serveur) : reçoit l'attaque et applique les dégâts
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local attaquerEvent = ReplicatedStorage.RemoteEvents:WaitForChild("AttaquerEvent")

attaquerEvent.OnServerEvent:Connect(function(player)
    print(player.Name .. " attaque !")

    local character = player.Character
    if not character then return end

    -- Cherche un ennemi proche
    for _, v in ipairs(workspace:GetDescendants()) do
        if v.Name == "EnnemiHumanoid" and v:IsA("Humanoid") then
            local dist = (v.Parent.HumanoidRootPart.Position - character.HumanoidRootPart.Position).Magnitude
            if dist < 8 then
                v:TakeDamage(25)
                print("Ennemi touché pour 25 dégâts !")
            end
        end
    end
end)
```

---

## Envoyer des données du serveur au client (RemoteFunction)

```luau
-- Dans ReplicatedStorage : ajoute un RemoteFunction nommé "GetScore"

-- Script (serveur)
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local getScore = ReplicatedStorage:WaitForChild("GetScore")

local scores = {}  -- stocke les scores des joueurs

game:GetService("Players").PlayerAdded:Connect(function(player)
    scores[player.Name] = 0
end)

getScore.OnServerInvoke = function(player)
    return scores[player.Name] or 0
end
```

```luau
-- LocalScript (client)
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local getScore = ReplicatedStorage:WaitForChild("GetScore")

local monScore = getScore:InvokeServer()
print("Mon score actuel : " .. monScore)
```

---

# Chapitre 8 — Projet final : un mini-jeu complet

## Architecture du projet

Voici la structure d'un mini-jeu **Collecte de pièces** :

```
ServerScriptService/
  └── GameManager (Script)
ReplicatedStorage/
  ├── RemoteEvents/
  │     └── PieceCollectee (RemoteEvent)
  └── Config (ModuleScript)
StarterPlayerScripts/
  └── ClientManager (LocalScript)
StarterGui/
  └── HUD (LocalScript)
Workspace/
  └── Pieces/ (Dossier avec des Parts)
```

---

## Code complet du mini-jeu

**ModuleScript `Config` dans ReplicatedStorage :**

```luau
local Config = {}
Config.tempsDuJeu = 60       -- secondes
Config.valeurPiece = 10      -- points par pièce
Config.vitesseJoueur = 18
return Config
```

**Script `GameManager` dans ServerScriptService :**

```luau
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Config = require(ReplicatedStorage:WaitForChild("Config"))
local pieceEvent = ReplicatedStorage.RemoteEvents:WaitForChild("PieceCollectee")

local scores = {}

-- Initialise chaque joueur
Players.PlayerAdded:Connect(function(player)
    scores[player.Name] = 0

    player.CharacterAdded:Connect(function(character)
        local humanoid = character:WaitForChild("Humanoid")
        humanoid.WalkSpeed = Config.vitesseJoueur
    end)
end)

-- Quand le client signale une collecte
pieceEvent.OnServerEvent:Connect(function(player, pieceName)
    local piece = workspace.Pieces:FindFirstChild(pieceName)
    if not piece then return end  -- sécurité : la pièce doit exister côté serveur

    scores[player.Name] = (scores[player.Name] or 0) + Config.valeurPiece
    piece:Destroy()
    print(player.Name .. " → " .. scores[player.Name] .. " pts")
end)

-- Timer de fin de partie
task.wait(Config.tempsDuJeu)
print("=== FIN DU JEU ===")
for nom, score in pairs(scores) do
    print(nom .. " : " .. score .. " pts")
end
```

**LocalScript `ClientManager` dans StarterPlayerScripts :**

```luau
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local pieceEvent = ReplicatedStorage.RemoteEvents:WaitForChild("PieceCollectee")

local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()

-- Détecte le contact avec les pièces
local function onTouched(hit, piece)
    if hit.Parent == character then
        pieceEvent:FireServer(piece.Name)
    end
end

-- Connecte toutes les pièces existantes et futures
local function connecterPiece(piece)
    if piece:IsA("Part") then
        piece.Touched:Connect(function(hit)
            onTouched(hit, piece)
        end)
    end
end

workspace:WaitForChild("Pieces").ChildAdded:Connect(connecterPiece)
for _, piece in ipairs(workspace.Pieces:GetChildren()) do
    connecterPiece(piece)
end
```

---

# Récapitulatif des bonnes pratiques

| ✅ À faire                                         | ❌ À éviter                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| Mettre la logique critique côté **serveur**        | Faire confiance au client pour les scores                |
| Utiliser `task.wait()` au lieu de `wait()`         | Utiliser l'ancienne fonction `wait()` (dépréciée)        |
| Utiliser `WaitForChild()` pour attendre les objets | Accéder directement sans vérifier l'existence            |
| Typer ses variables avec Luau strict               | Laisser les types ambigus dans les grandes bases de code |
| Organiser le code dans des **ModuleScripts**       | Tout mettre dans un seul script de 1000 lignes           |
| Déconnecter les événements inutilisés              | Laisser des connexions actives qui fuient la mémoire     |

---

_Tutoriel rédigé pour Roblox Studio — Luau — Juin 2026_
