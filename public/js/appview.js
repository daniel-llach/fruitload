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

    var MainContent = Backbone.Marionette.LayoutView.extend({
        template: _.template(HeaderTemplate),
        regions: {
            "left": "left",
            "right": "right"
        }
    });

    AppView.addInitializer(function(options) {
        var headerLayout = new HeaderLayout();

        AppView.header.show(headerLayout);
    });

    return AppView;
});
