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
            leftcontent: ".leftcontent",
            rightcontent: ".rightcontent"
        },
        onRender: function(){
            this.getRegion('rightcontent').show(new UploadImages());
        }
    });

});
