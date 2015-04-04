/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html",
    "text!templates/maincontent/maincontent.html",
    "views/uploadimage/uploadimages"
], function (Backbone, Marionette, HeaderTemplate, MainContentTemplate, UploadImages) {
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
            leftcontent: ".maincontent .left",
            rightcontent: ".maincontent .right"
        }
        // onShow: function(){
        //     this.getRegion('rightcontent').show(new UploadImages());
        // }
    });

    AppView.addInitializer(function(options) {
        var maincontentview = new MainContentView()
        AppView.header.show(new HeaderLayout());
        AppView.maincontent.show(maincontentview);

        maincontentview.rightcontent.show(new UploadImages());

    });

    return AppView;
});
