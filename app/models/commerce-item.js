import DS from 'ember-data';

export default DS.Model.extend({
  product_id: DS.attr('string'),
  product_name: DS.attr('string'),
  quantity: DS.attr('number'),
  imageUrl: DS.attr('string'),
  price: DS.attr('number')
});
