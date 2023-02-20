
export default {
    routes: [
        {
            method: 'GET',
            path: '/findByUsername/:username',
            handler: 'patient-custom.findByUsername',
            config: {
                policies: [],
            },
        },
    ],
};
