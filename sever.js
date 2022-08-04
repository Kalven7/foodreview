import express from 'express';
import dotenv from 'dotenv';

//LOAD CONFIG
dotenv.config({path: './config/config.env'});

//run server = express();
const sever = express();
const port = process.env.PORT || 7000;
sever.listen(port, console.log("Servidor  processando na porta " + port + "..."));

sever.get('/', (req, resp) => {
 resp.send("God server only")
});

sever.get('/user', (req,resp) => {
    resp.send('Página do Usuário')

});