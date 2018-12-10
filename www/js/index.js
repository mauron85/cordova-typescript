define(["require", "exports", "cordova-plugin-mauron85-background-geolocation"], function (require, exports, cordova_plugin_mauron85_background_geolocation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // For an introduction to the Blank template, see the following documentation:
    // http://go.microsoft.com/fwlink/?LinkID=397705
    // To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
    // and then run "window.location.reload()" in the JavaScript Console.
    var TypeScriptGreeter;
    (function (TypeScriptGreeter) {
        var Application;
        (function (Application) {
            "use strict";
            var current = 0;
            function initialize() {
                document.addEventListener('deviceready', onDeviceReady, false);
            }
            Application.initialize = initialize;
            function onDeviceReady() {
                // Handle the Cordova pause and resume events
                document.addEventListener('pause', onPause, false);
                document.addEventListener('resume', onResume, false);
                // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
                cordova_plugin_mauron85_background_geolocation_1.default.start();
            }
            function onPause() {
                // TODO: This application has been suspended. Save application state here.
            }
            function onResume() {
                // TODO: This application has been reactivated. Restore application state here.
            }
        })(Application || (Application = {}));
        Application.initialize();
    })(TypeScriptGreeter || (TypeScriptGreeter = {}));
});
//# sourceMappingURL=index.js.map