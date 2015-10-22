var Mn = require('backbone.marionette');

module.exports = Mn.LayoutView.extend({

    el  : 'body',
    template : require("../templates/app-view.hbs"),

    regions : {
        menu : '#menu',
        content : "#content"
    },

    initialize : function(){

    },

    onRender: function(){
        this.getRegion('menu').show(new (Mn.ItemView.extend({ template : '<p>sss</p>'})));
    }

});
