/**
 * wallet controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::wallet.wallet', ({ strapi }) => ({
    async create(ctx) {
        const {data, meta} = await super.create(ctx);
        const response = await strapi.service('api::emr.emr').generate(data.attributes.user);
        if (response) return {data, meta}
        ctx.status = 400;
        ctx.body = { error: `Unable to generate EMR. User: ${data.attributes.user}` }
        return;
    }
}));
