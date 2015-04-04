/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html",
    "views/maincontent/maincontent",
    "views/uploadimage/uploadimages"
], function (Backbone, Marionette, HeaderTemplate, MainContentView, UploadImages) {
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
        var headerlayout = new HeaderLayout();
        var maincontentview = new MainContentView();

        AppView.header.show(headerlayout);
        AppView.maincontent.show(maincontentview);

        maincontentview.right.show(new UploadImages());

    });

    return AppView;
});
