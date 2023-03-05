/**
 * wallet controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::wallet.wallet', ({ strapi }) => ({
    async create(ctx) {
        const {data, meta} = await super.create(ctx);
        console.log('here');
        return {data, meta}
    }
}));
