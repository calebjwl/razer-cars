import Ember from 'ember';
// import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model(param) {
    this.store.findOne('car', param.id);
    // const id = this.paramsFor('manufacturer.car').id;
    //
    // return fetch(`${config.apiUrl}/${id}`)
    // .then(r => r.json());
  }
});
