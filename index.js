/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-localforage-adapter',
  included: function included(app, parentAddon) {
    this._super.included(app);

    var target = parentAddon || app;
    var options = target.options['ember-localforage-adapter'] || {};

    if (!options.disableIncludeLocalforage) {
      app.import(app.bowerDirectory + '/localforage/dist/localforage.js');
    }
  }
};
