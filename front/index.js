var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var Application = require('./Application/MnApp');

if (window.__agent) {
  window.__agent.start(Backbone, Mn);
}

var app = new Application();
