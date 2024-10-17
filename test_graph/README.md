# Dashboard de Monitoring - Guide d'Utilisation

Ce projet met en place un tableau de bord simple permettant de surveiller les ressources de la machine, en utilisant Node.js pour exposer les métriques et Nginx pour afficher le frontend. Le tout est orchestré à l'aide de Docker et Docker Compose.

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé les éléments suivants :

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Structure du Projet

Voici la structure des fichiers du projet :

|/sae51_2/
├── docker-compose.yml # Fichier pour orchestrer les conteneurs 
├── node-app 
│ ├── Dockerfile # Dockerfile pour le backend Node.js 
│ └── index.js # Serveur Node.js qui expose les métriques 
└── frontend 
	├── Dockerfile # Dockerfile pour le frontend (dashboard) Nginx 
	├── default.conf # Fichier de configuration Nginx 
	└── index.html # Dashboard HTML affichant les métriques 



## Étapes d'Utilisation

### 1. Cloner le Projet

Commencez par cloner le projet sur votre machine locale :

```bash

git clone https://github.com/C0C01611/sae51_2
cd sae51_2/

```
### 2. Démarrer les Conteneurs

Utilisez Docker Compose pour construire et démarrer les conteneurs :

```bash

docker-compose up -d

```
### 3. Accéder au Dashboard

Une fois les conteneurs lancés, ouvrez votre navigateur et accédez à l'adresse suivante :

```bash

http://localhost:8080

```

###4. Arrêter les Conteneurs

Pour arrêter les conteneurs, vous pouvez exécuter la commande suivante :

```bash

docker-compose down


```







