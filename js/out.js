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
  }]);

  return Bar;
}();

var leftBar = exports.leftBar = new Bar(10, (_canvas.canvas.height - 100) / 2, 10, 100);
var rightBar = exports.rightBar = new Bar(_canvas.canvas.width - 20, (_canvas.canvas.height - 100) / 2, 10, 100);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(0);

var _ball = __webpack_require__(3);

var _bar = __webpack_require__(1);

var _mouseHandler = __webpack_require__(4);

document.addEventListener('mousemove', _mouseHandler.mouseMoveHandler);

function draw() {

  (0, _canvas.drawCanvas)();
  _ball.tennisBall.drawBall();
  _bar.leftBar.drawBar();
  _bar.rightBar.drawBar();
}

setInterval(draw, 10);

//ctx.clearRect(0, 0, canvas.width, canvas.height);

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

      this.ballX += this.dx;
      this.ballY += this.dy;

      if (this.ballX >= _canvas.canvas.width) {
        this.dx = -this.dx;
      } else if (this.ballX < 0) {
        this.dx = -this.dx;
      } else if (this.ballY >= _canvas.canvas.height) {
        this.dy = -this.dy;
      } else if (this.ballY < 0) {
        this.dy = -this.dy;
      }
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
exports.relativeY = undefined;
exports.mouseMoveHandler = mouseMoveHandler;

var _canvas = __webpack_require__(0);

var _bar = __webpack_require__(1);

var relativeY = exports.relativeY = void 0;

function mouseMoveHandler(event) {
  //method returns the size of an element and its position relative to the viewport
  //  let area = canvas.getBoundingClientRect();
  //  let root = document.documentElement;
  //  let mouseX = event.clientX;
  //  let mouseY = event.clientY;
  //  return {
  //    x: mouseX,
  //    y: mouseY
  //  };

  exports.relativeY = relativeY = event.clientY;
  if (relativeY > 0 + _bar.barHeight && relativeY < _canvas.canvas.height) {
    exports.relativeY = relativeY = relativeY;
  }
}
console.log(relativeY);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzM1NDFlN2IyZGEzYTc3ODk1NDQiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImxlZnRCYXIiLCJyaWdodEJhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3IiwiZHJhd0JhbGwiLCJkcmF3QmFyIiwic2V0SW50ZXJ2YWwiLCJCYWxsIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJkeCIsImR5IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwidGVubmlzQmFsbCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJyZWxhdGl2ZVkiLCJldmVudCIsImNsaWVudFkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtB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O0FBQ0QsT0FGSSxNQUdBLElBQUksS0FBS0YsS0FBTCxJQUFjLGVBQU9qQixNQUF6QixFQUFpQztBQUN0QyxhQUFLb0IsRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDQyxPQUZJLE1BR0EsSUFBSSxLQUFLSCxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDdkIsYUFBS0csRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDRDtBQUNGOzs7Ozs7QUFHSSxJQUFJTSxrQ0FBYSxJQUFJWCxJQUFKLENBQVMsZUFBT2hCLEtBQVAsR0FBZSxDQUF4QixFQUEyQixlQUFPQyxNQUFQLEdBQWdCLENBQTNDLEVBQThDLEVBQTlDLEVBQWtELENBQWxELEVBQXFELENBQUMsQ0FBdEQsQ0FBakIsQzs7Ozs7Ozs7Ozs7OztRQ2hDUzJCLGdCLEdBQUFBLGdCOztBQUxoQjs7QUFDQTs7QUFFTyxJQUFJQyxzQ0FBSjs7QUFFQSxTQUFTRCxnQkFBVCxDQUEwQkUsS0FBMUIsRUFBaUM7QUFDdEM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLFVBYlNELFNBYVQsZUFBWUMsTUFBTUMsT0FBbEI7QUFDQSxNQUFJRixZQUFZLGtCQUFaLElBQTZCQSxZQUFZLGVBQU81QixNQUFwRCxFQUE0RDtBQUMxRCxZQWZPNEIsU0FlUCxlQUFZQSxTQUFaO0FBQ0Q7QUFDRjtBQUNERyxRQUFRQyxHQUFSLENBQVlKLFNBQVosRSIsImZpbGUiOiIuL2pzL291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMzNTQxZTdiMmRhM2E3Nzg5NTQ0IiwiZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW5uaXNDYW52YXMnKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYW52YXMoKSB7ICBcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NhbnZhcy5qcyIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcblxuY2xhc3MgQmFyIHtcbiAgY29uc3RydWN0b3IoYmFyWCwgYmFyWSwgYmFyV2lkdGgsIGJhckhlaWdodCl7XG5cbiAgICB0aGlzLmJhclggPSBiYXJYO1xuICAgIHRoaXMuYmFyWSA9IGJhclk7XG4gICAgdGhpcy5iYXJIZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgdGhpcy5iYXJXaWR0aCA9IGJhcldpZHRoO1xuICB9XG4gIFxuICBkcmF3QmFyKCkge1xuICAgIGN0eC5yZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoLCB0aGlzLmJhckhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgbGVmdEJhciA9IG5ldyBCYXIoMTAsIChjYW52YXMuaGVpZ2h0IC0gMTAwKSAvIDIsIDEwLCAxMDApO1xuZXhwb3J0IGxldCByaWdodEJhciA9IG5ldyBCYXIoY2FudmFzLndpZHRoIC0gMjAsIChjYW52YXMuaGVpZ2h0IC0gMTAwKSAvIDIsIDEwLCAxMDApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Jhci5qcyIsImltcG9ydCB7ZHJhd0NhbnZhcywgY2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXJ9IGZyb20gJy4vYmFyJztcbmltcG9ydCB7bW91c2VNb3ZlSGFuZGxlcn0gZnJvbSAnLi9tb3VzZUhhbmRsZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcblxuZnVuY3Rpb24gZHJhdygpIHsgIFxuICBcbiAgZHJhd0NhbnZhcygpO1xuICB0ZW5uaXNCYWxsLmRyYXdCYWxsKCk7XG4gIGxlZnRCYXIuZHJhd0JhcigpO1xuICByaWdodEJhci5kcmF3QmFyKCk7XG4gIFxufSAgIFxuXG5zZXRJbnRlcnZhbChkcmF3LCAxMCk7XG5cbi8vY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcblxuXG5jbGFzcyBCYWxsIHtcbiAgY29uc3RydWN0b3IoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBkeCwgZHkpIHtcbiAgICBcbiAgICB0aGlzLmJhbGxYID0gYmFsbFg7XG4gICAgdGhpcy5iYWxsWSA9IGJhbGxZO1xuICAgIHRoaXMuYmFsbFJhZGl1cyA9IGJhbGxSYWRpdXM7XG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMuZHkgPSBkeTtcbiAgfVxuICBcbiAgZHJhd0JhbGwoKSB7ICAgIFxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmModGhpcy5iYWxsWCwgdGhpcy5iYWxsWSwgdGhpcy5iYWxsUmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguY2xvc2VQYXRoKCk7ICAgIFxuICAgIFxuICAgIHRoaXMuYmFsbFggKz0gdGhpcy5keFxuICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5keVxuICAgIFxuICAgIGlmICh0aGlzLmJhbGxYID49IGNhbnZhcy53aWR0aCkge1xuICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJhbGxYIDwgMCkge1xuICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJhbGxZID49IGNhbnZhcy5oZWlnaHQpIHtcbiAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgPCAwKSB7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBsZXQgdGVubmlzQmFsbCA9IG5ldyBCYWxsKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCAxMCwgNSwgLTIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsLmpzIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7YmFySGVpZ2h0LCBiYXJZfSBmcm9tICcuL2Jhcic7XG5cbmV4cG9ydCBsZXQgcmVsYXRpdmVZO1xuXG5leHBvcnQgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCkge1xuICAvL21ldGhvZCByZXR1cm5zIHRoZSBzaXplIG9mIGFuIGVsZW1lbnQgYW5kIGl0cyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcbi8vICBsZXQgYXJlYSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vICBsZXQgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbi8vICBsZXQgbW91c2VYID0gZXZlbnQuY2xpZW50WDtcbi8vICBsZXQgbW91c2VZID0gZXZlbnQuY2xpZW50WTtcbi8vICByZXR1cm4ge1xuLy8gICAgeDogbW91c2VYLFxuLy8gICAgeTogbW91c2VZXG4vLyAgfTtcbiAgXG4gIHJlbGF0aXZlWSA9IGV2ZW50LmNsaWVudFk7XG4gIGlmIChyZWxhdGl2ZVkgPiAwICsgYmFySGVpZ2h0ICYmIHJlbGF0aXZlWSA8IGNhbnZhcy5oZWlnaHQpIHtcbiAgICByZWxhdGl2ZVkgPSByZWxhdGl2ZVk7XG4gIH1cbn1cbmNvbnNvbGUubG9nKHJlbGF0aXZlWSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9