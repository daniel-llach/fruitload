/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html",
    "views/uploadimage/uploadimages",
    "text!templates/maincontent/maincontent.html"
], function (Backbone, Marionette, HeaderTemplate, UploadImages, MainContentTemplate) {
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

    var MainContentView = Backbone.Marionette.LayoutView.extend({
        className: "maincontent",
        template: _.template(MainContentTemplate),
        regions: {
            "left": "left",
            "right": "right"
        }
    });

    AppView.addInitializer(function(options) {
        var maincontentview = new MainContentView();

        AppView.header.show(new HeaderLayout());
        AppView.maincontent.show(maincontentview);

        maincontentview.right.show(new UploadImages());

    });

    return AppView;
});
