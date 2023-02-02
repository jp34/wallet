import crypto from "crypto";

export default ({ env }) => {
	return {
        'users-permissions': {
            config: {
                jwtSecret: env('STRAPI_SECRET' || crypto.randomBytes(15).toString('base64'))
            }
        },
        "entity-relationship-chart": {
            enabled: true,
            config: {
                exclude: [
                    "strapi::core-store",
                    "webhook",
                    "admin::permission",
                    "admin::user",
                    "admin::role",
                    "admin::api-token",
                    "plugin::upload.file",
                    "plugin::i18n.locale",
                    "plugin::users-permissions.permission",
                    "plugin::users-permissions.role",
                ],
            },
        },
	}
};
