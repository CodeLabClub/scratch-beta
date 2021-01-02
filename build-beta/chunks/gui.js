var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[4],{

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1902);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X"
};

/***/ }),

/***/ 1903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(75);

var _appStateHoc = __webpack_require__(165);

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _gui = __webpack_require__(249);

var _gui2 = _interopRequireDefault(_gui);

var _hashParserHoc = __webpack_require__(268);

var _hashParserHoc2 = _interopRequireDefault(_hashParserHoc);

var _log = __webpack_require__(73);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var onClickLogo = function onClickLogo() {
  window.location = 'https://scratch.mit.edu';
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  (0, _log2.default)('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  (0, _log2.default)('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  (0, _log2.default)('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


exports.default = function (appTarget) {
  _gui2.default.setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.


  var WrappedGui = (0, _redux.compose)(_appStateHoc2.default, _hashParserHoc2.default)(_gui2.default); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if ( true && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    // Warn before navigating away
    window.onbeforeunload = function () {
      return true;
    };
  }

  _reactDom2.default.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/_react2.default.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/_react2.default.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
};

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(742);

__webpack_require__(744);

__webpack_require__(756);

__webpack_require__(773);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _appStateHoc = __webpack_require__(165);

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _browserModal = __webpack_require__(632);

var _browserModal2 = _interopRequireDefault(_browserModal);

var _supportedBrowser = __webpack_require__(635);

var _supportedBrowser2 = _interopRequireDefault(_supportedBrowser);

var _index = __webpack_require__(1901);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Polyfills
// For Safari 9
// import analytics from '../lib/analytics';
// Register "base" page view
// analytics.pageview('/');
// PWA
if (navigator.serviceWorker && "production" !== 'development') {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    console.log('service worker 注册成功');

    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
            window.SCRATCH_VM && window.SCRATCH_VM.runtime && window.SCRATCH_VM.runtime.emit('PUSH_NOTIFICATION', {
              timeout: 600000,
              content: /*#__PURE__*/_react2.default.createElement("span", null, "\u5DF2\u66F4\u65B0\u81F3\u65B0\u7248\u672C, \u8BF7", /*#__PURE__*/_react2.default.createElement("a", {
                href: "/",
                style: {
                  color: 'hsla(215, 100%, 65%, 1)'
                }
              }, "\u5237\u65B0"), "\u9875\u9762"),
              type: 'info'
            });
          } else {
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (err) {
    console.log('servcie worker 注册失败');
  });
}

var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '(つェ⊂)我藏好了哦~ ';
    clearTimeout(titleTime);
  } else {
    document.title = '(*´∇｀*) 被你发现啦~ ';
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 1000);
  }
});
var appTarget = document.createElement('div');
appTarget.className = _index2.default.app;
document.body.appendChild(appTarget);

if ((0, _supportedBrowser2.default)()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(1903).default(appTarget);
} else {
  _browserModal2.default.setAppElement(appTarget);

  var WrappedBrowserModalComponent = (0, _appStateHoc2.default)(_browserModal2.default, true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  _reactDom2.default.render( /*#__PURE__*/_react2.default.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[741,0]]]);