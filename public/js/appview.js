/*global define*/
define([
    "marionette",
    "text!templates/header/header.html",
    "views/maincontent/maincontent"
], function (Marionette, HeaderTemplate, MainContentView) {
    "use strict";

    var AppView = new Marionette.Application();
    AppView.addRegions({
        'header': 'header',
        'maincontent': '.content',
        'footer': 'footer'
    });

    var HeaderLayout = Backbone.Marionette.LayoutView.extend({
        className: "title",
        template: _.template(HeaderTemplate)
    });

    AppView.addInitializer(function(options) {
        alert('1');
        var maincontentview = new MainContentView();
        alert('2');

        AppView.header.show(new HeaderLayout());
        AppView.maincontent.show(maincontentview);

    });

    return AppView;
});
