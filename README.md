# Exercice sur Vue 3

Bienvenue sur cet exercice !

## Objectifs

Créer une todo liste fonctionnelle, dans lequel nous serons en mesure de :
- Afficher une liste de taches
- Afficher l'état de chaque tâche (à faire, en cours, finie)
- Transitioner d'un état à l'autre
- Ajouter une nouvelle tâche
- Supprimer une nouvelle tâche
- mettre à jour une nouvelle tâche

L'application devra bien évidemment implémenter des tests

## Exercice 1 - Refactorisation
- Refactoriser le code afin que chaque tâche se gère avec un composant
- Passer une liste de tâches en paramètre du composant TasksList
- Utiliser la bonne directive pour afficher la liste de tâche
- Améliorer l'affichage des tâches 
    - sur une seule ligne
    - espacement entre les tâches
    - numéroter les tâches
    - l'état doit être affiché dans un rond au lieu d'un carré

## Exercice 2 - Gestion d'état des tâches
- Ajouter un état au composant Task qui permette de connaître l'avancement de la tâche
- Gérer un avancement d'état circulaire (a faire => en cours => terminé => à faire => encours ...)
- A chaque clique, passer à l'état suivant

## Exercice 3 - gestion d'un store
- Remplacer la liste d'état codé en dur par une liste gérée par un store pinia
- Donner la possibilité au store de rajouter une tâche à la liste
- De même, permettre la suppression d'une tâche

## Exercice 4 - Ajouter une tâche 
- Dans l'interface, ajouter un champ texte avec un bouton "ajouter"
- Au clique sur le bouton "Ajouter", appeler la méthode du store permettant l'ajout d'une tâche
- Constater que cela fonctionne :)

## Exercice 5 - Supprimer une tâche 
- Pour chaque item de la liste, ajouter un bouton "Supprimer"
- Faire en sorte qu'au clique, l'item se supprime

## Exercice 6 - Mettre à jour une tâche
- Dans le composant tâche, afficher un bouton "Editer"
- Au clique sur le bouton "Editer", le texte doit être remplacer par un champs texte avec le contenu de la tâche
- Afficher à la place du bouton "Editer" deux boutons "Annuler" et "Ok"
- Coder le comportement des boutons "Annuler" et "Ok"

