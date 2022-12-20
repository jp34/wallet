require('dotenv').config();

module.exports = ({ env }) => {
	const host = env('HOST', process.env.SERVER_HOST);
	const port = env.int('PORT', process.env.SERVER_PORT);
	const url = env('URL', process.env.SERVER_URL);
	return {
		host, port, url,
		app: {
			keys: env.array('APP_KEYS', [process.env.SERVER_KEY_1, process.env.SERVER_KEY_2]),
		},
	}
}
