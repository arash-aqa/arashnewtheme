/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage-style.js":
/*!*******************************!*\
  !*** ./src/homepage-style.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-style.scss */ \"./src/homepage-style.scss\");\n /// for page js\n// let navicon = document.querySelector(\"#nav-icon\");\n// let navwrapper = document.querySelector(\".nav-wrapper\");\n// let nav = document.querySelector(\".nav\");\n// navicon.addEventListener(\"click\", () => {\n//         navicon.classList.toggle(\"open\");\n//         navwrapper.classList.toggle(\"mobilenavopen\");\n//         nav.classList.toggle(\"nav-open\");\n//     }\n// );\n\n(function ($) {\n  if ($(document).width() + 17 <= 980) {\n    /// for mobile nav\n    $('li.menu-item-has-children').prepend('<span data-icon=\"&#x4c\" class=\"li-child-icon\"></span>');\n    $(\".nav\").find(\"li .li-child-icon\").on('click', function (e) {\n      e.preventDefault();\n      $(this).parent('li').stop(true, true).toggleClass('open-sub');\n    }); /// click out side to hide mobile nav\n\n    $(document).on(\"mouseup\", function (e) {\n      if ($('nav').hasClass('nav-open')) {\n        if (!$('nav').is(e.target) // if the target of the click isn't the container...\n        && $('nav').has(e.target).length === 0 && !$('#nav-wrapper').is(e.target) // prevent to not conflict with down function\n        && $('#nav-wrapper').has(e.target).length === 0) {\n          // ... not descendant click conflict down function\n          $('nav').removeClass('nav-open');\n          $('#nav-icon').removeClass('open');\n        }\n      }\n    });\n    $('#nav-wrapper').on(\"click\", function (e) {\n      e.preventDefault();\n\n      if (!$('nav').is(e.target) && $('nav').has(e.target).length === 0) {\n        $('nav').toggleClass('nav-open');\n        $('#nav-icon').toggleClass('open');\n      }\n    });\n  } else if ($(document).width() + 17 > 980) {\n    console.log($(document).width() + 17);\n    $('li.menu-item-has-children').prepend('<span data-icon=\"&#x33\" class=\"li-child-icon-desktop\"></span>');\n  }\n})(jQuery);\n\n//# sourceURL=webpack://arashStatic/./src/homepage-style.js?");

/***/ }),

/***/ "./src/homepage-style.scss":
/*!*********************************!*\
  !*** ./src/homepage-style.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arashStatic/./src/homepage-style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/homepage-style.js");
/******/ 	
/******/ })()
;