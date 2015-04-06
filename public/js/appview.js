/*global define*/
define([
    "marionette",
    "text!templates/header/header.html",
    "views/uploadimage/uploadimages"
], function (Marionette, HeaderTemplate, UploadImagesView) {
    "use strict";

    var AppView = new Backbone.Marionette.Application();
    AppView.addRegions({
        'header': 'header',
        'rightcontent': '.content .right',
        'footer': 'footer'
    });

    var HeaderLayout = Backbone.Marionette.LayoutView.extend({
        className: "title",
        template: _.template(HeaderTemplate)
    });

    AppView.addInitializer(function(options) {
        AppView.header.show(new HeaderLayout());
        AppView.rightcontent.show(new UploadImagesView());
    });

    return AppView;
});
