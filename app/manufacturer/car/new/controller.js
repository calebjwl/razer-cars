import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    brand_id: '',
    name: '',
    year: '',
    horsepower: '',
    price: '',
  },

  actions: {
    submitForm() {
      const car = this.store.createRecord('manufacturer.car', this.formValues);

      car.save().then((car) => {
        this.set('formValues', {});

        this.transitionToRoute('manufacturer.car.index', car.brand_id);
      })
    }
  }
});
