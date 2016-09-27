import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('product-service'),
  ajax: Ember.inject.service(),
  totalCart: Ember.computed(function(){
    return 100000;
  }),
  actions: {
    checkout(item) {
      let id_product = item.id;
      let quantity = 1;

      return this.get('ajax').request('/shoppingCart', {
        method: 'GET',
        data: {
          id_product, quantity
        }
      }).then(()=>{
        this.transitionTo('product');
      });
    },
    removeItem(item) {
      let id_product = item.id;
      this.get('cart').remove(id_product);
    }
  },
  model() {
    return this.get('cart').list();
  }
});
