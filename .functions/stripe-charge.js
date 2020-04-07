(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-plugin-transform-class-properties' from '/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign'\n    at Function.resolveSync [as sync] (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/resolve/lib/sync.js:81:15)\n    at resolveStandardizedName (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/files/plugins.js:101:31)\n    at resolvePlugin (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/files/plugins.js:54:10)\n    at loadPlugin (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/files/plugins.js:62:20)\n    at createDescriptor (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/config-descriptors.js:154:9)\n    at /Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/config-descriptors.js:109:50\n    at Array.map (<anonymous>)\n    at createDescriptors (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\n    at createPluginDescriptors (/Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/config-descriptors.js:105:10)\n    at /Users/rodrigoantunes/Sites/Rodrigo/estudos/react/reactDesign/node_modules/@babel/core/lib/config/config-descriptors.js:63:53");

/***/ })
/******/ ])));