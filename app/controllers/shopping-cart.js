import Ember from 'ember';

export default Ember.Controller.extend({
  total: 0,
  actions: {
    updateTotal() {
      var newTotal = 0;
      this.get('store').peekAll('shopping-cart').reduce(function(previousValue, item){
        newTotal += item.get('total');
      })
      this.set('total',newTotal);
    }
  }
});
