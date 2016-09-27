import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  product_id: DS.attr('string'),
  quantity: DS.attr('number'),
  amount: DS.attr('number')
});
