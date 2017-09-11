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
  _bar.rightBar.barY = positionY; //can i do Bar?
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODMzYzVlNjZjZTVlMzU5YmI5ZTIiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImxlZnRCYXIiLCJyaWdodEJhciIsImRyYXciLCJkcmF3QmFsbCIsImRyYXdCYXIiLCJzZXRJbnRlcnZhbCIsIkJhbGwiLCJiYWxsWCIsImJhbGxZIiwiYmFsbFJhZGl1cyIsImR4IiwiZHkiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbG9zZVBhdGgiLCJ0ZW5uaXNCYWxsIiwicmVzZXRCYWxsIiwiZ2V0TW91c2VQb3MiLCJldnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsInBvc2l0aW9uWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZVBvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFF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QUFQLEVBQVg7QUFDQSxTQUFPO0FBQ0xDLE9BQUdGLElBQUlHLE9BQUosR0FBY3pCLEtBQUswQixJQURqQjtBQUVMQyxPQUFHTCxJQUFJTSxPQUFKLEdBQWM1QixLQUFLNkI7QUFGakIsR0FBUDtBQUlEOztBQUVBLElBQUlDLGdDQUFZLEdBQWhCOztBQUVQLGVBQU9DLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLFVBQVNULEdBQVQsRUFBYztBQUMzQyxNQUFJVSxXQUFXWCw0QkFBb0JDLEdBQXBCLENBQWY7QUFDQSxVQUpHUSxTQUlILGVBQVlFLFNBQVNMLENBQXJCO0FBQ0EsZ0JBQVM5QixJQUFULEdBQWdCaUMsU0FBaEIsQ0FIMkMsQ0FHakI7QUFDM0IsQ0FKUCxFIiwiZmlsZSI6Ii4vanMvb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODMzYzVlNjZjZTVlMzU5YmI5ZTIiLCJleHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlbm5pc0NhbnZhcycpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHsgIFxuICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuLy9ob3cgdG8gY2VudGVyIGNhbnZhcz9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jYW52YXMuanMiLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge3Bvc2l0aW9uWX0gZnJvbSAnLi9tb3VzZUhhbmRsZXInO1xuXG5jbGFzcyBCYXIge1xuICBjb25zdHJ1Y3RvcihiYXJYLCBiYXJZLCBiYXJXaWR0aCwgYmFySGVpZ2h0KXtcblxuICAgIHRoaXMuYmFyWCA9IGJhclg7XG4gICAgdGhpcy5iYXJZID0gYmFyWTtcbiAgICB0aGlzLmJhckhlaWdodCA9IGJhckhlaWdodDtcbiAgICB0aGlzLmJhcldpZHRoID0gYmFyV2lkdGg7XG4gIH1cbiAgXG4gIGRyYXdCYXIoKSB7XG4gICAgY3R4LnJlY3QodGhpcy5iYXJYLCB0aGlzLmJhclksIHRoaXMuYmFyV2lkdGgsIHRoaXMuYmFySGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cbmV4cG9ydCBsZXQgbGVmdEJhciA9IG5ldyBCYXIoMTAsIHBvc2l0aW9uWSwgMTAsIDEwMCk7XG5leHBvcnQgbGV0IHJpZ2h0QmFyID0gbmV3IEJhcihjYW52YXMud2lkdGggLSAyMCwgKGNhbnZhcy5oZWlnaHQgLSAxMDApIC8gMiwgMTAsIDEwMCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Jhci5qcyIsImltcG9ydCB7ZHJhd0NhbnZhcywgY2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXIsIGJhckhlaWdodH0gZnJvbSAnLi9iYXInO1xuXG5mdW5jdGlvbiBkcmF3KCkgeyAgXG4gIFxuICBkcmF3Q2FudmFzKCk7XG4gIHRlbm5pc0JhbGwuZHJhd0JhbGwoKTtcbiAgbGVmdEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmRyYXdCYXIoKTtcbiAgXG59ICAgXG5cbnNldEludGVydmFsKGRyYXcsIDEwKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5cbmNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3RvcihiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGR4LCBkeSkge1xuICAgIFxuICAgIHRoaXMuYmFsbFggPSBiYWxsWDtcbiAgICB0aGlzLmJhbGxZID0gYmFsbFk7XG4gICAgdGhpcy5iYWxsUmFkaXVzID0gYmFsbFJhZGl1cztcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IGR5O1xuICB9XG4gIFxuICBkcmF3QmFsbCgpIHsgICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYyh0aGlzLmJhbGxYLCB0aGlzLmJhbGxZLCB0aGlzLmJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgXG4gICAgLy9hZGRpbmcgYmFsbCBtb3ZlbWVudFxuICAgIHRoaXMuYmFsbFggKz0gdGhpcy5keFxuICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5keSAgICBcbiAgICBcbiAgICBpZiAodGhpcy5iYWxsWCA+PSBjYW52YXMud2lkdGgpIHtcbiAgICAgIC8vYm91bmNpbmcgb2YgdGhlIHJpZ2h0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiByaWdodEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCByaWdodEJhci5iYXJZICsgcmlnaHRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICBcbiAgICAgIH0gICAgICBcbi8vICAgICAgQmFsbC5yZXNldEJhbGwoKTsgbm8gYmFsbCBhbmQgYmFyIHJlc3Bhd25cbiAgICB9ICAgIFxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFggPCAwKSB7XG4gICAgICAvL2JvdW5jaW5nIG9mIHRoZSBsZWZ0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiBsZWZ0QmFyLmJhclkgJiYgdGhpcy5iYWxsWSA8IGxlZnRCYXIuYmFyWSArIGxlZnRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7ICBcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICBcbiAgICAgIH0gIFxuLy8gICAgICBCYWxsLnJlc2V0QmFsbCgpO1xuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIGJvdHRvbVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxSYWRpdXMgPj0gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gICAgLy9ib3VjaW5nIG9mIHRoZSB0b3BcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxZIDwgMCArIHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgfVxuICAvL3Jlc2V0aW5nIGJhbGwgcG9zaXRpb24gdG8gdGhlIGNlbnRlciBhZnRlciBzY29yZSBhbmQgY2hhbmdpbmcgYmFsbCBkaXJlY3Rpb25cbiAgcmVzZXRCYWxsKCkge1xuICAgIHRoaXMuZHggPSAtIHRoaXMuZHg7XG4gICAgdGhpcy5iYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgdGVubmlzQmFsbCA9IG5ldyBCYWxsKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCAxMCwgNSwgLTIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsLmpzIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXJ9IGZyb20gJy4vYmFyJztcblxuZnVuY3Rpb24gZ2V0TW91c2VQb3MoY2FudmFzLCBldnQpIHtcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuXG5leHBvcnQgbGV0IHBvc2l0aW9uWSA9IDIwMDtcbiAgICAgIFxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAgIHBvc2l0aW9uWSA9IG1vdXNlUG9zLnk7XG4gICAgICAgIHJpZ2h0QmFyLmJhclkgPSBwb3NpdGlvblk7Ly9jYW4gaSBkbyBCYXI/XG4gICAgICB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9