FROM node:16.13.0-alpine
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install && npm run --prefix adminui watch
 
COPY . .
 
EXPOSE 5000
 
CMD ["npm", "run", "dev:app"]