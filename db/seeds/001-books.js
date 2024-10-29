/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("books").del();
	await knex("books").insert([
		{ title: "晴れのひ", author: "山田太郎" },
		{ title: "傘おき", author: "佐藤花子" },
		{ title: "食パンマンの枕", author: "鈴木よしお" },
	]);
};
