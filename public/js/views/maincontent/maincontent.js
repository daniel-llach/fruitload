/*global define*/
define([
    "marionette",
    "text!templates/maincontent/maincontent.html",
    "views/uploadimage/uploadimages"
], function (Marionette, MainContentTemplate, UploadImages) {
    "use strict";


    var MainContentView = Marionette.LayoutView.extend({
        className: "maincontent",
        template: _.template(MainContentTemplate),
        regions: {
            leftcontent: ".maincontent .left",
            rightcontent: ".maincontent .right"
        },
        onShow: function(){
            alert('2');
            this.rightcontent.show(new UploadImages());
        }
    });

    // MainContentView.addInitializer(function(options) {
    //     var uploadimages = new UploadImages();
    //     MainContentView.rightcontent.show(uploadimages);
    // });

});
