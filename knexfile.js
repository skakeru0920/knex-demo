// Update with your config settings.

/**
 * 
 * npx command
 * 
 * npx knex init
 * npx knex migrate:make create_books_table
 * npx knex migrate:latest
 * npx knex seed:make 001_books
 * npx knex seed:run
*/

require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: 'postgresql',
	connection: process.env.DB_URL || {
		host: process.env.DB_HOST || '127.0.0.1',
		port: process.env.DB_PORT || 5432,
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	},
	migrations: {
		directory: './db/migrations',
	},
	seeds: {
		directory: './db/seeds',
	},
};
