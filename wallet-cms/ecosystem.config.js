
module.exports = {
	apps: [
		{
			name: 'wallet-cms',
			cwd: '/home/ubuntu/wallet-cms',
			script: 'npm',
			args: 'start',
			env: {
				APP_KEYS: ['MQoSOwxYik2B5ouRR5pbYKciAow3zMJe', 'uxpQjaXwQJB2HPdbAOyoJU4gS2zlsejN'],
				API_TOKEN_SALT: 'xthVWFxojVZ3uJxsUfNCmHHWoyYSAFGR',
				ADMIN_JWT_SECRET: '9CV3JMbRy4TAG11HBlZEHzsLJPyFoAhHxzqdRhAZToa1VToflJyIBRo75aDLH5Hr',
				JWT_SECRET: 'vPVQSZ1voy5KGcCkp1P1KKOTT0RvCmVLPA0rh5FYYTsWBoO5KrkbXNuvc7y9YDmx',
				NODE_ENV: 'production',
				DATABASE_HOST: 'wallet-rds-public-dev-db.cvonnh0vf5od.us-east-2.rds.amazonaws.com',
				DATABASE_PORT: '5432',
				DATABASE_NAME: 'wallet',
				DATABASE_USERNAME: 'postgres',
				DATABASE_PASSWORD: 'Wallet123'
			},
		},
	],
};
