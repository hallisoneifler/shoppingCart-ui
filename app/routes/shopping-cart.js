import Ember from 'ember';
import Materialize from 'materialize';

export default Ember.Route.extend({
  cart: Ember.inject.service('product-service'),
  ajax: Ember.inject.service(),
  actions: {
    checkout() {
      var items = this.get('cart').list();
      let shoppingPromisses = [];
      var self = this;
      items.forEach(function(item) {
        shoppingPromisses.push(item.save());
      });
      Ember.RSVP.all(shoppingPromisses).then(() => {
        self.send('saved');
        self.get('cart').empty();
        self.controllerFor('shopping-cart').send('updateTotal');
      }).catch(()=>{
        self.send('error');
      });
    },
    saved() {
      Materialize.toast("Payment successfully! ;)", 0);
      this.transitionTo('product');
    },
    error() {
      Materialize.toast("Payment with error! ;)", 2000, 'red');
    }
  },
  model() {
    return this.get('cart').list();
  },
  afterModel() {
    this.controllerFor('shopping-cart').send('updateTotal');
  }
});
