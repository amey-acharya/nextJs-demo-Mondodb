"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\nvar _this = undefined;\n\n\n\nvar DUMMY_MEETUPS = [\n    {\n        key: \"m1\",\n        id: \"m1\",\n        image: \"https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-1120x630.jpg\",\n        title: \"weWork Conference room\",\n        description: \"The best collaboration spaces are more than a table and chairs they're built to support how teams work\",\n        address: \"Koramangala, Diamond Tower\"\n    },\n    {\n        key: \"m2\",\n        id: \"m2\",\n        image: \"https://ctfassets.imgix.net/vh7r69kgcki3/66q62HhYXIzsNo6OLl9oSq/b6878ee3ffca56ffe7d365f539bc05d7/Web_150DPI-20210124_WeWork_Brand_Shoot_San_Francisco_016.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506\",\n        title: \"Designed to support productivity and collaboration\",\n        description: \"Take on the working day and be more productive in spaces that offer high-speed Internet, business-class printers and conferencing A/V tools. Our assortment of meeting rooms will help set you up for success and give you space you need to get things done.\",\n        address: \"Marathalli, Marks Road\"\n    },\n    {\n        key: \"m3\",\n        id: \"m3\",\n        image: \"https://ctfassets.imgix.net/vh7r69kgcki3/46syg6yyDjSO0ZcwmIjOWE/20cb1843b187cb5e2231468b832a753d/Web_150DPI-20210914_WeWork_1828_Walnut_St_-_Corrigan_Station_-_Kansas_011.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=506\",\n        title: \"Bookable meeting rooms to meet your needs\",\n        description: \"From small rooms to large classrooms, we have meeting rooms in all shapes and sizes. Use the WeWork app to filter by layout and amenities such as TVs\",\n        address: \"Rickmond Road Tower\"\n    }, \n];\nvar HomePage = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"/Users/ameyacharya/Desktop/assignment/assignment23/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNkQ7QUFFSDtBQUUxRCxJQUFNSyxhQUFhLEdBQUc7SUFDcEI7UUFDRUMsR0FBRyxFQUFFLElBQUk7UUFDVEMsRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUNILHVHQUF1RztRQUN6R0MsS0FBSyxFQUFFLHdCQUF3QjtRQUMvQkMsV0FBVyxFQUNULHdHQUF3RztRQUMxR0MsT0FBTyxFQUFFLDRCQUE0QjtLQUN0QztJQUNEO1FBQ0VMLEdBQUcsRUFBRSxJQUFJO1FBQ1RDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFDSCxnTkFBZ047UUFDbE5DLEtBQUssRUFBRSxvREFBb0Q7UUFDM0RDLFdBQVcsRUFDVCwrUEFBK1A7UUFDalFDLE9BQU8sRUFBRSx3QkFBd0I7S0FDbEM7SUFDRDtRQUNFTCxHQUFHLEVBQUUsSUFBSTtRQUNUQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQ0gsaU9BQWlPO1FBQ25PQyxLQUFLLEVBQUUsMkNBQTJDO1FBQ2xEQyxXQUFXLEVBQ1QsdUpBQXVKO1FBQ3pKQyxPQUFPLEVBQUUscUJBQXFCO0tBQy9CO0NBQ0Y7QUFFRCxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBRTFCLHFCQUNNLDhEQUFDVCxzRUFBVTtRQUFDVSxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzs7Ozs7YUFBSSxDQUMxQztDQUNIO0FBTEtGLEtBQUFBLFFBQVE7O0FBcUNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICB7XG4gICAga2V5OiBcIm0xXCIsXG4gICAgaWQ6IFwibTFcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly93d3cud2V3b3JrLmNvbS9pZGVhcy93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvNC8yMDIxLzA4LzIwMjAxMDA4LTE5OVdhdGVyU3QtMl92MS0xMTIweDYzMC5qcGdcIixcbiAgICB0aXRsZTogXCJ3ZVdvcmsgQ29uZmVyZW5jZSByb29tXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBiZXN0IGNvbGxhYm9yYXRpb24gc3BhY2VzIGFyZSBtb3JlIHRoYW4gYSB0YWJsZSBhbmQgY2hhaXJzIHRoZXkncmUgYnVpbHQgdG8gc3VwcG9ydCBob3cgdGVhbXMgd29ya1wiLFxuICAgIGFkZHJlc3M6IFwiS29yYW1hbmdhbGEsIERpYW1vbmQgVG93ZXJcIixcbiAgfSxcbiAge1xuICAgIGtleTogXCJtMlwiLFxuICAgIGlkOiBcIm0yXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3RmYXNzZXRzLmltZ2l4Lm5ldC92aDdyNjlrZ2NraTMvNjZxNjJIaFlYSXpzTm82T0xsOW9TcS9iNjg3OGVlM2ZmY2E1NmZmZTdkMzY1ZjUzOWJjMDVkNy9XZWJfMTUwRFBJLTIwMjEwMTI0X1dlV29ya19CcmFuZF9TaG9vdF9TYW5fRnJhbmNpc2NvXzAxNi5qcGc/YXV0bz1mb3JtYXQlMjBjb21wcmVzcyZmaXQ9Y3JvcCZxPTUwJnc9OTAwJmg9NTA2XCIsXG4gICAgdGl0bGU6IFwiRGVzaWduZWQgdG8gc3VwcG9ydCBwcm9kdWN0aXZpdHkgYW5kIGNvbGxhYm9yYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGFrZSBvbiB0aGUgd29ya2luZyBkYXkgYW5kIGJlIG1vcmUgcHJvZHVjdGl2ZSBpbiBzcGFjZXMgdGhhdCBvZmZlciBoaWdoLXNwZWVkIEludGVybmV0LCBidXNpbmVzcy1jbGFzcyBwcmludGVycyBhbmQgY29uZmVyZW5jaW5nIEEvViB0b29scy4gT3VyIGFzc29ydG1lbnQgb2YgbWVldGluZyByb29tcyB3aWxsIGhlbHAgc2V0IHlvdSB1cCBmb3Igc3VjY2VzcyBhbmQgZ2l2ZSB5b3Ugc3BhY2UgeW91IG5lZWQgdG8gZ2V0IHRoaW5ncyBkb25lLlwiLFxuICAgIGFkZHJlc3M6IFwiTWFyYXRoYWxsaSwgTWFya3MgUm9hZFwiLFxuICB9LFxuICB7XG4gICAga2V5OiBcIm0zXCIsXG4gICAgaWQ6IFwibTNcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9jdGZhc3NldHMuaW1naXgubmV0L3ZoN3I2OWtnY2tpMy80NnN5ZzZ5eURqU08wWmN3bUlqT1dFLzIwY2IxODQzYjE4N2NiNWUyMjMxNDY4YjgzMmE3NTNkL1dlYl8xNTBEUEktMjAyMTA5MTRfV2VXb3JrXzE4MjhfV2FsbnV0X1N0Xy1fQ29ycmlnYW5fU3RhdGlvbl8tX0thbnNhc18wMTEuanBnP2F1dG89Zm9ybWF0JTIwY29tcHJlc3MmZml0PWNyb3AmcT01MCZ3PTkwMCZoPTUwNlwiLFxuICAgIHRpdGxlOiBcIkJvb2thYmxlIG1lZXRpbmcgcm9vbXMgdG8gbWVldCB5b3VyIG5lZWRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkZyb20gc21hbGwgcm9vbXMgdG8gbGFyZ2UgY2xhc3Nyb29tcywgd2UgaGF2ZSBtZWV0aW5nIHJvb21zIGluIGFsbCBzaGFwZXMgYW5kIHNpemVzLiBVc2UgdGhlIFdlV29yayBhcHAgdG8gZmlsdGVyIGJ5IGxheW91dCBhbmQgYW1lbml0aWVzIHN1Y2ggYXMgVFZzXCIsXG4gICAgYWRkcmVzczogXCJSaWNrbW9uZCBSb2FkIFRvd2VyXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzIChjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzXG4gIFxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXG4vLyAgIH1cbi8vIH1cbi8vIH1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hbWV5Omh5cGVycjEyM0BjbHVzdGVyMC5zbW1xZi5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKClcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuICBjbGllbnQuY2xvc2UoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG5cbiAgICAgIH0pKVxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1lZXR1cExpc3QiLCJEVU1NWV9NRUVUVVBTIiwia2V5IiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});