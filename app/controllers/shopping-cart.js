import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service('product-service'),
  total: 0,
  actions: {
    updateTotal() {
      var newTotal = 0;
      this.get('store').peekAll('shopping-cart').reduce(function(previousValue, item){
        newTotal += item.get('total');
      })
      this.set('total',newTotal);
    },
    increaseItem(item){
      var quantity = item.get('quantity');
      item.set('quantity',quantity+1);
      this.send('updateTotal');
    },
    decreaseItem(item){
      var quantity = item.get('quantity');
      if (quantity == 0) {
        this.get('cart').remove(item);
      } else {
        item.set('quantity',quantity-1);
        this.send('updateTotal');
      }
    },
    removeItem(item) {
      this.get('cart').remove(item).then(()=>{
        this.send('updateTotal');
      })

    }
  }
});
