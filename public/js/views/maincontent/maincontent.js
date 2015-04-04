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
            "leftcontent": ".maincontent .left",
            "rightcontent": ".maincontent .right"
        },
        onRender: function(){
            this.rightcontent.show(new UploadImages());
        }
    });

    // MainContentView.addInitializer(function(options) {
    //     var uploadimages = new UploadImages();
    //     MainContentView.rightcontent.show(uploadimages);
    // });

    return MainContentView;
});
