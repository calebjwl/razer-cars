import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('string'),
  hp: DS.attr('integer'),
  collection: DS.attr('string'),
  brand_id: DS.attr('integer'),
  price: DS.attr('float')
});
