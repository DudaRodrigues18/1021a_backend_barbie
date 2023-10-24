import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota padrão
app.get('/filmes', (req, res) => {
    res.send(201);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});