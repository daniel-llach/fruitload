/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/uploadimages/uploadimages.html"
], function (Backbone, Marionette, UploadImagesTemplate) {
    "use strict";

    var UploadImages = Backbone.Marionette.LayoutView.extend({
        className: "uploadimage",
        template: _.template(UploadImagesTemplate)
    });

    return UploadImages;
});
