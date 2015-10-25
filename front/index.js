var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var Application = require('./Application/MnApp');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap')

Mn.Renderer.render = function(template, data){
  if(typeof template === 'function'){
      return template(data);
  } else {
    return template;
  }
};

if (window.__agent) {
  window.__agent.start(Backbone, Mn);
}

$(document).ready(function(){
  var app = new Application();
});
