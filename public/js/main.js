/*global require*/
"use strict";

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        }
    },
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        marionette: '../bower_components/backbone.marionette/backbone.marionette',
        text: "../bower_components/requirejs/require"
    }
});

require([
    "appview"
], function (AppView) {

    AppView.start();

});
