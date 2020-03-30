(this["webpackJsonphello"] = this["webpackJsonphello"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/chaos/testreact/hello/src/App.js";




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "App-logo",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Edit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, "src/App.js"), " and save to reload."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Learn React")));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/counter.jsx":
/*!************************************!*\
  !*** ./src/components/counter.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/chaos/testreact/hello/src/components/counter.jsx";


class Counter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      count: 0,
      tags: ["tag1", "tag2", "tag3"]
    };

    this.handleIncrement = () => {
      console.log("Increment Clicked", this.state.count);
      this.state.count += 1;
      this.setState({
        count: this.state.count
      });
      console.log("Increment Clicked", this.state.count);
    };
  }

  renderTags() {
    if (this.state.tags.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 46
      }
    }, "There are no tags");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, this.state.tags.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, tag)));
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: 30
      },
      className: this.getBadgeClasses(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, this.formatCount()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleIncrement,
      className: "btn btn-secendory btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, "Increment"), this.state.tags.length === 0 && "please create a new tag!", this.renderTags());
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const {
      count
    } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./src/components/search.png":
/*!***********************************!*\
  !*** ./src/components/search.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/searchbar.jsx":
/*!**************************************!*\
  !*** ./src/components/searchbar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.png */ "./src/components/search.png");
/* harmony import */ var _search_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/chaos/testreact/hello/src/components/searchbar.jsx";



class Searchbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const dStyle = {
      margin: 0,
      top: "43%",
      left: "36%",
      padding: 0,
      width: "50%",
      height: "10%",
      border: "5px solid black",
      padding: "12px 3%",
      fontWeight: "Bold",
      fontSize: 22,
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto"
    };
    const submitStyle = {
      margin: 0,
      top: "43%",
      left: "86%",
      padding: 0,
      background: "black",
      border: "none",
      width: "5%",
      height: "10%",
      position: "fixed",
      outlineWidth: 0,
      overflow: "auto"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      style: dStyle,
      type: "text",
      className: "input",
      placeholder: "Enter Contest Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "image",
      style: submitStyle,
      src: _search_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "Submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ }),

/***/ "./src/components/sidebar.jsx":
/*!************************************!*\
  !*** ./src/components/sidebar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/chaos/testreact/hello/src/components/sidebar.jsx";


class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const dStyle = {
      margin: 0,
      padding: 0,
      width: "25%",
      background: "#000000",
      position: "fixed",
      height: "100%",
      overflow: "auto"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: dStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: "7%",
        fontWeight: "Bold"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, "CHEF'S ARENA"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_counter_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/counter.jsx */ "./src/components/counter.jsx");
/* harmony import */ var _components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar.jsx */ "./src/components/sidebar.jsx");
/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/searchbar */ "./src/components/searchbar.jsx");
var _jsxFileName = "/home/chaos/testreact/hello/src/index.js";









react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_searchbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_counter_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/chaos/testreact/hello/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/chaos/testreact/hello/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/chaos/testreact/hello/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map