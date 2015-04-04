/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/maincontent/maincontent.html"
], function (Backbone, Marionette, MainContentTemplate) {
    "use strict";


    var MainContentView = Backbone.Marionette.LayoutView.extend({
        className: "maincontent",
        template: _.template(MainContentTemplate),
        regions: {
            "leftcontent": ".left",
            "rightcontent": ".right"
        },

        addInitializer: function(options){
            var uploadimages = new UploadImages();
            MainContentView.rightcontent.show(uploadimages);
        }
    });

    // MainContentView.addInitializer(function(options) {
    //     var uploadimages = new UploadImages();
    //     MainContentView.right.show(uploadimages);
    // });

    return MainContentView;
});
