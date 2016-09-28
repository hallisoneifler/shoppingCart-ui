import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('product-service'),
  ajax: Ember.inject.service(),
  actions: {
    checkout() {
      var items = this.get('cart').list();
      items.forEach(function(item) {
        item.save().then(()=>{
          console.log('Save');
        }).catch((error)=>{
          console.log(error);
        });
      })
    },
    removeItem(item) {
      this.get('cart').remove(item.id);
    }
  },
  model() {
    return this.get('cart').list();
  },
  afterModel() {
    this.controllerFor('shopping-cart').send('updateTotal');
  }
});
