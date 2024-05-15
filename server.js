// expressのセットアップ
const express = require('express');
const app = express();

const config = require('./knexfile');
const knex = require('knex')(config);

app.get('/books', async (req, res) => {
	// res.send("books");
	const bookList = await knex('books').select();
	// const bookList = await knex.select().from('books');
	res.send(bookList);
});

app.post('/books', async (req, res) => {
	const body = req.body;
	await knex('books').insert(body);
	res.status(201).end();
});

app.listen(3000, () => {
	console.log(`サーバーが立ち上がりました: http://localhost:3000`);
});
