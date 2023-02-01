require('dotenv').config();

module.exports = ({ env }) => {
	return {
		host: env('STRAPI_SERVER_HOST', process.env.STRAPI_SERVER_HOST),
		port: env.int('STRAPI_SERVER_PORT', process.env.STRAPI_SERVER_PORT),
		url: env('STRAPI_SERVER_URL', process.env.STRAPI_SERVER_URL),
		app: {
			keys: env.array('APP_KEYS', [process.env.STRAPI_SERVER_APP_KEY_1, process.env.STRAPI_SERVER_APP_KEY_2]),
		},
	}
}
