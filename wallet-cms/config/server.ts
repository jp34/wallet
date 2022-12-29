require('dotenv').config();

module.exports = ({ env }) => {
	return {
		host: env('HOST', process.env.SERVER_HOST),
		port: env.int('PORT', process.env.SERVER_PORT),
		url: env('URL', process.env.SERVER_URL),
		app: {
			keys: env.array('APP_KEYS', [process.env.SERVER_APP_KEY_1, process.env.SERVER_APP_KEY_2]),
		},
	}
}
