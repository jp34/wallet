
export default {
	upload: async (ctx, next) => {
		try {
			console.log("EMR CONTROLLER");
			const data = await strapi.service("api::emr.emr").upload();
			console.log(data, 'data');
			ctx.body = data;
		} catch (err) {
			console.log(err);
			ctx.body = err;
		}
	}
};
