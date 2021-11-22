# TheClassicLadies


Commands:
    1. npm run app:create   -> create backend docker container for first time
    2. npm run app:stop     -> stop all containers
    3. npm run app:start    -> start all stopped containers
    4. npm run app:clean    -> stop containers , remove contaners and volume
    5. npm run pg:connect   -> connect postgres
    7. npm run dev          -> run only ui and adminui


To start dev:
1: npm run app:create
2: npm run app:stop / npm run app:start (upto need)
3: npm run dev


nginx setup:

server {
       listen       80;
       server_name  classicladies.com;

       location / {
           proxy_pass http://127.0.0.1:5000;
       }
    }