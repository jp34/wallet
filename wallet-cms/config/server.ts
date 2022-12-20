require('dotenv').config();

module.exports = ({ env }) => {
	console.log(`SERVER_HOST: ${process.env.SERVER_HOST}`);
	console.log(`SERVER_PORT: ${process.env.SERVER_PORT}`);
	console.log(`SERVER_URL: ${process.env.SERVER_URL}`);
	console.log(`SERVER_KEY_1: ${process.env.SERVER_KEY_1}`);
	console.log(`SERVER_KEY_2: ${process.env.SERVER_KEY_2}`);

	return {
		host: env('HOST', process.env.SERVER_HOST),
		port: env.int('PORT', process.env.SERVER_PORT),
		url: env('URL', process.env.SERVER_URL),
		app: {
			keys: env.array('APP_KEYS', [process.env.SERVER_KEY_1, process.env.SERVER_KEY_2]),
		},
	}
}
