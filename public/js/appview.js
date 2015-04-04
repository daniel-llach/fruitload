/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html"
], function (Backbone, Marionette, HeaderTemplate) {
    "use strict";

    AppView = new Backbone.Marionette.Application();
    AppView.addRegions({
        'header': 'header',
        'maincontent': '.content',
        'footer': 'footer'
    });

    var HeaderLayout = Backbone.Marionette.Layout.extend({
        template: _.template(HeaderTemplate)
    });

    AppView.addInitializer(function(options) {
        var headerLayout = new headerLayout();

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
