"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; },\n/* harmony export */   name: function() { return /* binding */ name; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/db/client */ \"(app-pages-browser)/./server/db/client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default,name auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n//HOME PAGE\nfunction Page() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"li\"), 2), login = _useState[0], setLogin = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"123\"), 2), password = _useState1[0], setPassword = _useState1[1];\n    console.log(\"this is login info \" + login, password);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Slot Tracker\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function(e) {\n                        e.preventDefault();\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"User name\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    onChange: function(e) {\n                                        return setLogin(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    onChange: function(e) {\n                                        return setPassword(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Log in\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"uoB6c+iLoeAgX46CAaUt8ZpL3PU=\");\n_c = Page;\nfunction name(username, password) {\n    return _name.apply(this, arguments);\n}\nfunction _name() {\n    _name = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(username, password) {\n        var data, isInDataBase;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _server_db_client__WEBPACK_IMPORTED_MODULE_1__.prisma.userdata.findMany()\n                    ];\n                case 1:\n                    data = _state.sent();\n                    isInDataBase = data.map(function(data) {\n                        if (username === data.username && password === data.pw) {\n                            return true;\n                        }\n                    });\n                    return [\n                        2,\n                        isInDataBase ? true : false\n                    ];\n            }\n        });\n    });\n    return _name.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDZjtBQUVoQyxXQUFXO0FBQ00sU0FBU0U7O0lBQ3RCLElBQXlCRCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBM0JFLFFBQWtCRixjQUFaRyxXQUFZSDtJQUN6QixJQUErQkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQWpDSSxXQUF3QkosZUFBZkssY0FBZUw7SUFDL0JNLFFBQVFDLEdBQUcsQ0FBQyx3QkFBc0JMLE9BQU1FO0lBQ3hDLHFCQUNJLDhEQUFDSTs7MEJBQ0QsOERBQUNBOzBCQUNHLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNEOzBCQUNHLDRFQUFDRTtvQkFBS0MsVUFBVSxTQUFDQzt3QkFDYkEsRUFBRUMsY0FBYztvQkFDcEI7O3NDQUNBLDhEQUFDTDs7OENBQ0csOERBQUNNOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNDO29DQUFNQyxNQUFLO29DQUFPQyxVQUFVLFNBQUNMOytDQUFNVCxTQUFTUyxFQUFFTSxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7c0NBRS9ELDhEQUFDWDs7OENBQ0csOERBQUNNOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNDO29DQUFNQyxNQUFLO29DQUFXQyxVQUFVLFNBQUNMOytDQUFNUCxZQUFZTyxFQUFFTSxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7c0NBRXRFLDhEQUFDQzs0QkFBT0osTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbEM7R0EvQjBCZjtLQUFBQTtBQWdDbkIsU0FBZW9CLEtBQUtDLFFBQWUsRUFBQ2xCLFFBQWU7V0FBcENpQjs7U0FBQUE7SUFBQUEsUUFBZiw0RUFBb0JDLFFBQWUsRUFBQ2xCLFFBQWU7WUFDaERtQixNQUNBQzs7OztvQkFETzs7d0JBQU16QixxREFBTUEsQ0FBQzBCLFFBQVEsQ0FBQ0MsUUFBUTs7O29CQUFyQ0gsT0FBTztvQkFDUEMsZUFBZUQsS0FBS0ksR0FBRyxDQUFDLFNBQUNKO3dCQUMzQixJQUFHRCxhQUFhQyxLQUFLRCxRQUFRLElBQUlsQixhQUFhbUIsS0FBS0ssRUFBRSxFQUFDOzRCQUNsRCxPQUFPO3dCQUNYO29CQUNKO29CQUNBOzt3QkFBT0osZUFBZ0IsT0FBTzs7OztJQUNsQztXQVJzQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL3NlcnZlci9kYi9jbGllbnQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG4vL0hPTUUgUEFHRVxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKXtcclxuICAgIGNvbnN0IFtsb2dpbixzZXRMb2dpbl0gPSB1c2VTdGF0ZSgnbGknKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcxMjMnKVxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGxvZ2luIGluZm8gXCIrbG9naW4scGFzc3dvcmQpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+U2xvdCBUcmFja2VyPC9oMT5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsID5Vc2VyIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsID5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+TG9nIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmID1cIi9nYW1lc1wiPkxvZyBJbjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT5Eb24ndCBoYXZlIGEgYWNjb3VudD8gU2lnbiB1cCB0b2RheSE8L3A+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID1cIi9zaWdudXBcIj5TaWduIHVwPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5hbWUodXNlcm5hbWU6U3RyaW5nLHBhc3N3b3JkOlN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS51c2VyZGF0YS5maW5kTWFueSgpXHJcbiAgICBjb25zdCBpc0luRGF0YUJhc2UgPSBkYXRhLm1hcCgoZGF0YSk9PntcclxuICAgICAgICBpZih1c2VybmFtZSA9PT0gZGF0YS51c2VybmFtZSAmJiBwYXNzd29yZCA9PT0gZGF0YS5wdyl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBpc0luRGF0YUJhc2UgPyAgdHJ1ZSA6IGZhbHNlXHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsInVzZVN0YXRlIiwiUGFnZSIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwibmFtZSIsInVzZXJuYW1lIiwiZGF0YSIsImlzSW5EYXRhQmFzZSIsInVzZXJkYXRhIiwiZmluZE1hbnkiLCJtYXAiLCJwdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});