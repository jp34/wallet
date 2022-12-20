require('dotenv').config();

export default ({ env }) => {
	console.log(`DATABASE_HOST: ${process.env.DB_HOST}`);
	console.log(`DATABASE_PORT: ${process.env.DB_PORT}`);
	console.log(`DATABASE_NAME: ${process.env.DB_NAME}`);
	console.log(`DATABASE_USERNAME: ${process.env.DB_USER}`);
	console.log(`DATABASE_PASSWORD: ${process.env.DB_PASSWORD}`);
	console.log(`DATABASE_SCHEMA: ${process.env.DB_SCHEMA}`);
	
	return {
		connection: {
			client: 'postgres',
			connection: {
				host: env('DATABASE_HOST', process.env.DB_HOST),
				port: env.int('DATABASE_PORT', process.env.DB_PORT),
				database: env('DATABASE_NAME', process.env.DB_NAME),
				user: env('DATABASE_USERNAME', process.env.DB_USER),
				password: env('DATABASE_PASSWORD', process.env.DB_PASSWORD),
				schema: env('DATABASE_SCHEMA', process.env.DB_SCHEMA),
				ssl: env('DATABASE_SSL', false)
			},
			debug: false,
		},
	}
};
