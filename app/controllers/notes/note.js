import Ember from 'ember';
const fs = require('fs');

export default Ember.Controller.extend({

  actions: {
    saveNote() {
      this.get('model').save();
    }
  }

});
