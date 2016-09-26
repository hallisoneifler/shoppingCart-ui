import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    addItem(item) {
      let id_product = item.id;
      let quantity = 2;
      console.log('Values: ' + id_product + ' -- ' + quantity);
      return this.get('ajax').request('/shoppingCart', {
        method: 'POST'
      }).then(()=>{
        console.log('Final ');
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
