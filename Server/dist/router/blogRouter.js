"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _Blog = _interopRequireDefault(require("../models/Blog"));

var _auth = _interopRequireDefault(require("../lib/auth"));

var _User = _interopRequireDefault(require("../models/User"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var router = _express.default.Router();

router.post("/write", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res, next) {
    var thisUser, thisBlog;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(!req.body.title || !req.body.content || !req.body.imgurl)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(522).json({
              msg: "bad request"
            }));

          case 3:
            _context.next = 5;
            return (0, _auth.default)(req.user);

          case 5:
            thisUser = _context.sent;

            if (!(!thisUser || !thisUser._id)) {
              _context.next = 8;
              break;
            }

            throw new Error("not logged in");

          case 8:
            _context.next = 10;
            return _Blog.default.create(_objectSpread(_objectSpread({}, req.body), {}, {
              creatorId: thisUser._id
            }));

          case 10:
            thisBlog = _context.sent;
            res.status(200).json({
              msg: "ok",
              _id: thisBlog._id
            });
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              msg: _context.t0.message
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var users, obj, blogs;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User.default.findAll();

          case 2:
            users = _context2.sent;
            obj = {};
            users.forEach(function (user) {
              return obj[user._id] = user;
            });
            _context2.next = 7;
            return _Blog.default.findAll();

          case 7:
            blogs = _context2.sent;
            blogs.forEach(function (blog) {
              return blog.creator = obj[blog.creatorId];
            });
            res.json(blogs);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
router.get("/:_id", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res, next) {
    var thisBlog, thisUser;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Blog.default.findById(req.params._id);

          case 2:
            thisBlog = _context3.sent;

            if (thisBlog) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(500).json({
              msg: "bad request"
            }));

          case 5:
            _context3.next = 7;
            return _User.default.findById(thisBlog.creatorId);

          case 7:
            thisUser = _context3.sent;
            thisBlog.creator = thisUser;
            return _context3.abrupt("return", res.json(thisBlog));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
router.post("/my-blogs", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res, next) {
    var thisUser;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log("what?");
            _context4.prev = 1;
            console.log("req.user", req.user);
            _context4.next = 5;
            return (0, _auth.default)(req.user);

          case 5:
            thisUser = _context4.sent;
            console.log(thisUser);

            if (!(!thisUser || !thisUser._id)) {
              _context4.next = 9;
              break;
            }

            throw new Error("unathorized");

          case 9:
            _context4.t0 = res;
            _context4.next = 12;
            return _Blog.default.getBlogsByUserID(thisUser._id);

          case 12:
            _context4.t1 = _context4.sent;
            return _context4.abrupt("return", _context4.t0.json.call(_context4.t0, _context4.t1));

          case 16:
            _context4.prev = 16;
            _context4.t2 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(500).json({
              msg: _context4.t2.message
            }));

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 16]]);
  }));

  return function (_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}());
router.post("/by-user", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res, next) {
    var thisUser;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _User.default.findById(req.body._id);

          case 3:
            thisUser = _context5.sent;

            if (!(!thisUser || !thisUser._id)) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(500).json({
              msg: "bad request"
            }));

          case 6:
            _context5.t0 = res;
            _context5.next = 9;
            return _Blog.default.getBlogsByUserID(thisUser._id);

          case 9:
            _context5.t1 = _context5.sent;
            return _context5.abrupt("return", _context5.t0.json.call(_context5.t0, _context5.t1));

          case 13:
            _context5.prev = 13;
            _context5.t2 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              msg: _context5.t2.message
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function (_x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}());
router.post("/edit", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(req, res, next) {
    var realData, thisUser, thisBlog;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            if (!(!req.body.blogId || !req.body.data)) {
              _context6.next = 3;
              break;
            }

            throw new Error("bad request");

          case 3:
            realData = {
              title: req.body.data.title,
              content: req.body.data.content,
              imgurl: req.body.data.imgurl
            };
            _context6.next = 6;
            return (0, _auth.default)(req.user);

          case 6:
            thisUser = _context6.sent;
            _context6.next = 9;
            return _Blog.default.findById(req.body.blogId);

          case 9:
            thisBlog = _context6.sent;

            if (!(thisBlog.creatorId !== thisUser._id)) {
              _context6.next = 12;
              break;
            }

            throw new Error("unathorized");

          case 12:
            _context6.next = 14;
            return _Blog.default.findByIdAndUpdate(thisBlog._id, realData);

          case 14:
            return _context6.abrupt("return", res.status(200).json({
              msg: "ok"
            }));

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).json({
              msg: _context6.t0.message
            }));

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 17]]);
  }));

  return function (_x15, _x16, _x17) {
    return _ref6.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;