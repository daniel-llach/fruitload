/*global define*/
define([
    "backbone",
    "marionette"
], function (Backbone, Marionette) {
    "use strict";

    var AppView = Backbone.View.extend({

        initialize: function () {
           alert('ehhhh!!!');
        }

    });

    return AppView;
});
