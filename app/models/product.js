import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  id: DS.attr('string'),
  imagerUrl: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number')
});
