
export default {
  startEarning: async (ctx, next) => {
    try {
      const id = ctx.params.id;
      if (!id) throw Error('Missing required parameter: id');
      return await strapi.service('api::wallet.wallet').startEarning(id);
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  }
};
