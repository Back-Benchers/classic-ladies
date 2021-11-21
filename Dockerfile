FROM node:16.13.0-alpine
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 5000
 
CMD ["npm", "run", "dev:app"]