import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  actions: {
    insertProducts() {
      return this.get('ajax').request('/products/save', {
        method: 'POST'
      });
    }
  },
  model() {
    let hasProducts = this.get('ajax').request('/products', {
      method: 'GET'
    });
    return hasProducts != null;
  }
});
