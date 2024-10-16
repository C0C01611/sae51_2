# Utiliser une image Node.js officielle
FROM node:18

# Créer un dossier pour l'application
WORKDIR /usr/src/app

# Copier package.json et installer les dépendances
COPY package.json ./
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 3000 pour l'API
EXPOSE 3000

# Démarrer l'application Node.js
CMD ["node", "index.js"]

