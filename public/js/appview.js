/*global define*/
define([
    "backbone",
    "marionette",
    "views/header/headerview"
], function (Backbone, Marionette, HeaderLayout) {
    "use strict";

    var AppView = new Backbone.Marionette.Application();
    AppView.addRegions({
        'header': 'header',
        'maincontent': '.content',
        'footer': 'footer'
    });

    AppView.addInitializer(function(options) {
        var headerLayout = HeaderLayout.start();

        AppView.header.show(headerLayout);
    });


    return AppView;
});
