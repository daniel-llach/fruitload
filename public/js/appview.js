/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html"
], function (Backbone, Marionette, HeaderTemplate) {
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
        },
        onShow: function(){
            alert('2');

            this.getRegion('rightcontent').show(new UploadImages());
        }
    });

    AppView.addInitializer(function(options) {
        alert('1');

        AppView.header.show(new HeaderLayout());
        AppView.maincontent.show(new MainContentView());

    });

    return AppView;
});
