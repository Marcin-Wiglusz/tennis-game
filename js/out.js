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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
exports.drawNet = drawNet;
var canvas = exports.canvas = document.getElementById('tennisCanvas');
var ctx = exports.ctx = canvas.getContext('2d');

function drawCanvas() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //draw net
}
function drawNet() {
  for (var i = 0; i < canvas.height; i += 30) {
    ctx.fillRect(canvas.width / 2 - 1, i, 2, 20);
  }
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

var _ball = __webpack_require__(2);

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
      if (this.barY + this.barHeight / 2 < _ball.tennisBall.ballY) {
        this.barY += 2;
      } else {
        this.barY -= 2;
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tennisBall = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

var _bar = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var playerScore = 0;
var aiScore = 0;

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
          playerScore++;
        }
        //      Ball.resetBall(); no ball and bar respawn
      } else if (this.ballX < 0) {
        //bouncing of the left bar
        if (this.ballY > _bar.leftBar.barY && this.ballY < _bar.leftBar.barY + _bar.leftBar.barHeight) {
          this.dx = -this.dx;
        } else {
          tennisBall.resetBall();
          aiScore++;
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

    //drawing score

  }, {
    key: 'score',
    value: function score() {
      _canvas.ctx.font = '30px Courier New';
      _canvas.ctx.fillText(playerScore, 100, 100);
      _canvas.ctx.fillText(aiScore, _canvas.canvas.width - 100, 100);
    }
  }]);

  return Ball;
}();

var tennisBall = exports.tennisBall = new Ball(_canvas.canvas.width / 2, _canvas.canvas.height / 2, 10, 5, -2);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(0);

var _ball = __webpack_require__(2);

var _bar = __webpack_require__(1);

function draw() {

  (0, _canvas.drawCanvas)();
  _ball.tennisBall.drawBall();
  _bar.leftBar.drawBar();
  _bar.rightBar.drawBar();
  _bar.rightBar.aiMovement();
  _ball.tennisBall.score();
  (0, _canvas.drawNet)();
}

setInterval(draw, 10);

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
  exports.positionY = positionY = mousePos.y - _bar.leftBar.barHeight / 2;
  _bar.leftBar.barY = positionY; //can i do Bar?
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzkwOTRiOWM1NGRmM2UxZTIwNTIiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWxsLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3VzZUhhbmRsZXIuanMiXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImRyYXdOZXQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJpIiwiQmFyIiwiYmFyWCIsImJhclkiLCJiYXJXaWR0aCIsImJhckhlaWdodCIsInJlY3QiLCJmaWxsIiwiYmFsbFkiLCJsZWZ0QmFyIiwicmlnaHRCYXIiLCJwbGF5ZXJTY29yZSIsImFpU2NvcmUiLCJCYWxsIiwiYmFsbFgiLCJiYWxsUmFkaXVzIiwiZHgiLCJkeSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsInRlbm5pc0JhbGwiLCJyZXNldEJhbGwiLCJmb250IiwiZmlsbFRleHQiLCJkcmF3IiwiZHJhd0JhbGwiLCJkcmF3QmFyIiwiYWlNb3ZlbWVudCIsInNjb3JlIiwic2V0SW50ZXJ2YWwiLCJnZXRNb3VzZVBvcyIsImV2dCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwicG9zaXRpb25ZIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlUG9zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdB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QXFDLFVBQVNULEdBQVQsRUFBYztBQUMzQyxNQUFJVSxXQUFXWCw0QkFBb0JDLEdBQXBCLENBQWY7QUFDQSxVQUpHUSxTQUlILGVBQVlFLFNBQVNMLENBQVQsR0FBYyxhQUFRbEMsU0FBUixHQUFvQixDQUE5QztBQUNBLGVBQVFGLElBQVIsR0FBZXVDLFNBQWYsQ0FIMkMsQ0FHbEI7QUFDMUIsQ0FKUCxFIiwiZmlsZSI6Ii4vanMvb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzkwOTRiOWM1NGRmM2UxZTIwNTIiLCJleHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlbm5pc0NhbnZhcycpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHsgIFxuICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTsgXG4gIC8vZHJhdyBuZXRcblxufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdOZXQoKXtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMuaGVpZ2h0OyBpICs9IDMwKSB7XG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggLyAyIC0gMSwgaSwgMiwgMjApO1xuICB9XG59XG5cblxuLy9ob3cgdG8gY2VudGVyIGNhbnZhcz9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jYW52YXMuanMiLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge3Bvc2l0aW9uWX0gZnJvbSAnLi9tb3VzZUhhbmRsZXInO1xuaW1wb3J0IHt0ZW5uaXNCYWxsfSBmcm9tICcuL2JhbGwnO1xuXG5jbGFzcyBCYXIge1xuICBjb25zdHJ1Y3RvcihiYXJYLCBiYXJZLCBiYXJXaWR0aCwgYmFySGVpZ2h0KXtcblxuICAgIHRoaXMuYmFyWCA9IGJhclg7XG4gICAgdGhpcy5iYXJZID0gYmFyWTtcbiAgICB0aGlzLmJhckhlaWdodCA9IGJhckhlaWdodDtcbiAgICB0aGlzLmJhcldpZHRoID0gYmFyV2lkdGg7XG4gIH1cbiAgXG4gIGRyYXdCYXIoKSB7XG4gICAgY3R4LnJlY3QodGhpcy5iYXJYLCB0aGlzLmJhclksIHRoaXMuYmFyV2lkdGgsIHRoaXMuYmFySGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbiAgXG4gIGFpTW92ZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuYmFyWSArICh0aGlzLmJhckhlaWdodCAvIDIpIDwgdGVubmlzQmFsbC5iYWxsWSkge1xuICAgICAgdGhpcy5iYXJZICs9IDI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5iYXJZIC09IDI7XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGxlZnRCYXIgPSBuZXcgQmFyKDEwLCBwb3NpdGlvblksIDEwLCAxMDApO1xuZXhwb3J0IGxldCByaWdodEJhciA9IG5ldyBCYXIoY2FudmFzLndpZHRoIC0gMjAsIChjYW52YXMuaGVpZ2h0IC0gMTAwKSAvIDIsIDEwLCAxMDApO1xuXG4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYmFyLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5sZXQgcGxheWVyU2NvcmUgPSAwO1xubGV0IGFpU2NvcmUgPSAwO1xuXG5jbGFzcyBCYWxsIHtcbiAgY29uc3RydWN0b3IoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBkeCwgZHkpIHtcbiAgICBcbiAgICB0aGlzLmJhbGxYID0gYmFsbFg7XG4gICAgdGhpcy5iYWxsWSA9IGJhbGxZO1xuICAgIHRoaXMuYmFsbFJhZGl1cyA9IGJhbGxSYWRpdXM7XG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMuZHkgPSBkeTtcbiAgfVxuICBcbiAgZHJhd0JhbGwoKSB7ICAgIFxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmModGhpcy5iYWxsWCwgdGhpcy5iYWxsWSwgdGhpcy5iYWxsUmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguY2xvc2VQYXRoKCk7IFxuICAgIFxuICAgIC8vYWRkaW5nIGJhbGwgbW92ZW1lbnRcbiAgICB0aGlzLmJhbGxYICs9IHRoaXMuZHhcbiAgICB0aGlzLmJhbGxZICs9IHRoaXMuZHkgICAgXG4gICAgXG4gICAgaWYgKHRoaXMuYmFsbFggPj0gY2FudmFzLndpZHRoKSB7XG4gICAgICAvL2JvdW5jaW5nIG9mIHRoZSByaWdodCBiYXJcbiAgICAgIGlmICh0aGlzLmJhbGxZID4gcmlnaHRCYXIuYmFyWSAmJiB0aGlzLmJhbGxZIDwgcmlnaHRCYXIuYmFyWSArIHJpZ2h0QmFyLmJhckhlaWdodCkge1xuICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgICB9XG4gICAgICBlbHNleyAgICAgICAgXG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7XG4gICAgICAgIHBsYXllclNjb3JlKys7XG4gICAgICB9ICAgICAgXG4vLyAgICAgIEJhbGwucmVzZXRCYWxsKCk7IG5vIGJhbGwgYW5kIGJhciByZXNwYXduXG4gICAgfSAgICBcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxYIDwgMCkge1xuICAgICAgLy9ib3VuY2luZyBvZiB0aGUgbGVmdCBiYXJcbiAgICAgIGlmICh0aGlzLmJhbGxZID4gbGVmdEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCBsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCkge1xuICAgICAgdGhpcy5keCA9IC10aGlzLmR4OyAgXG4gICAgICB9XG4gICAgICBlbHNleyAgICAgICAgXG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICBcbiAgICAgICAgYWlTY29yZSsrO1xuICAgICAgfSAgXG4vLyAgICAgIEJhbGwucmVzZXRCYWxsKCk7XG4gICAgfVxuICAgIC8vYm91Y2luZyBvZiB0aGUgYm90dG9tXG4gICAgZWxzZSBpZiAodGhpcy5iYWxsWSArIHRoaXMuYmFsbFJhZGl1cyA+PSBjYW52YXMuaGVpZ2h0KSB7XG4gICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIHRvcFxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgPCAwICsgdGhpcy5iYWxsUmFkaXVzKSB7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XG4gICAgfVxuICB9XG4gIFxuICAvL3Jlc2V0aW5nIGJhbGwgcG9zaXRpb24gdG8gdGhlIGNlbnRlciBhZnRlciBzY29yZSBhbmQgY2hhbmdpbmcgYmFsbCBkaXJlY3Rpb25cbiAgcmVzZXRCYWxsKCkge1xuICAgIHRoaXMuZHggPSAtIHRoaXMuZHg7XG4gICAgdGhpcy5iYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICB9XG4gIFxuICAvL2RyYXdpbmcgc2NvcmVcbiAgc2NvcmUoKSB7XG4gICAgY3R4LmZvbnQgPSAnMzBweCBDb3VyaWVyIE5ldyc7ICBcbiAgICBjdHguZmlsbFRleHQocGxheWVyU2NvcmUsIDEwMCwgMTAwKTtcbiAgICBjdHguZmlsbFRleHQoYWlTY29yZSwgY2FudmFzLndpZHRoIC0gMTAwLCAxMDApO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgdGVubmlzQmFsbCA9IG5ldyBCYWxsKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCAxMCwgNSwgLTIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsLmpzIiwiaW1wb3J0IHtkcmF3Q2FudmFzLCBjYW52YXMsIGN0eCwgZHJhd05ldH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHt0ZW5uaXNCYWxsfSBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhciwgYmFySGVpZ2h0fSBmcm9tICcuL2Jhcic7XG5cbmZ1bmN0aW9uIGRyYXcoKSB7ICBcbiAgXG4gIGRyYXdDYW52YXMoKTsgIFxuICB0ZW5uaXNCYWxsLmRyYXdCYWxsKCk7XG4gIGxlZnRCYXIuZHJhd0JhcigpO1xuICByaWdodEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmFpTW92ZW1lbnQoKTsgXG4gIHRlbm5pc0JhbGwuc2NvcmUoKTtcbiAgZHJhd05ldCgpO1xufSAgIFxuXG5zZXRJbnRlcnZhbChkcmF3LCAxMCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge2xlZnRCYXIsIHJpZ2h0QmFyfSBmcm9tICcuL2Jhcic7XG5cbmZ1bmN0aW9uIGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XG4gICAgICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cblxuZXhwb3J0IGxldCBwb3NpdGlvblkgPSAyMDA7XG4gICAgICBcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY2FudmFzLCBldnQpO1xuICAgICAgICBwb3NpdGlvblkgPSBtb3VzZVBvcy55IC0gKGxlZnRCYXIuYmFySGVpZ2h0IC8gMik7XG4gICAgICAgIGxlZnRCYXIuYmFyWSA9IHBvc2l0aW9uWTsvL2NhbiBpIGRvIEJhcj9cbiAgICAgIH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vdXNlSGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=