"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../models/User"));

var _auth = _interopRequireDefault(require("../lib/auth"));

var router = _express.default.Router();

router.post('/signup', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var token;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('yes');
            console.log(req.body);

            if (!(!req.body.username || !req.body.name || !req.body.imgurl)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(522).json({
              msg: 'bad input'
            }));

          case 5:
            _context.next = 7;
            return _User.default.signup({
              username: req.body.username,
              name: req.body.name,
              imgurl: req.body.imgurl
            });

          case 7:
            token = _context.sent;

            if (token) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(500).json({
              msg: 'oops, somethings wrong'
            }));

          case 10:
            return _context.abrupt("return", res.status(200).json({
              token: token
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              msg: 'bad request'
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = res.status(200);
            _context2.next = 3;
            return _User.default.findAll();

          case 3:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", _context2.t0.json.call(_context2.t0, _context2.t1));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/login', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var token;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(!req.body.username || req.body.password !== '1111')) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(522).json({
              msg: 'bad request'
            }));

          case 3:
            _context3.next = 5;
            return _User.default.login({
              username: req.body.username,
              password: req.body.password
            });

          case 5:
            token = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              token: token
            }));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.status(522).json({
              msg: 'bad request'
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/me', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res, next) {
    var user;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _auth.default)(req.user);

          case 3:
            user = _context4.sent;

            if (!(!user || !user._id)) {
              _context4.next = 6;
              break;
            }

            throw new Error('not logged in');

          case 6:
            return _context4.abrupt("return", res.status(200).json(user));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(522).json({
              msg: 'not logged in'
            }));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}());
router.post('/edit', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res, next) {
    var thisUser, realData;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _auth.default)(req.user);

          case 3:
            thisUser = _context5.sent;

            if (!(!thisUser || !thisUser._id)) {
              _context5.next = 6;
              break;
            }

            throw new Error('anuthorized');

          case 6:
            if (req.body.data) {
              _context5.next = 8;
              break;
            }

            throw new Error('bad request');

          case 8:
            realData = {
              name: req.body.data.name,
              phoneNumber: req.body.data.phoneNumber,
              imgurl: req.body.data.imgurl
            };
            _context5.next = 11;
            return _User.default.findByIdAndUpdate(thisUser._id, realData);

          case 11:
            return _context5.abrupt("return", res.status(200).json({
              msg: 'ok'
            }));

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              msg: _context5.t0.message
            }));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;