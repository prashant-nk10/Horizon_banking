"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("module");

/***/ }),

/***/ "node:child_process":
/*!*************************************!*\
  !*** external "node:child_process" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("node:child_process");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:inspector":
/*!*********************************!*\
  !*** external "node:inspector" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("node:inspector");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:readline":
/*!********************************!*\
  !*** external "node:readline" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("node:readline");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:tls");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:worker_threads":
/*!**************************************!*\
  !*** external "node:worker_threads" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("node:worker_threads");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nvar _sentryCollisionFreeGlobalObject =  false ? 0 : typeof global != \"undefined\" ? global : typeof self != \"undefined\" ? self : {};\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__sentryBasePath\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\nvar _sentryCollisionFreeGlobalObject =  false ? 0 : typeof global != \"undefined\" ? global : typeof self != \"undefined\" ? self : {};\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__sentryBasePath\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\nasync function register() {\n    if (true) {\n        await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@opentelemetry\"), __webpack_require__.e(\"vendor-chunks/@sentry\"), __webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/semver\"), __webpack_require__.e(\"vendor-chunks/resolve\"), __webpack_require__.e(\"vendor-chunks/debug\"), __webpack_require__.e(\"vendor-chunks/color-convert\"), __webpack_require__.e(\"vendor-chunks/require-in-the-middle\"), __webpack_require__.e(\"vendor-chunks/@prisma\"), __webpack_require__.e(\"vendor-chunks/chalk\"), __webpack_require__.e(\"vendor-chunks/yallist\"), __webpack_require__.e(\"vendor-chunks/lru-cache\"), __webpack_require__.e(\"vendor-chunks/is-core-module\"), __webpack_require__.e(\"vendor-chunks/import-in-the-middle\"), __webpack_require__.e(\"vendor-chunks/color-name\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/ansi-styles\"), __webpack_require__.e(\"vendor-chunks/supports-color\"), __webpack_require__.e(\"vendor-chunks/stacktrace-parser\"), __webpack_require__.e(\"vendor-chunks/shimmer\"), __webpack_require__.e(\"vendor-chunks/function-bind\"), __webpack_require__.e(\"vendor-chunks/path-parse\"), __webpack_require__.e(\"vendor-chunks/@swc\"), __webpack_require__.e(\"vendor-chunks/module-details-from-path\"), __webpack_require__.e(\"vendor-chunks/has-flag\"), __webpack_require__.e(\"vendor-chunks/hasown\"), __webpack_require__.e(\"_instrument_node_modules_opentelemetry_instrumentation_build_esm_platform_node_sync_recursive-cef40b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sentry.server.config */ \"(instrument)/./sentry.server.config.ts\"));\n    }\n    if (false) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxtQ0FBbUMsTUFBNEIsR0FBR0MsQ0FBTUEsR0FBRyxPQUFPQyxVQUFVLGNBQWNBLFNBQVMsT0FBT0MsUUFBUSxjQUFjQSxPQUFPLENBQUM7QUFDNUpILGdDQUFnQyxDQUFDLCtCQUErQixHQUFHSTtBQUNuRUosZ0NBQWdDLENBQUMsaUJBQWlCLEdBQUdJO0FBQ3JESixnQ0FBZ0MsQ0FBQyxtQkFBbUIsR0FBR0k7QUFDdkRKLGdDQUFnQyxDQUFDLDJCQUEyQixHQUFHO0FBRS9ELElBQUlBLG1DQUFtQyxNQUE0QixHQUFHQyxDQUFNQSxHQUFHLE9BQU9DLFVBQVUsY0FBY0EsU0FBUyxPQUFPQyxRQUFRLGNBQWNBLE9BQU8sQ0FBQztBQUM1SkgsZ0NBQWdDLENBQUMsK0JBQStCLEdBQUdJO0FBQ25FSixnQ0FBZ0MsQ0FBQyxpQkFBaUIsR0FBR0k7QUFDckRKLGdDQUFnQyxDQUFDLG1CQUFtQixHQUFHSTtBQUN2REosZ0NBQWdDLENBQUMsMkJBQTJCLEdBQUc7QUFFeEQsZUFBZUs7SUFDcEIsSUFBSUMsSUFBNkIsRUFBVTtRQUN6QyxNQUFNLDBrREFBTztJQUNmO0lBRUEsSUFBSUEsS0FBNkIsRUFBUSxFQUV4QztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNtX2JhbmtpbmcvLi9pbnN0cnVtZW50YXRpb24udHM/ZDdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3QgPSB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHt9O1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3NlbnRyeVJld3JpdGVzVHVubmVsUGF0aF9fXCJdID0gdW5kZWZpbmVkO1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJTRU5UUllfUkVMRUFTRVwiXSA9IHVuZGVmaW5lZDtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiX19zZW50cnlCYXNlUGF0aFwiXSA9IHVuZGVmaW5lZDtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiX19yZXdyaXRlRnJhbWVzRGlzdERpcl9fXCJdID0gXCIubmV4dFwiO1xuXG52YXIgX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3QgPSB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHt9O1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3NlbnRyeVJld3JpdGVzVHVubmVsUGF0aF9fXCJdID0gdW5kZWZpbmVkO1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJTRU5UUllfUkVMRUFTRVwiXSA9IHVuZGVmaW5lZDtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiX19zZW50cnlCYXNlUGF0aFwiXSA9IHVuZGVmaW5lZDtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiX19yZXdyaXRlRnJhbWVzRGlzdERpcl9fXCJdID0gXCIubmV4dFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ25vZGVqcycpIHtcclxuICAgIGF3YWl0IGltcG9ydCgnLi9zZW50cnkuc2VydmVyLmNvbmZpZycpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ2VkZ2UnKSB7XHJcbiAgICBhd2FpdCBpbXBvcnQoJy4vc2VudHJ5LmVkZ2UuY29uZmlnJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdCIsIndpbmRvdyIsImdsb2JhbCIsInNlbGYiLCJ1bmRlZmluZWQiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1JVTlRJTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
module.exports = __webpack_exports__;

})();