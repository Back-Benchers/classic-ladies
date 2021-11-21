# TheClassicLadies
ecommerce app
Commands:
    1. npm run dev:create -> create docker container for first time
    2. npm run dev:stop -> stop all containers
    3. npm run dev:start -> start all stopped containers
    4. npm run dev:down -> stop containers , remove contaners and volume
    5. npm run pg:connect -> connect postgres
    6. npm run dev:app -> run only backend
    7. npm run dev:ui -> run only ui

nginx setup:

server {
       listen       80;
       server_name  classicladies.com;

       location / {
           proxy_pass http://127.0.0.1:5000;
       }
    }