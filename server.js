import { nanoid } from 'nanoid';
const { nanoid } = require('nanoid');
const id = nanoid();

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ users:[] }).write();

server.use(middlewares);

db.get('users').push({
    id: id.generate(),
    email: '',
    password: '',
}).write();




server.use(router);