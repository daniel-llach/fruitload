/*global define*/
define([
    "backbone",
    "marionette",
    "text!templates/header/header.html"
], function (Backbone, Marionette, HeaderTemplate) {
    "use strict";

    var HeaderLayout = Backbone.Marionette.LayoutView.extend({
        template: _.template(HeaderTemplate)
    });

});
