import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('manufacturer', function() {
    this.route('new');
    this.route('car', { path: '/:id' }, function() {
      this.route('new');
      this.route('edit');
    });
  });
  this.route('edit');
});

export default Router;
