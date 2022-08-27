var WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
  url: 'http://fish.woyinos7.beget.tech/',
  consumerKey: 'ck_40a359663b435d6057fc97e62a9014f51c6094b2',
  consumerSecret: 'cs_edc4deef0ab81d2f089d462e2ea9e88ed427c567',
  version: 'wc/v3',
  queryStringAuth: true,
});

api.get('products', { per_page: 10 }).then((res) => {
  console.log(res?.data);
});
export default api;
