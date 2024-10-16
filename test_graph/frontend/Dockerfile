# Utiliser l'image Nginx pour servir du contenu statique
FROM nginx:alpine

# Copier le fichier de configuration Nginx depuis le dossier frontend
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers statiques vers le répertoire de Nginx
COPY ./index.html /usr/share/nginx/html/

