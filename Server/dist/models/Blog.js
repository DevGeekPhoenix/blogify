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

var blogDirectoy = _path.default.join(process.cwd(), '/src/db/blog.txt');

var BlogSchema = /*#__PURE__*/function () {
  function BlogSchema() {
    (0, _classCallCheck2.default)(this, BlogSchema);
  }

  (0, _createClass2.default)(BlogSchema, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var title, content, creatorId, imgurl, data, str;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = _ref.title, content = _ref.content, creatorId = _ref.creatorId, imgurl = _ref.imgurl;
                _context.prev = 1;

                if (!(!title || !content || !creatorId || !imgurl)) {
                  _context.next = 4;
                  break;
                }

                throw new Error('bad input');

              case 4:
                data = JSON.stringify({
                  title: title,
                  content: content,
                  creatorId: creatorId,
                  imgurl: imgurl,
                  _id: (0, _lib.UID)()
                });
                str = "".concat(data, ",");

                if (!(0, _fs.existsSync)(blogDirectoy)) {
                  (0, _fs.mkdirSync)(blogDirectoy);
                }

                (0, _fs.appendFileSync)(blogDirectoy, str, "utf8");
                return _context.abrupt("return", {
                  title: title,
                  data: data,
                  creatorId: creatorId
                });

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
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
                x = (0, _lib.removeLastCharacter)((0, _fs.readFileSync)(blogDirectoy));
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
    key: "getBlogsByUserID",
    value: function () {
      var _getBlogsByUserID = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.findAll();

              case 3:
                return _context4.abrupt("return", _context4.sent.filter(function (_ref2) {
                  var creatorId = _ref2.creatorId;
                  return creatorId == _id;
                }));

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      function getBlogsByUserID(_x3) {
        return _getBlogsByUserID.apply(this, arguments);
      }

      return getBlogsByUserID;
    }()
  }, {
    key: "findByIdAndUpdate",
    value: function () {
      var _findByIdAndUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(_id, data) {
        var all, p, s;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.findAll();

              case 3:
                all = _context5.sent;
                p = all.findIndex(function (item) {
                  return item._id == _id;
                });

                if (!(p < 0)) {
                  _context5.next = 7;
                  break;
                }

                throw new Error('bad request');

              case 7:
                Object.entries(data).forEach(function (_ref3) {
                  var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  return all[p][key] = value;
                });
                s = (0, _lib.removeFirstCharacter)((0, _lib.removeLastCharacter)(JSON.stringify(all)));
                (0, _fs.writeFileSync)(blogDirectoy, "".concat(s, ","), "utf8");
                _context5.next = 15;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));

      function findByIdAndUpdate(_x4, _x5) {
        return _findByIdAndUpdate.apply(this, arguments);
      }

      return findByIdAndUpdate;
    }()
  }]);
  return BlogSchema;
}();

var Blog = new BlogSchema();
var _default = Blog;
exports.default = _default;