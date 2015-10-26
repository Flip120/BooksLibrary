var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var BookModel = require('../models/Book');

module.exports = Mn.ItemView.extend({
  className : 'item-book col-md-3',
  model  : BookModel,
  template : require("../templates/BookItem.hbs"),
  events : {
    'click' : 'bookClicked'
  },
  bookClicked : function(e) {
    this.trigger('clicked:book');
  }
});
