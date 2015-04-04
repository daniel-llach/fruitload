/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html",
    "views/maincontent/maincontent"
], function (Backbone, Marionette, HeaderTemplate, MainContentView) {
    "use strict";

    var AppView = new Backbone.Marionette.Application();
    AppView.addRegions({
        'header': 'header',
        'maincontent': '.content',
        'footer': 'footer'
    });

    var HeaderLayout = Backbone.Marionette.LayoutView.extend({
        className: "title",
        template: _.template(HeaderTemplate)
    });

    AppView.addInitializer(function(options) {
        var maincontentview = new MainContentView();

        AppView.header.show(new HeaderLayout());
        AppView.maincontent.show(maincontentview);


    });

    return AppView;
});
