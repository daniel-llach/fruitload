/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/maincontent/maincontent.html",
    "views/uploadimage/uploadimages"
], function (Backbone, Marionette, MainContentTemplate, UploadImages) {
    "use strict";


    var MainContentView = Backbone.Marionette.LayoutView.extend({
        className: "maincontent",
        template: _.template(MainContentTemplate),
        regions: {
            "left": "left",
            "right": "right"
        }
    });

    MainContentView.addInitializer(function(options) {
        var uploadimages = new UploadImages();
        MainContentView.right.show(uploadimages);
    });

    return MainContentView;
});