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
exports.leftBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

var _mouseHandler = __webpack_require__(4);

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

var leftBar = exports.leftBar = new Bar(10, _mouseHandler.positionY, 10, 100);
//export let rightBar = new Bar(canvas.width - 20, (canvas.height - 100) / 2, 10, 100);

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
  _bar.leftBar.barY = positionY;
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzU4OTg3NzMyZjU2NWNmNDJkZDciLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImxlZnRCYXIiLCJkcmF3IiwiZHJhd0JhbGwiLCJkcmF3QmFyIiwic2V0SW50ZXJ2YWwiLCJCYWxsIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJkeCIsImR5IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwidGVubmlzQmFsbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VQb3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJC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QUFoQjtBQUNEO0FBQ0Y7Ozs7OztBQUdJLElBQUlNLGtDQUFhLElBQUlYLElBQUosQ0FBUyxlQUFPZCxLQUFQLEdBQWUsQ0FBeEIsRUFBMkIsZUFBT0MsTUFBUCxHQUFnQixDQUEzQyxFQUE4QyxFQUE5QyxFQUFrRCxDQUFsRCxFQUFxRCxDQUFDLENBQXRELENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDckNQOztBQUNBOztBQUVBLFNBQVN5QixXQUFULENBQXFCakMsTUFBckIsRUFBNkJrQyxHQUE3QixFQUFrQztBQUMxQixNQUFJcEIsT0FBT2QsT0FBT21DLHFCQUFQLEVBQVg7QUFDQSxTQUFPO0FBQ0xDLE9BQUdGLElBQUlHLE9BQUosR0FBY3ZCLEtBQUt3QixJQURqQjtBQUVMQyxPQUFHTCxJQUFJTSxPQUFKLEdBQWMxQixLQUFLMkI7QUFGakIsR0FBUDtBQUlEO0FBQ0EsSUFBSUMsZ0NBQVksR0FBaEI7QUFDRCxlQUFPQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFTVCxHQUFULEVBQWM7QUFDakQsTUFBSVUsV0FBV1gsNEJBQW9CQyxHQUFwQixDQUFmO0FBQ0EsVUFIR1EsU0FHSCxlQUFZRSxTQUFTTCxDQUFyQjtBQUNBLGVBQVE1QixJQUFSLEdBQWUrQixTQUFmO0FBQ0QsQ0FKRCxFIiwiZmlsZSI6Ii4vanMvb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzU4OTg3NzMyZjU2NWNmNDJkZDciLCJleHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlbm5pc0NhbnZhcycpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHsgIFxuICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2FudmFzLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtwb3NpdGlvbll9IGZyb20gJy4vbW91c2VIYW5kbGVyJztcblxuY2xhc3MgQmFyIHtcbiAgY29uc3RydWN0b3IoYmFyWCwgYmFyWSwgYmFyV2lkdGgsIGJhckhlaWdodCl7XG5cbiAgICB0aGlzLmJhclggPSBiYXJYO1xuICAgIHRoaXMuYmFyWSA9IGJhclk7XG4gICAgdGhpcy5iYXJIZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgdGhpcy5iYXJXaWR0aCA9IGJhcldpZHRoO1xuICB9XG4gIFxuICBkcmF3QmFyKCkge1xuICAgIGN0eC5yZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoLCB0aGlzLmJhckhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5leHBvcnQgbGV0IGxlZnRCYXIgPSBuZXcgQmFyKDEwLCBwb3NpdGlvblksIDEwLCAxMDApO1xuLy9leHBvcnQgbGV0IHJpZ2h0QmFyID0gbmV3IEJhcihjYW52YXMud2lkdGggLSAyMCwgKGNhbnZhcy5oZWlnaHQgLSAxMDApIC8gMiwgMTAsIDEwMCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Jhci5qcyIsImltcG9ydCB7ZHJhd0NhbnZhcywgY2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXIsIGJhckhlaWdodH0gZnJvbSAnLi9iYXInO1xuXG5mdW5jdGlvbiBkcmF3KCkgeyAgXG4gIFxuICBkcmF3Q2FudmFzKCk7XG4gIHRlbm5pc0JhbGwuZHJhd0JhbGwoKTtcbiAgbGVmdEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmRyYXdCYXIoKTtcbiAgXG59ICAgXG5cbnNldEludGVydmFsKGRyYXcsIDEwKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuXG5cbmNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3RvcihiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGR4LCBkeSkge1xuICAgIFxuICAgIHRoaXMuYmFsbFggPSBiYWxsWDtcbiAgICB0aGlzLmJhbGxZID0gYmFsbFk7XG4gICAgdGhpcy5iYWxsUmFkaXVzID0gYmFsbFJhZGl1cztcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IGR5O1xuICB9XG4gIFxuICBkcmF3QmFsbCgpIHsgICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYyh0aGlzLmJhbGxYLCB0aGlzLmJhbGxZLCB0aGlzLmJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgICAgXG4gICAgXG4gICAgdGhpcy5iYWxsWCArPSB0aGlzLmR4XG4gICAgdGhpcy5iYWxsWSArPSB0aGlzLmR5XG4gICAgXG4gICAgaWYgKHRoaXMuYmFsbFggPj0gY2FudmFzLndpZHRoKSB7XG4gICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFggPCAwKSB7XG4gICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgPj0gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5iYWxsWSA8IDApIHtcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGxldCB0ZW5uaXNCYWxsID0gbmV3IEJhbGwoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDEwLCA1LCAtMik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2JhbGwuanMiLCJpbXBvcnQge2NhbnZhc30gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyfSBmcm9tICcuL2Jhcic7XG5cbmZ1bmN0aW9uIGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XG4gICAgICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cbmV4cG9ydCBsZXQgcG9zaXRpb25ZID0gMjAwO1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAgIHBvc2l0aW9uWSA9IG1vdXNlUG9zLnk7XG4gICAgICAgIGxlZnRCYXIuYmFyWSA9IHBvc2l0aW9uWTtcbiAgICAgIH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vdXNlSGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=