
export default () => ({
    startEarning: async (id: string) => {
        try {
            // Update user profile (Earning == true)
            const result = strapi.entityService.update('plugin::users-permissions.user', id, {
                data: {
                    earning: true
                }
            });
            return result;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
});
