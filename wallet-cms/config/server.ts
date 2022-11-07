require('dotenv').config();

module.exports = ({ env }) => {
	const host = env('HOST', process.env.HOST);
	const port = env.int('PORT', process.env.HOST);
	const url = env('URL', process.env.URL);
	return {
		host, port, url,
		app: {
			keys: env.array('APP_KEYS', [process.env.APP_KEY_1, process.env.APP_KEY_2]),
		},
	}
}
