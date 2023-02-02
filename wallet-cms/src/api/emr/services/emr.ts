
export default () => ({
    upload: async () => {
        try {
            console.log("EMR SERVICE");
            return {
                message: "Data from emr service"
            };
        } catch (err) {
            console.log(err);
            return err;
        }
    }
});
