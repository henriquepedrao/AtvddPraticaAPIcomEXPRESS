//Pedro Henrique Jovanini Geraldo 
//5 ºAMS Fatec
const http = require('http');

const users = [
    { id: 1, name: 'Pedro Silva', email: 'pedro@example.com', senha: 'teste@123' },
    { id: 2, name: 'Maria Oliveira', email: 'maria@example.com', senha: 'teste@123' },
    { id: 3, name: 'Carlos Souza', email: 'carlos@example.com', senha: 'teste@123' },
    { id: 4, name: 'Ana Costa', email: 'ana@example.com', senha: 'teste@123' },
    { id: 5, name: 'João Pereira', email: 'joao@example.com', senha: 'teste@123' },
];

const docs = [
    { id: 1, id_user: 1, tipo: 'Trabalho', titulo: 'Atividade prática', curso: 'ADS', turno: 'manhã' },
    { id: 2, id_user: 2, tipo: 'Projeto', titulo: 'Desenvolvimento Web', curso: 'SI', turno: 'noite' },
    { id: 3, id_user: 3, tipo: 'Relatório', titulo: 'Pesquisa acadêmica', curso: 'TI', turno: 'tarde' },
    { id: 4, id_user: 4, tipo: 'Prova', titulo: 'Prova final', curso: 'ADS', turno: 'manhã' },
    { id: 5, id_user: 5, tipo: 'Trabalho', titulo: 'Trabalho em grupo', curso: 'Redes', turno: 'noite' },
];

const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else if (req.url === '/docs' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(docs));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Rota não encontrada' }));
    }
});

const PORT = 3300;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//http://localhost:3300/users
//http://localhost:3300/docs