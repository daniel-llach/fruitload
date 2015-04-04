/*global define*/
define([
    "marionette",
    "text!templates/uploadimages/uploadimages.html"
], function (Marionette, UploadImagesTemplate) {
    "use strict";

    var UploadImages = Marionette.LayoutView.extend({
        className: "uploadimage",
        template: _.template(UploadImagesTemplate)
    });

    return UploadImages;
});
