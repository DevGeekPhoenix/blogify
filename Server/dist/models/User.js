"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

var _lib = require("../lib");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

_dotenv.default.config();

var userDirectory = _path.default.join(process.cwd(), '/src/db/user.txt');

var UserSchema = /*#__PURE__*/function () {
  function UserSchema() {
    (0, _classCallCheck2.default)(this, UserSchema);
  }

  (0, _createClass2.default)(UserSchema, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var name, phoneNumber, imgurl, dda, data, str;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name, phoneNumber = _ref.phoneNumber, imgurl = _ref.imgurl;
                _context.prev = 1;

                if (!(!name || !phoneNumber || !imgurl)) {
                  _context.next = 4;
                  break;
                }

                throw new Error('bad input');

              case 4:
                dda = {
                  name: name,
                  phoneNumber: phoneNumber,
                  imgurl: imgurl,
                  _id: (0, _lib.UID)()
                };
                data = JSON.stringify(dda);
                str = "".concat(data, ",");

                if (!(0, _fs.existsSync)(userDirectory)) {
                  (0, _fs.mkdirSync)(userDirectory);
                }

                (0, _fs.appendFileSync)(userDirectory, str, "utf8");
                return _context.abrupt("return", dda);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var x, y;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                x = (0, _lib.removeLastCharacter)((0, _fs.readFileSync)(userDirectory));
                y = JSON.parse("[".concat(x, "]"));
                return _context2.abrupt("return", y);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.findAll();

              case 3:
                return _context3.abrupt("return", _context3.sent.find(function (item) {
                  return item._id == _id;
                }));

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function findById(_x2) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "signup",
    value: function () {
      var _signup = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref2) {
        var username, name, imgurl, thisUser, data, str;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                username = _ref2.username, name = _ref2.name, imgurl = _ref2.imgurl;
                _context4.prev = 1;

                if (!(!username || !name || !imgurl)) {
                  _context4.next = 4;
                  break;
                }

                throw new Error('bad request');

              case 4:
                thisUser = {
                  username: username,
                  name: name,
                  imgurl: imgurl,
                  _id: (0, _lib.UID)()
                };
                data = JSON.stringify(thisUser);
                str = "".concat(data, ",");

                if (!(0, _fs.existsSync)(userDirectory)) {
                  (0, _fs.mkdirSync)(userDirectory);
                }

                (0, _fs.appendFileSync)(userDirectory, str, "utf8");
                return _context4.abrupt("return", this.createToken(thisUser._id));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](1);
                throw _context4.t0;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 12]]);
      }));

      function signup(_x3) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }, {
    key: "createToken",
    value: function createToken(_id) {
      return _jsonwebtoken.default.sign({
        _id: _id
      }, 'SECRET');
    }
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(_ref3) {
        var username, password, thisUser;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                username = _ref3.username, password = _ref3.password;
                _context5.prev = 1;
                _context5.next = 4;
                return this.findAll();

              case 4:
                thisUser = _context5.sent.find(function (user) {
                  return user.username === username;
                });

                if (!(!thisUser || !thisUser._id)) {
                  _context5.next = 7;
                  break;
                }

                throw new Error('bad request');

              case 7:
                return _context5.abrupt("return", this.createToken(thisUser._id));

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](1);
                throw _context5.t0;

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 10]]);
      }));

      function login(_x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "findByIdAndUpdate",
    value: function () {
      var _findByIdAndUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(_id, data) {
        var all, p, s;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.findAll();

              case 3:
                all = _context6.sent;
                p = all.findIndex(function (item) {
                  return item._id == _id;
                });

                if (!(p < 0)) {
                  _context6.next = 7;
                  break;
                }

                throw new Error('bad request');

              case 7:
                Object.entries(data).forEach(function (_ref4) {
                  var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
                      key = _ref5[0],
                      value = _ref5[1];

                  return all[p][key] = value;
                });
                s = (0, _lib.removeFirstCharacter)((0, _lib.removeLastCharacter)(JSON.stringify(all)));
                (0, _fs.writeFileSync)(userDirectory, "".concat(s, ","), "utf8");
                _context6.next = 15;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 12]]);
      }));

      function findByIdAndUpdate(_x5, _x6) {
        return _findByIdAndUpdate.apply(this, arguments);
      }

      return findByIdAndUpdate;
    }()
  }]);
  return UserSchema;
}();

var User = new UserSchema();
var _default = User;
exports.default = _default;