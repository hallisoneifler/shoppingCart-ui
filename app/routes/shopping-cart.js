import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('product-service'),
  ajax: Ember.inject.service(),
  actions: {
    removeItem(item) {
      let id_product = item.id;

      return this.get('ajax').request('/shoppingCart', {
        method: 'POST',
        data: {
          id_product
        }
      }).then(()=>{
        this.transitionTo('shopping-cart');
      });
    }
  },
  model() {
    return this.get('ajax').request('/products', {
        method: 'GET'
      });
  }
});
