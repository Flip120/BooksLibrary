var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize : function(){
    console.log('START VIEW!');
    this.render();
  },

  render : function(){
    $('body').prepend('<p>WWWOOOOOOO</p>')
  }
});
