// express のセットアップ
const express = require("express");
const app = express();

// knex のセットアップ
const config = require("./knexfile")["development"];
const knex = require("knex")(config);

// sample データベースの books テーブルから全てのデータを取得して返すエンドポイントを作成する
// GET /books
app.get("/books", async (req, res) => {
	const books = await knex.select().from("books");
	// const books = await knex('books').select();
	res.send(books);
});

app.listen(3000, () => {
	console.log(`サーバーが立ち上がりました: http://localhost:3000`);
});
