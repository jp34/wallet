export default {
	routes: [
		{
			method: 'POST',
			path: '/emr',
			handler: 'emr.upload',
			config: {
				policies: [],
				middlewares: [],
			},
		},
	],
};
