# !/usr/bin/env python3
#-*- coding: utf-8-*-

#ceci est le jeu du juste prix
print("*"*100)
print(" "*30 ,"BIENVENUE SUR LE JEU DU JUSTE PRIX !")
print("*"*100)

print("Pour jouer c'est très simple , il vous suffit de donner la valeur maximal et ensuite de trouver le nombre qui se trouve entre 1 et votre valeur maximal .")
print("A la fin s'affiche la quantité de nombre que vous avez tapé ET le temp que vous avez mis . Bon courage et amusez vous bien !!!")      


import random
import time

#on définit que par défault la valeur minimum est 1
valeurMin = 1

# vérifie que la valeur maximal donné par l'utilisateur est bien un nombre 
while True :
    print()
    valeurMax = input("Quelle sera la valeur maximal ? : ")

    valeurMaxNb = valeurMax.isdigit()

    if valeurMaxNb == False:
        print("vous devez entrer un nombre !")
    elif valeurMaxNb == True:
        break
        


valeurMax = int(valeurMax)

#on crée une variable qui va stocker le nombre à trouver .
nbHasard = random.randint(valeurMin , valeurMax)

rep = 0

nbErreur = []

#sert à démarrer le timer 
t1 = time.time()


while rep!= nbHasard:

    print("")
    rep = input("quelle est votre choix ?: ")
    repTest = rep.isdigit()
    if repTest == False:
        print("vous devez entrer un nombre !")
    elif repTest == True:
        rep = int(rep)
        nbErreur.append(rep)
        print("")

        if rep<nbHasard:
            print(" "*25 ,"+")
            print()

        if rep>nbHasard:
            print(" "*25 ,"-")
            print()
        

#arretez le timer et calculer le résultat .
t2 = time.time() - t1
t2 = int(t2)

#afficher le résultat .
print("bravo vous avez trouver la bonne réponse !")
print("vous avez trouvé la réponse au bout de {0} essais et au bout de {1} secondes.".format(len(nbErreur),t2))
