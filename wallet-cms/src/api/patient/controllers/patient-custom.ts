
export default {
    findByUsername: async (ctx, next) => {
        try {
            const username = ctx.params.username;
            if (!username) throw Error('Missing required parameter: username');
            const data = await strapi.service('api::patient.patient-custom').findByUsername(username);
            ctx.body = data;
        } catch (err) {
            console.log(err);
            ctx.body = err;
        }
    }
};
