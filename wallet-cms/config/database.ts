require('dotenv').config();

export default ({ env }) => {
	const user = env('STRAPI_DB_USER', process.env.STRAPI_DB_USER);
	const pass = env('STRAPI_DB_PASS', process.env.STRAPI_DB_PASS);
	const host = env('STRAPI_DB_HOST', process.env.STRAPI_DB_HOST);
	const port = env('STRAPI_DB_PORT', process.env.STRAPI_DB_PORT);
	const name = env('STRAPI_DB_NAME', process.env.STRAPI_DB_NAME);
	const connectionString = `postgres://${user}:${pass}@${host}:${port}/${name}`;
	return {
		connection: {
			client: 'postgres',
			connection: {
				connectionString: connectionString,
				ssl: env('DATABASE_SSL', false)
			},
			debug: false,
		},
	}
};
