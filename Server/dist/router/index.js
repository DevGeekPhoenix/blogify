"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blogRouter = _interopRequireDefault(require("./blogRouter"));

var _userRouter = _interopRequireDefault(require("./userRouter"));

var _default = function _default(app) {
  app.get('/', function (req, res, next) {
    res.send('<h1> hello world from blogtor </h1>');
  });
  app.use('/blog', _blogRouter.default);
  app.use('/user', _userRouter.default);
};

exports.default = _default;