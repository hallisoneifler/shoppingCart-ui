import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input-field'],
  type: 'text',
  change(){
    console.log('Dentro do change');
    this.sendAction('amount');
  }
});
