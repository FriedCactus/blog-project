const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// Небольшая задержка, имитация реального API
server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 1000);
    });
    next();
});

// Проверяем авторизацию
server.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'Authorization required'});
    }

    next();
});

server.use(jsonServer.defaults());
server.use(router);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    const {username, password} = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.db.json')));
    const {users} = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password
    );

    if (userFromBd) {
        return res.json(userFromBd);
    }

    return res.status(403).send({message: 'Authorization required'});
});

// Запуск сервера
server.listen(8000, () => {
    console.log('Server is running on port 8080');
});