import crypto from "crypto";

export default ({ env }) => {
	return {
        'users-permissions': {
            config: {
                jwtSecret: env('STRAPI_SECRET' || crypto.randomBytes(15).toString('base64'))
            }
        }
	}
};
