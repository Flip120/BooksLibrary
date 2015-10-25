var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var BookItemView = require('../views/BookItemView');

module.exports = Mn.CollectionView.extend({

  id : 'books-view',

  collection : Backbone.Collection.extend({
    url : function(){
      return 'http://openlibrary.org/subjects/fiction.json?published_in=2000-2015&limit=10';
    },
    parse : function(data){
      return data.works;
    }
  }),

  childView : BookItemView

});
