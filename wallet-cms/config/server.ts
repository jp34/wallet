require('dotenv').config();

module.exports = ({ env }) => {
	strapi.log.info(`SERVER_HOST: ${process.env.SERVER_HOST}`);
	strapi.log.info(`SERVER_PORT: ${process.env.SERVER_PORT}`);
	strapi.log.info(`SERVER_URL: ${process.env.SERVER_URL}`);
	strapi.log.info(`SERVER_KEY_1: ${process.env.SERVER_KEY_1}`);
	strapi.log.info(`SERVER_KEY_2: ${process.env.SERVER_KEY_2}`);

	return {
		host: env('HOST', process.env.SERVER_HOST),
		port: env.int('PORT', process.env.SERVER_PORT),
		url: env('URL', process.env.SERVER_URL),
		app: {
			keys: env.array('APP_KEYS', [process.env.SERVER_KEY_1, process.env.SERVER_KEY_2]),
		},
	}
}
