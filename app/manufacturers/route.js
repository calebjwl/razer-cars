import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://razerapi.herokuapp.com/ryan/basic/brands')
    .then(r => r.json());
  }
});
