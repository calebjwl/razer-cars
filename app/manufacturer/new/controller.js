import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
  },

  actions: {
    submitNewForm() {
      const manufacturer = this.store.createRecord('brand', this.formValues);

      manufacturer.save().then((manufacturer) => {
        this.set('formValues', {});

        this.transitionToRoute('manufacturers', manufacturer.id);
      });
    }
  }

});
