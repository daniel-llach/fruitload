/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html"
], function (Backbone, Marionette, HeaderTemplate) {
    "use strict";

    var AppView = new Backbone.Marionette.Application();
    AppView.addRegions({
        'header': 'header',
        'maincontent': '.content',
        'footer': 'footer'
    });

    var HeaderLayout = Backbone.Marionette.LayoutView.extend({
        template: _.template(HeaderTemplate)
    });

    AppView.addInitializer(function(options) {
        var headerLayout = new HeaderLayout();

        AppView.header.show(headerLayout);
    });

    // var AppView = Backbone.View.extend({

    //     regions: {
    //         header: "header",
    //         maincontent: ".content",
    //         footer: "footer"
    //     },

    //     initialize: function () {
    //        // alert('ehhhh!!!');
    //     }

    // });

    return AppView;
});
