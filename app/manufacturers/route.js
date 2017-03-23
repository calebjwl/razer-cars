import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://razerapi.herokuapp.com/caleb/basic/brands')
    .then(r => r.json());
  }
});
