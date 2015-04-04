/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/maincontent/maincontent.html"
], function (Backbone, Marionette, MainContentTemplate) {
    "use strict";

    var MainContentView = Backbone.Marionette.LayoutView.extend({
        template: _.template(MainContentTemplate),
        regions: {
            "left": "left",
            "right": "right"
        }
    });

    return MainContentView;
});
