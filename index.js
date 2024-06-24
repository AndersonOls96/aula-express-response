const express = require('express');
const app = express();
const port = 3000;

const produtos = [
    { id: 1, nome: 'Produto A', preco: 10.0 },
    { id: 2, nome: 'Produto B', preco: 20.0 },
    { id: 3, nome: 'Produto C', preco: 30.0 },
    { id: 4, nome: 'Produto D', preco: 40.0 },
    { id: 5, nome: 'Produto E', preco: 50.0 }
];

app.use(express.static('public'));

// Rota raiz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rota /sobre
app.get('/sobre', (req, res) => {
    res.send('Esta é a página sobre a Web Solutions.');
});

// Rota /contato
app.get('/contato', (req, res) => {
    res.send('Esta é a página de contato da Web Solutions.');
});

// Rota /produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Rota /produto/:id
app.get('/produto/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
});

app.get('/video', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=JGwWNGJdvx8');
});


// Middleware para tratar rotas inexistentes
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
