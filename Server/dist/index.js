"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeToken = decodeToken;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _router = _interopRequireDefault(require("./router"));

var _middlewares = _interopRequireDefault(require("./lib/middlewares"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function decodeToken(_x) {
  return _decodeToken.apply(this, arguments);
}

function _decodeToken() {
  _decodeToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(token) {
    var arr;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arr = token.split(' ');
            _context2.prev = 1;

            if (!(arr[0] === 'ut')) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", _jsonwebtoken.default.verify(arr[1], 'SECRET'));

          case 4:
            throw new Error('Please Re-Sign In');

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            throw _context2.t0;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return _decodeToken.apply(this, arguments);
}

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var token, user;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers.auth;

            if (!(token != null)) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return decodeToken(token);

          case 5:
            user = _context.sent;
            req.user = user;
            _context.next = 10;
            break;

          case 9:
            req.user = null;

          case 10:
            return _context.abrupt("return", next());

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            req.user = null;
            return _context.abrupt("return", next());

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function (_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
app.use(function (req, res, next) {
  console.log(req.user);
  console.log();
  next();
});
(0, _middlewares.default)(app);
(0, _router.default)(app);
app.listen(4000, function () {
  return console.log("app is ready on port 4000");
});