import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('product-service'),
  ajax: Ember.inject.service(),
  actions: {
    addItem(item) {
      this.get('cart').add(item);
    }
  },
  model() {
    return this.get('ajax').request('/products', {
        method: 'GET'
      });
  }
});
