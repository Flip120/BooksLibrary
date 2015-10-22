var Mn = require('backbone.marionette');
var AppView = require('../views/app-view');
var $ = require('jquery');

module.exports = Mn.Application.extend({
    initialize : function(){
        this.launchMainView();
    },

    launchMainView : function(){
        $('body')
            .append(new AppView()
            .render());
    }
});
