'use strict';"use strict";
var router_providers_common_1 = require('./router_providers_common');
var browser_platform_location_1 = require('angular2/src/platform/browser/location/browser_platform_location');
var common_1 = require('angular2/platform/common');
exports.ROUTER_PROVIDERS = [
    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
    /*@ts2dart_Provider*/ { provide: common_1.PlatformLocation, useClass: browser_platform_location_1.BrowserPlatformLocation },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtY0psNnpEWloudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL3JvdXRlcl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2xFLDBDQUVPLGtFQUFrRSxDQUFDLENBQUE7QUFDMUUsdUJBQStCLDBCQUEwQixDQUFDLENBQUE7QUFFN0Msd0JBQWdCLEdBQTRCO0lBQ3ZELGlEQUF1QjtJQUN2QixxQkFBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSx5QkFBZ0IsRUFBRSxRQUFRLEVBQUUsbURBQXVCLEVBQUM7Q0FDckYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU19DT01NT059IGZyb20gJy4vcm91dGVyX3Byb3ZpZGVyc19jb21tb24nO1xuaW1wb3J0IHtcbiAgQnJvd3NlclBsYXRmb3JtTG9jYXRpb25cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBST1VURVJfUFJPVklERVJTOiBhbnlbXSA9IC8qQHRzMmRhcnRfY29uc3QqL1tcbiAgUk9VVEVSX1BST1ZJREVSU19DT01NT04sXG4gIC8qQHRzMmRhcnRfUHJvdmlkZXIqLyB7cHJvdmlkZTogUGxhdGZvcm1Mb2NhdGlvbiwgdXNlQ2xhc3M6IEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9ufSxcbl07XG4iXX0=