/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawCanvas = drawCanvas;
var canvas = exports.canvas = document.getElementById('tennisCanvas');
var ctx = exports.ctx = canvas.getContext('2d');

function drawCanvas() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//how to center canvas?

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightBar = exports.leftBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

var _mouseHandler = __webpack_require__(4);

var _ball = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bar = function () {
  function Bar(barX, barY, barWidth, barHeight) {
    _classCallCheck(this, Bar);

    this.barX = barX;
    this.barY = barY;
    this.barHeight = barHeight;
    this.barWidth = barWidth;
  }

  _createClass(Bar, [{
    key: 'drawBar',
    value: function drawBar() {
      _canvas.ctx.rect(this.barX, this.barY, this.barWidth, this.barHeight);
      _canvas.ctx.fillStyle = '#fff';
      _canvas.ctx.fill();
    }
  }, {
    key: 'aiMovement',
    value: function aiMovement() {
      if (this.barY < _ball.tennisBall.ballY) {
        this.barY += 6;
      } else {
        this.barY -= 6;
      }
    }
  }]);

  return Bar;
}();

var leftBar = exports.leftBar = new Bar(10, _mouseHandler.positionY, 10, 100);
var rightBar = exports.rightBar = new Bar(_canvas.canvas.width - 20, (_canvas.canvas.height - 100) / 2, 10, 100);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(0);

var _ball = __webpack_require__(3);

var _bar = __webpack_require__(1);

function draw() {

  (0, _canvas.drawCanvas)();
  _ball.tennisBall.drawBall();
  _bar.leftBar.drawBar();
  _bar.rightBar.drawBar();
  _bar.rightBar.aiMovement();
}

setInterval(draw, 10);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tennisBall = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

var _bar = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(ballX, ballY, ballRadius, dx, dy) {
    _classCallCheck(this, Ball);

    this.ballX = ballX;
    this.ballY = ballY;
    this.ballRadius = ballRadius;
    this.dx = dx;
    this.dy = dy;
  }

  _createClass(Ball, [{
    key: 'drawBall',
    value: function drawBall() {
      _canvas.ctx.beginPath();
      _canvas.ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
      _canvas.ctx.fillStyle = '#fff';
      _canvas.ctx.closePath();

      //adding ball movement
      this.ballX += this.dx;
      this.ballY += this.dy;

      if (this.ballX >= _canvas.canvas.width) {
        //bouncing of the right bar
        if (this.ballY > _bar.rightBar.barY && this.ballY < _bar.rightBar.barY + _bar.rightBar.barHeight) {
          this.dx = -this.dx;
        } else {
          tennisBall.resetBall();
        }
        //      Ball.resetBall(); no ball and bar respawn
      } else if (this.ballX < 0) {
        //bouncing of the left bar
        if (this.ballY > _bar.leftBar.barY && this.ballY < _bar.leftBar.barY + _bar.leftBar.barHeight) {
          this.dx = -this.dx;
        } else {
          tennisBall.resetBall();
        }
        //      Ball.resetBall();
      }
      //boucing of the bottom
      else if (this.ballY + this.ballRadius >= _canvas.canvas.height) {
          this.dy = -this.dy;
        }
        //boucing of the top
        else if (this.ballY < 0 + this.ballRadius) {
            this.dy = -this.dy;
          }
    }
    //reseting ball position to the center after score and changing ball direction

  }, {
    key: 'resetBall',
    value: function resetBall() {
      this.dx = -this.dx;
      this.ballX = _canvas.canvas.width / 2;
      this.ballY = _canvas.canvas.height / 2;
    }
  }]);

  return Ball;
}();

var tennisBall = exports.tennisBall = new Ball(_canvas.canvas.width / 2, _canvas.canvas.height / 2, 10, 5, -2);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.positionY = undefined;

var _canvas = __webpack_require__(0);

var _bar = __webpack_require__(1);

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

var positionY = exports.positionY = 200;

_canvas.canvas.addEventListener('mousemove', function (evt) {
  var mousePos = getMousePos(_canvas.canvas, evt);
  exports.positionY = positionY = mousePos.y;
  _bar.leftBar.barY = positionY; //can i do Bar?
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzUzZWE3NTYwMTQ4MWYzMjZkMTQiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImJhbGxZIiwibGVmdEJhciIsInJpZ2h0QmFyIiwiZHJhdyIsImRyYXdCYWxsIiwiZHJhd0JhciIsImFpTW92ZW1lbnQiLCJzZXRJbnRlcnZhbCIsIkJhbGwiLCJiYWxsWCIsImJhbGxSYWRpdXMiLCJkeCIsImR5IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwidGVubmlzQmFsbCIsInJlc2V0QmFsbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VQb3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztB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R0FBZ0IsQ0FBM0MsRUFBOEMsRUFBOUMsRUFBa0QsQ0FBbEQsRUFBcUQsQ0FBQyxDQUF0RCxDQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQzdEUDs7QUFDQTs7QUFFQSxTQUFTNEIsV0FBVCxDQUFxQnBDLE1BQXJCLEVBQTZCcUMsR0FBN0IsRUFBa0M7QUFDMUIsTUFBSXZCLE9BQU9kLE9BQU9zQyxxQkFBUCxFQUFYO0FBQ0EsU0FBTztBQUNMQyxPQUFHRixJQUFJRyxPQUFKLEdBQWMxQixLQUFLMkIsSUFEakI7QUFFTEMsT0FBR0wsSUFBSU0sT0FBSixHQUFjN0IsS0FBSzhCO0FBRmpCLEdBQVA7QUFJRDs7QUFFQSxJQUFJQyxnQ0FBWSxHQUFoQjs7QUFFUCxlQUFPQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFTVCxHQUFULEVBQWM7QUFDM0MsTUFBSVUsV0FBV1gsNEJBQW9CQyxHQUFwQixDQUFmO0FBQ0EsVUFKR1EsU0FJSCxlQUFZRSxTQUFTTCxDQUFyQjtBQUNBLGVBQVEvQixJQUFSLEdBQWVrQyxTQUFmLENBSDJDLENBR2xCO0FBQzFCLENBSlAsRSIsImZpbGUiOiIuL2pzL291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1M2VhNzU2MDE0ODFmMzI2ZDE0IiwiZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW5uaXNDYW52YXMnKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYW52YXMoKSB7ICBcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cbi8vaG93IHRvIGNlbnRlciBjYW52YXM/XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2FudmFzLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtwb3NpdGlvbll9IGZyb20gJy4vbW91c2VIYW5kbGVyJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsJztcblxuY2xhc3MgQmFyIHtcbiAgY29uc3RydWN0b3IoYmFyWCwgYmFyWSwgYmFyV2lkdGgsIGJhckhlaWdodCl7XG5cbiAgICB0aGlzLmJhclggPSBiYXJYO1xuICAgIHRoaXMuYmFyWSA9IGJhclk7XG4gICAgdGhpcy5iYXJIZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgdGhpcy5iYXJXaWR0aCA9IGJhcldpZHRoO1xuICB9XG4gIFxuICBkcmF3QmFyKCkge1xuICAgIGN0eC5yZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoLCB0aGlzLmJhckhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG4gIFxuICBhaU1vdmVtZW50KCkge1xuICAgIGlmICh0aGlzLmJhclkgPCB0ZW5uaXNCYWxsLmJhbGxZKSB7XG4gICAgICB0aGlzLmJhclkgKz0gNjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmJhclkgLT0gNjtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgbGVmdEJhciA9IG5ldyBCYXIoMTAsIHBvc2l0aW9uWSwgMTAsIDEwMCk7XG5leHBvcnQgbGV0IHJpZ2h0QmFyID0gbmV3IEJhcihjYW52YXMud2lkdGggLSAyMCwgKGNhbnZhcy5oZWlnaHQgLSAxMDApIC8gMiwgMTAsIDEwMCk7XG5cbiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYXIuanMiLCJpbXBvcnQge2RyYXdDYW52YXMsIGNhbnZhcywgY3R4fSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge3Rlbm5pc0JhbGx9IGZyb20gJy4vYmFsbCc7XG5pbXBvcnQge2xlZnRCYXIsIHJpZ2h0QmFyLCBiYXJIZWlnaHR9IGZyb20gJy4vYmFyJztcblxuZnVuY3Rpb24gZHJhdygpIHsgIFxuICBcbiAgZHJhd0NhbnZhcygpO1xuICB0ZW5uaXNCYWxsLmRyYXdCYWxsKCk7XG4gIGxlZnRCYXIuZHJhd0JhcigpO1xuICByaWdodEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmFpTW92ZW1lbnQoKTtcbiAgXG59ICAgXG5cbnNldEludGVydmFsKGRyYXcsIDEwKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5cbmNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3RvcihiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGR4LCBkeSkge1xuICAgIFxuICAgIHRoaXMuYmFsbFggPSBiYWxsWDtcbiAgICB0aGlzLmJhbGxZID0gYmFsbFk7XG4gICAgdGhpcy5iYWxsUmFkaXVzID0gYmFsbFJhZGl1cztcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IGR5O1xuICB9XG4gIFxuICBkcmF3QmFsbCgpIHsgICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYyh0aGlzLmJhbGxYLCB0aGlzLmJhbGxZLCB0aGlzLmJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgXG4gICAgLy9hZGRpbmcgYmFsbCBtb3ZlbWVudFxuICAgIHRoaXMuYmFsbFggKz0gdGhpcy5keFxuICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5keSAgICBcbiAgICBcbiAgICBpZiAodGhpcy5iYWxsWCA+PSBjYW52YXMud2lkdGgpIHtcbiAgICAgIC8vYm91bmNpbmcgb2YgdGhlIHJpZ2h0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiByaWdodEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCByaWdodEJhci5iYXJZICsgcmlnaHRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICBcbiAgICAgIH0gICAgICBcbi8vICAgICAgQmFsbC5yZXNldEJhbGwoKTsgbm8gYmFsbCBhbmQgYmFyIHJlc3Bhd25cbiAgICB9ICAgIFxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFggPCAwKSB7XG4gICAgICAvL2JvdW5jaW5nIG9mIHRoZSBsZWZ0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiBsZWZ0QmFyLmJhclkgJiYgdGhpcy5iYWxsWSA8IGxlZnRCYXIuYmFyWSArIGxlZnRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7ICBcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICBcbiAgICAgIH0gIFxuLy8gICAgICBCYWxsLnJlc2V0QmFsbCgpO1xuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIGJvdHRvbVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxSYWRpdXMgPj0gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gICAgLy9ib3VjaW5nIG9mIHRoZSB0b3BcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxZIDwgMCArIHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgfVxuICAvL3Jlc2V0aW5nIGJhbGwgcG9zaXRpb24gdG8gdGhlIGNlbnRlciBhZnRlciBzY29yZSBhbmQgY2hhbmdpbmcgYmFsbCBkaXJlY3Rpb25cbiAgcmVzZXRCYWxsKCkge1xuICAgIHRoaXMuZHggPSAtIHRoaXMuZHg7XG4gICAgdGhpcy5iYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgdGVubmlzQmFsbCA9IG5ldyBCYWxsKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCAxMCwgNSwgLTIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsLmpzIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXJ9IGZyb20gJy4vYmFyJztcblxuZnVuY3Rpb24gZ2V0TW91c2VQb3MoY2FudmFzLCBldnQpIHtcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuXG5leHBvcnQgbGV0IHBvc2l0aW9uWSA9IDIwMDtcbiAgICAgIFxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAgIHBvc2l0aW9uWSA9IG1vdXNlUG9zLnk7XG4gICAgICAgIGxlZnRCYXIuYmFyWSA9IHBvc2l0aW9uWTsvL2NhbiBpIGRvIEJhcj9cbiAgICAgIH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vdXNlSGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=