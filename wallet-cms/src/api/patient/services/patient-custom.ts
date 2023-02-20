
export default () => ({
    findByUsername: async (username: string) => {
        try {
            const data = await strapi.entityService.findMany('api::patient.patient', {
                filters: { username: username },
                populate: '*'
            });
            if (data.length < 1) throw Error(`Patient does not exist with username: ${username}`);
            return data[0];
        } catch (err) {
            console.log(err);
            return err;
        }
    }
});
