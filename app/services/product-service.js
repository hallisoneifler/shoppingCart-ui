import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(product) {
    var newModel = this.get('store').createRecord('shopping-cart');
    newModel.set('product_id', product.id);
    newModel.set('product_name', product.name);
    newModel.set('imageUrl', product.imageUrl);
    newModel.set('price', product.price);
    newModel.set('quantity', 1);
    this.get('items').pushObject(newModel);
    Materialize.toast("Added to cart", 3000);
  },

  list() {
    return this.get('items');
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  }
});
