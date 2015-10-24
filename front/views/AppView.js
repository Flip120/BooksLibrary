var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var SearchView = require('../Views/SearchView');
var BooksView = require('../Views/BooksView');

module.exports = Mn.LayoutView.extend({

    template : require("../templates/AppView.hbs"),

    regions : {
        menu : '#menu',
        search : "#search",
        results : '#results'
    },

    onRender: function(){

      var booksView = new BooksView({
        collection : new BooksView.prototype.collection
      });
      booksView.collection.fetch();
      
      this.getRegion('search').show(new SearchView());
      this.getRegion('results').show(booksView)
    }

});
