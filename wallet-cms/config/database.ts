require('dotenv').config();

export default ({ env }) => {
	strapi.log.info(`DATABASE_HOST: ${process.env.DB_HOST}`);
	strapi.log.info(`DATABASE_PORT: ${process.env.DB_PORT}`);
	strapi.log.info(`DATABASE_NAME: ${process.env.DB_NAME}`);
	strapi.log.info(`DATABASE_USERNAME: ${process.env.DB_USER}`);
	strapi.log.info(`DATABASE_PASSWORD: ${process.env.DB_PASSWORD}`);
	strapi.log.info(`DATABASE_SCHEMA: ${process.env.DB_SCHEMA}`);
	
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
