import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
  },

  actions: {
    submitForm() {
      const manufacturer = this.store.createRecord('manufacturer', this.formValues);

      manufacturer.save().then((manufacturer) => {
        this.set('formValues', {});

        this.transitionToRoute('manufacturers', manufacturer.id);
      });
    }
  }

});
