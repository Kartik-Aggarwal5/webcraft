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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/app */ \"./src/context/app.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Form = ()=>{\n    const { formOpen , closeForm , email , setEmail , name , setName  } = (0,_context_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!name || !email) return alert(\"Please fill all fields\");\n        const sheet_id = process.env.NEXT_SHEET_ID;\n        setLoading(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(`https://api.apispreadsheets.com/data/${sheet_id}/`, {\n                Name: name,\n                Time: new Date().toLocaleString(),\n                Email: email\n            });\n            alert(\"Thank you for your interest. We will get back to you soon.\");\n            setLoading(false);\n            setEmail(\"\");\n            setName(\"\");\n            closeForm();\n        } catch (error) {\n            setLoading(false);\n            alert(\"An error occured, please try again\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        onClose: closeForm,\n        open: formOpen,\n        maxWidth: \"sm\",\n        fullWidth: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-10 py-5 dialog-request\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[24px] \",\n                    children: \"Request Early Access\"\n                }, void 0, false, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        placeholder: \"John Doe\",\n                        fullWidth: true,\n                        label: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        placeholder: \"john.doe@email.com\",\n                        fullWidth: true,\n                        label: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-end \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closeForm,\n                            className: \"border mr-5 font-gilroy px-5 py-2 mt-5 font-medium rounded\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            disabled: loading,\n                            className: \"bg-[#FF4820] border border-[#FF4820] font-gilroy px-5 py-2 mt-5 font-medium rounded\",\n                            children: loading ? \"Submitting...\" : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/components/form.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDZTtBQUN4QjtBQUNjO0FBRXhDLE1BQU1NLE9BQU8sSUFBTTtJQUNqQixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsVUFBUyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUUsR0FBR1osd0RBQU1BO0lBRXRFLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1VLGVBQWUsT0FBT0MsSUFBTTtRQUNoQ0EsRUFBRUMsY0FBYztRQUNoQixJQUFJLENBQUNOLFFBQVEsQ0FBQ0YsT0FBTyxPQUFPUyxNQUFNO1FBRWxDLE1BQU1DLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUUxQ1IsV0FBVyxJQUFJO1FBQ2YsSUFBSTtZQUNGLE1BQU1YLGtEQUFVLENBQUMsQ0FBQyxxQ0FBcUMsRUFBRWdCLFNBQVMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BFSyxNQUFNYjtnQkFDTmMsTUFBTSxJQUFJQyxPQUFPQyxjQUFjO2dCQUMvQkMsT0FBT25CO1lBQ1Q7WUFDQVMsTUFBTTtZQUNOSixXQUFXLEtBQUs7WUFDaEJKLFNBQVM7WUFDVEUsUUFBUTtZQUNSSjtRQUNGLEVBQUUsT0FBT3FCLE9BQU87WUFDZGYsV0FBVyxLQUFLO1lBQ2hCSSxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDakIsaURBQU1BO1FBQUM2QixTQUFTdEI7UUFBV3VCLE1BQU14QjtRQUFVeUIsVUFBUztRQUFLQyxTQUFTO2tCQUNqRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUF5Qjs7Ozs7OzhCQUN0Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNqQyxvREFBU0E7d0JBQ1JtQyxPQUFPMUI7d0JBQ1AyQixVQUFVLENBQUN0QixJQUFNSixRQUFRSSxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO3dCQUN2Q0csYUFBWTt3QkFDWlAsU0FBUzt3QkFDVFEsT0FBTTs7Ozs7Ozs7Ozs7OEJBR1YsOERBQUNQO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDakMsb0RBQVNBO3dCQUNSbUMsT0FBTzVCO3dCQUNQNkIsVUFBVSxDQUFDdEIsSUFBTU4sU0FBU00sRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDeENHLGFBQVk7d0JBQ1pQLFNBQVM7d0JBQ1RRLE9BQU07Ozs7Ozs7Ozs7OzhCQUlWLDhEQUFDUDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNPOzRCQUNDQyxTQUFTbkM7NEJBQ1QyQixXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNPOzRCQUNDQyxTQUFTNUI7NEJBQ1Q2QixVQUFVL0I7NEJBQ1ZzQixXQUFVO3NDQUVUdEIsVUFBVSxrQkFBa0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQ7QUFFQSxpRUFBZVAsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHV0ZS1haS1sYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcz9lYjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VBcHAgZnJvbSBcIkAvY29udGV4dC9hcHBcIjtcbmltcG9ydCB7IERpYWxvZywgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IGZvcm1PcGVuLCBjbG9zZUZvcm0sIGVtYWlsLCBzZXRFbWFpbCwgbmFtZSwgc2V0TmFtZSB9ID0gdXNlQXBwKCk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmFtZSB8fCAhZW1haWwpIHJldHVybiBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCBmaWVsZHNcIik7XG5cbiAgICBjb25zdCBzaGVldF9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfU0hFRVRfSUQ7XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL2FwaS5hcGlzcHJlYWRzaGVldHMuY29tL2RhdGEvJHtzaGVldF9pZH0vYCwge1xuICAgICAgICBOYW1lOiBuYW1lLFxuICAgICAgICBUaW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgIEVtYWlsOiBlbWFpbCxcbiAgICAgIH0pO1xuICAgICAgYWxlcnQoXCJUaGFuayB5b3UgZm9yIHlvdXIgaW50ZXJlc3QuIFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IHNvb24uXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICBjbG9zZUZvcm0oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvbkNsb3NlPXtjbG9zZUZvcm19IG9wZW49e2Zvcm1PcGVufSBtYXhXaWR0aD1cInNtXCIgZnVsbFdpZHRoPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMCBweS01IGRpYWxvZy1yZXF1ZXN0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsyNHB4XSBcIj5SZXF1ZXN0IEVhcmx5IEFjY2VzczwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huLmRvZUBlbWFpbC5jb21cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRm9ybX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBtci01IGZvbnQtZ2lscm95IHB4LTUgcHktMiBtdC01IGZvbnQtbWVkaXVtIHJvdW5kZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0ZGNDgyMF0gYm9yZGVyIGJvcmRlci1bI0ZGNDgyMF0gZm9udC1naWxyb3kgcHgtNSBweS0yIG10LTUgZm9udC1tZWRpdW0gcm91bmRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyBcIlN1Ym1pdHRpbmcuLi5cIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbInVzZUFwcCIsIkRpYWxvZyIsIlRleHRGaWVsZCIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJmb3JtT3BlbiIsImNsb3NlRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJuYW1lIiwic2V0TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJzaGVldF9pZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1NIRUVUX0lEIiwicG9zdCIsIk5hbWUiLCJUaW1lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiRW1haWwiLCJlcnJvciIsIm9uQ2xvc2UiLCJvcGVuIiwibWF4V2lkdGgiLCJmdWxsV2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/form.js\n");

/***/ }),

/***/ "./src/context/app.js":
/*!****************************!*\
  !*** ./src/context/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useApp = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\nconst AppProvider = ({ children  })=>{\n    const [formOpen, setFormOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openForm = (e)=>{\n        e.preventDefault();\n        setFormOpen(true);\n    };\n    const closeForm = ()=>setFormOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            formOpen,\n            openForm,\n            closeForm,\n            email,\n            setEmail,\n            name,\n            setName\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/context/app.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNRywyQkFBYUgsb0RBQWFBO0FBRWhDLE1BQU1JLFNBQVMsSUFBTUgsaURBQVVBLENBQUNFO0FBRXpCLE1BQU1FLGNBQWMsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUMzQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUU5QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1XLFdBQVcsQ0FBQ0MsSUFBTTtRQUN0QkEsRUFBRUMsY0FBYztRQUNoQlAsWUFBWSxJQUFJO0lBQ2xCO0lBQ0EsTUFBTVEsWUFBWSxJQUFNUixZQUFZLEtBQUs7SUFFekMscUJBQ0UsOERBQUNMLFdBQVdjLFFBQVE7UUFDbEJDLE9BQU87WUFDTFg7WUFDQU07WUFDQUc7WUFDQVA7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQ047Ozs7OztBQUdQLEVBQUU7QUFFRixpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHV0ZS1haS1sYW5kaW5nLy4vc3JjL2NvbnRleHQvYXBwLmpzP2NlNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgdXNlQXBwID0gKCkgPT4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZm9ybU9wZW4sIHNldEZvcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvcGVuRm9ybSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEZvcm1PcGVuKHRydWUpO1xuICB9O1xuICBjb25zdCBjbG9zZUZvcm0gPSAoKSA9PiBzZXRGb3JtT3BlbihmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZm9ybU9wZW4sXG4gICAgICAgIG9wZW5Gb3JtLFxuICAgICAgICBjbG9zZUZvcm0sXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBzZXRFbWFpbCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwcDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsInVzZUFwcCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJmb3JtT3BlbiIsInNldEZvcm1PcGVuIiwiZW1haWwiLCJzZXRFbWFpbCIsIm5hbWUiLCJzZXROYW1lIiwib3BlbkZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZUZvcm0iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/app.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_fonts_gilroy_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/fonts/gilroy/stylesheet.css */ \"./src/assets/fonts/gilroy/stylesheet.css\");\n/* harmony import */ var _assets_fonts_gilroy_stylesheet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_gilroy_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var typeface_manrope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeface-manrope */ \"./node_modules/typeface-manrope/manrope.css\");\n/* harmony import */ var typeface_manrope__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeface_manrope__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/theme/theme */ \"./src/theme/theme.js\");\n/* harmony import */ var _context_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/app */ \"./src/context/app.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form */ \"./src/components/form.js\");\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form__WEBPACK_IMPORTED_MODULE_7__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_8__]);\n([_components_form__WEBPACK_IMPORTED_MODULE_7__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_app__WEBPACK_IMPORTED_MODULE_6__.AppProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: _theme_theme__WEBPACK_IMPORTED_MODULE_5__.darkTheme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/pages/_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/pages/_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_8__.Analytics, {}, void 0, false, {\n                    fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kartikaggarwal/Desktop/Webcraft.works/webcraft/src/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2dCO0FBQ3BCO0FBQ29CO0FBQ0o7QUFDRTtBQUNQO0FBQ2U7QUFFckMsU0FBU0ssSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUNFLDhEQUFDTCxxREFBV0E7a0JBQ1YsNEVBQUNGLHdEQUFhQTtZQUFDUSxPQUFPUCxtREFBU0E7OzhCQUM3Qiw4REFBQ0Usd0RBQUlBOzs7Ozs4QkFDTCw4REFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzhCQUN4Qiw4REFBQ0gsOERBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2x1dGUtYWktbGFuZGluZy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIkAvYXNzZXRzL2ZvbnRzL2dpbHJveS9zdHlsZXNoZWV0LmNzc1wiO1xuaW1wb3J0IFwidHlwZWZhY2UtbWFucm9wZVwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBkYXJrVGhlbWUgfSBmcm9tIFwiQC90aGVtZS90aGVtZVwiO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L2FwcFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9mb3JtXCI7XG5pbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tIFwiQHZlcmNlbC9hbmFseXRpY3MvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcHBQcm92aWRlcj5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrVGhlbWV9PlxuICAgICAgICA8Rm9ybSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxBbmFseXRpY3MgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0FwcFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJBcHBQcm92aWRlciIsIkZvcm0iLCJBbmFseXRpY3MiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/theme/theme.js":
/*!****************************!*\
  !*** ./src/theme/theme.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"darkTheme\": () => (/* binding */ darkTheme)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: \"dark\",\n        background: {\n            default: \"#040c18\",\n            paper: \"#002852\"\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRTVDLE1BQU1DLFlBQVlELGlFQUFXQSxDQUFDO0lBQ25DRSxTQUFTO1FBQ1BDLE1BQU07UUFDTkMsWUFBWTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87UUFDVDtJQUNGO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHV0ZS1haS1sYW5kaW5nLy4vc3JjL3RoZW1lL3RoZW1lLmpzPzcwODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6IFwiZGFya1wiLFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IFwiIzA0MGMxOFwiLFxuICAgICAgcGFwZXI6IFwiIzAwMjg1MlwiLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsImRhcmtUaGVtZSIsInBhbGV0dGUiLCJtb2RlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme/theme.js\n");

/***/ }),

/***/ "./node_modules/typeface-manrope/manrope.css":
/*!***************************************************!*\
  !*** ./node_modules/typeface-manrope/manrope.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/fonts/gilroy/stylesheet.css":
/*!************************************************!*\
  !*** ./src/assets/fonts/gilroy/stylesheet.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();