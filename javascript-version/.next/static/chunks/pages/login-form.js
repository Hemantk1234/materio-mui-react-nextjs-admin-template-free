/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/login-form"],{

/***/ "./src/pages/login-form/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/login-form/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PrepopulatedForm = function() {\n    var populateForm = // Function to populate the form with server data\n    function populateForm(data) {\n        document.getElementById('username').value = data.username;\n        document.getElementById('email').value = data.email;\n        document.getElementById('firstName').value = data.firstName;\n        document.getElementById('lastName').value = data.lastName;\n        document.getElementById('gender').value = data.gender;\n    };\n    _s();\n    var serverResponse = {\n        id: 15,\n        username: 'kminchelle',\n        email: 'kminchelle@qq.com',\n        firstName: 'Jeanne',\n        lastName: 'Halvorson',\n        gender: 'female'\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        populateForm(serverResponse);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                __source: {\n                    fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Pre-populated Form\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"style\", {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n          body {\\n            font-family: Arial, sans-serif;\\n            margin: 20px;\\n          }\\n\\n          form {\\n            width: 300px;\\n            margin: 0 auto;\\n          }\\n\\n          label {\\n            display: block;\\n            margin-bottom: 5px;\\n          }\\n\\n          input[type=\\\"text\\\"],\\n          input[type=\\\"email\\\"],\\n          select {\\n            width: 100%;\\n            padding: 8px;\\n            border: 1px solid #804BDF;\\n            border-radius: 4px;\\n            box-sizing: border-box;\\n            margin-bottom: 10px;\\n          }\\n\\n          select {\\n            height: 35px;\\n          }\\n\\n          input[type=\\\"submit\\\"] {\\n            background-color: #804BDF;\\n            color: white;\\n            padding: 10px 20px;\\n            border: none;\\n            border-radius: 4px;\\n            cursor: pointer;\\n          }\\n\\n          input[type=\\\"submit\\\"]:hover {\\n            background-color: #BB97FE;\\n          }\\n        \"\n                },\n                __source: {\n                    fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                id: \"userForm\",\n                __source: {\n                    fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"username\",\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Username:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        required: true,\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"email\",\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Email:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"email\",\n                        id: \"email\",\n                        name: \"email\",\n                        required: true,\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"firstName\",\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"First Name:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        id: \"firstName\",\n                        name: \"firstName\",\n                        required: true,\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"lastName\",\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Last Name:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        id: \"lastName\",\n                        name: \"lastName\",\n                        required: true,\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"gender\",\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Gender:\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                        id: \"gender\",\n                        name: \"gender\",\n                        required: true,\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                value: \"male\",\n                                __source: {\n                                    fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Male\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                value: \"female\",\n                                __source: {\n                                    fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Female\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                value: \"other\",\n                                __source: {\n                                    fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Other\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"submit\",\n                        defaultValue: \"Submit\",\n                        __source: {\n                            fileName: \"C:\\\\Hemant\\\\web development tut\\\\GitHub repo\\\\materio-mui-react-nextjs-admin-template-free\\\\javascript-version\\\\src\\\\pages\\\\login-form\\\\index.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(PrepopulatedForm, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = PrepopulatedForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrepopulatedForm);\nvar _c;\n$RefreshReg$(_c, \"PrepopulatedForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTt3QkFBQ1csSUFBSSxFQUFDLENBQVE7d0JBQUNDLFFBQVE7Ozs7Ozs7O2lHQUN2Q0csQ0FBTTtnQ0FBQ3RCLEtBQUssRUFBQyxDQUFNOzs7Ozs7OzBDQUFDLENBQUk7O2lHQUN4QnNCLENBQU07Z0NBQUN0QixLQUFLLEVBQUMsQ0FBUTs7Ozs7OzswQ0FBQyxDQUFNOztpR0FDNUJzQixDQUFNO2dDQUFDdEIsS0FBSyxFQUFDLENBQU87Ozs7Ozs7MENBQUMsQ0FBSzs7Ozt5RkFFNUJvQixDQUFFOzs7Ozs7Ozt5RkFDRkEsQ0FBRTs7Ozs7Ozs7eUZBQ0ZKLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDTSxZQUFZLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7O0FBSWxELENBQUM7R0F2R0s1QixnQkFBZ0I7S0FBaEJBLGdCQUFnQjtBQXlHdEIsK0RBQWVBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4tZm9ybS9pbmRleC5qc3g/Yzk2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFByZXBvcHVsYXRlZEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSB7XHJcbiAgICBpZDogMTUsXHJcbiAgICB1c2VybmFtZTogJ2ttaW5jaGVsbGUnLFxyXG4gICAgZW1haWw6ICdrbWluY2hlbGxlQHFxLmNvbScsXHJcbiAgICBmaXJzdE5hbWU6ICdKZWFubmUnLFxyXG4gICAgbGFzdE5hbWU6ICdIYWx2b3Jzb24nLFxyXG4gICAgZ2VuZGVyOiAnZmVtYWxlJ1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHBvcHVsYXRlRm9ybShzZXJ2ZXJSZXNwb25zZSlcclxuICB9KVxyXG5cclxuICAvLyBGdW5jdGlvbiB0byBwb3B1bGF0ZSB0aGUgZm9ybSB3aXRoIHNlcnZlciBkYXRhXHJcbiAgZnVuY3Rpb24gcG9wdWxhdGVGb3JtKGRhdGEpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlID0gZGF0YS51c2VybmFtZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWUgPSBkYXRhLmVtYWlsXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROYW1lJykudmFsdWUgPSBkYXRhLmZpcnN0TmFtZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3ROYW1lJykudmFsdWUgPSBkYXRhLmxhc3ROYW1lXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZGVyJykudmFsdWUgPSBkYXRhLmdlbmRlclxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx0aXRsZT5QcmUtcG9wdWxhdGVkIEZvcm08L3RpdGxlPlxyXG4gICAgICA8c3R5bGVcclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzgwNEJERjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwNEJERjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCQjk3RkU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb3JtIGlkPSd1c2VyRm9ybSc+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5Vc2VybmFtZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnIG5hbWU9J3VzZXJuYW1lJyByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgbmFtZT0nZW1haWwnIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpcnN0TmFtZSc+Rmlyc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZmlyc3ROYW1lJyBuYW1lPSdmaXJzdE5hbWUnIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2xhc3ROYW1lJz5MYXN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2xhc3ROYW1lJyBuYW1lPSdsYXN0TmFtZScgcmVxdWlyZWQgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZ2VuZGVyJz5HZW5kZXI6PC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0IGlkPSdnZW5kZXInIG5hbWU9J2dlbmRlcicgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdtYWxlJz5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdmZW1hbGUnPkZlbWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nb3RoZXInPk90aGVyPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgZGVmYXVsdFZhbHVlPSdTdWJtaXQnIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlcG9wdWxhdGVkRm9ybVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiUHJlcG9wdWxhdGVkRm9ybSIsInBvcHVsYXRlRm9ybSIsImRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ1c2VybmFtZSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZW5kZXIiLCJzZXJ2ZXJSZXNwb25zZSIsImlkIiwiZGl2IiwidGl0bGUiLCJzdHlsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsImJyIiwic2VsZWN0Iiwib3B0aW9uIiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login-form/index.jsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin-form&absolutePagePath=C%3A%5CHemant%5Cweb%20development%20tut%5CGitHub%20repo%5Cmaterio-mui-react-nextjs-admin-template-free%5Cjavascript-version%5Csrc%5Cpages%5Clogin-form%5Cindex.jsx!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin-form&absolutePagePath=C%3A%5CHemant%5Cweb%20development%20tut%5CGitHub%20repo%5Cmaterio-mui-react-nextjs-admin-template-free%5Cjavascript-version%5Csrc%5Cpages%5Clogin-form%5Cindex.jsx! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/login-form\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/login-form/index.jsx */ \"./src/pages/login-form/index.jsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/login-form\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZsb2dpbi1mb3JtJmFic29sdXRlUGFnZVBhdGg9QyUzQSU1Q0hlbWFudCU1Q3dlYiUyMGRldmVsb3BtZW50JTIwdHV0JTVDR2l0SHViJTIwcmVwbyU1Q21hdGVyaW8tbXVpLXJlYWN0LW5leHRqcy1hZG1pbi10ZW1wbGF0ZS1mcmVlJTVDamF2YXNjcmlwdC12ZXJzaW9uJTVDc3JjJTVDcGFnZXMlNUNsb2dpbi1mb3JtJTVDaW5kZXguanN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBFQUFrQztBQUN6RDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/OGI3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2xvZ2luLWZvcm1cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9sb2dpbi1mb3JtL2luZGV4LmpzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvbG9naW4tZm9ybVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin-form&absolutePagePath=C%3A%5CHemant%5Cweb%20development%20tut%5CGitHub%20repo%5Cmaterio-mui-react-nextjs-admin-template-free%5Cjavascript-version%5Csrc%5Cpages%5Clogin-form%5Cindex.jsx!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin-form&absolutePagePath=C%3A%5CHemant%5Cweb%20development%20tut%5CGitHub%20repo%5Cmaterio-mui-react-nextjs-admin-template-free%5Cjavascript-version%5Csrc%5Cpages%5Clogin-form%5Cindex.jsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);