require('dotenv').config();

export default ({ env }) => {
	let user = env('DATABASE_USER', process.env.DATABASE_USER);
	let pass = env('DATABASE_PASS', process.env.DATABASE_PASS);
	let host = env('DATABASE_HOST', process.env.DATABASE_HOST);
	let port = env('DATABASE_PORT', process.env.DATABASE_PORT);
	let database = env('DATABASE_NAME', process.env.DATABASE_NAME);
	
	return {
		connection: {
			client: 'postgres',
			connection: {
				connectionString: `postgres://${user}:${pass}@${host}:${port}/${database}`,
				ssl: env('DATABASE_SSL', false)
			},
			debug: false,
		},
	}
};
