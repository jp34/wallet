export default {
  routes: [
    {
      method: 'POST',
      path: '/wallet/start/:id',
      handler: 'wallet.startEarning',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
