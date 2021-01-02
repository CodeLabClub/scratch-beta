var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[5],{

/***/ 2566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(9);

var _redux = __webpack_require__(75);

var _box = __webpack_require__(22);

var _box2 = _interopRequireDefault(_box);

var _gui = __webpack_require__(249);

var _gui2 = _interopRequireDefault(_gui);

var _hashParserHoc = __webpack_require__(268);

var _hashParserHoc2 = _interopRequireDefault(_hashParserHoc);

var _appStateHoc = __webpack_require__(165);

var _appStateHoc2 = _interopRequireDefault(_appStateHoc);

var _mode = __webpack_require__(167);

var _player = __webpack_require__(2567);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if ( true && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  // Warn before navigating away
  window.onbeforeunload = function () {
    return true;
  };
}

var Player = function Player(_ref) {
  var isPlayerOnly = _ref.isPlayerOnly,
      onSeeInside = _ref.onSeeInside,
      projectId = _ref.projectId;
  return /*#__PURE__*/_react2.default.createElement(_box2.default, {
    className: (0, _classnames2.default)(isPlayerOnly ? _player2.default.stageOnly : _player2.default.editor)
  }, isPlayerOnly && /*#__PURE__*/_react2.default.createElement("button", {
    onClick: onSeeInside
  }, 'See inside'), /*#__PURE__*/_react2.default.createElement(_gui2.default, {
    canEditTitle: true,
    enableCommunity: true,
    isPlayerOnly: isPlayerOnly,
    projectId: projectId
  }));
};

Player.propTypes = {
  isPlayerOnly: _propTypes2.default.bool,
  onSeeInside: _propTypes2.default.func,
  projectId: _propTypes2.default.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSeeInside: function onSeeInside() {
      return dispatch((0, _mode.setPlayer)(false));
    }
  };
};

var ConnectedPlayer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Player); // note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.

var WrappedPlayer = (0, _redux.compose)(_appStateHoc2.default, _hashParserHoc2.default)(ConnectedPlayer);
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);

_reactDom2.default.render( /*#__PURE__*/_react2.default.createElement(WrappedPlayer, {
  isPlayerOnly: true
}), appTarget);

/***/ }),

/***/ 2567:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2568);

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

/***/ 2568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_editor_wkTja {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.player_stage-only_3WHZN * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"stage-only": "player_stage-only_3WHZN",
	"stageOnly": "player_stage-only_3WHZN",
	"editor": "player_editor_wkTja"
};

/***/ })

},[[2566,0]]]);