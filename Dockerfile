#Utiliser une image pour servir les fichiers statiques
FROM nginx:1.28.0-alpine3.21-slim 

#Copier les fichiers de build dans le dossier par défaut de Nginx
COPY dist/ /usr/share/nginx/html

#Exposer le port 80 pour le service
EXPOSE 80

#Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]