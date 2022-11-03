
module.exports = ({ env }) => {
	const host = env('HOST', '0.0.0.0');
	const port = env.int('PORT', 1337);
	const url = env('URL', `http://localhost${port !== '80' ? ':'+ port : ''}`);
	return {
		host, port, url,
		app: {
			keys: env.array('APP_KEYS', ["MQoSOwxYik2B5ouRR5pbYKciAow3zMJe", "uxpQjaXwQJB2HPdbAOyoJU4gS2zlsejN"]),
		},
	}
}
