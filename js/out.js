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

var _leftBarHandler = __webpack_require__(4);

var _ballAndScore = __webpack_require__(2);

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
      //ai bar follows ball
      if (this.barY + this.barHeight / 2 < _ballAndScore.tennisBall.ballY - 30) {
        this.barY += 8;
      } else if (this.barY + this.barHeight / 2 > _ballAndScore.tennisBall.ballY + 30) {
        this.barY -= 8;
      }
    }
  }]);

  return Bar;
}();

var leftBar = exports.leftBar = new Bar(10, _leftBarHandler.positionY, 10, 100);
var rightBar = exports.rightBar = new Bar(_canvas.canvas.width - 20, (_canvas.canvas.height - 100) / 2, 10, 100);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tennisBall = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //mouse click event for game restart placed at the end of the code

var _canvas = __webpack_require__(0);

var _bar = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var playerScore = 0;
var aiScore = 0;
var win = false;

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

      var bounceY = void 0;

      if (this.ballX >= _canvas.canvas.width) {
        //bouncing of the right bar
        if (this.ballY > _bar.rightBar.barY && this.ballY < _bar.rightBar.barY + _bar.rightBar.barHeight) {
          this.dx = -this.dx;

          // the closer to the edge the higher bounce angle and faster ball movement         
          bounceY = this.ballY - (_bar.rightBar.barY + _bar.rightBar.barHeight / 2);
          this.dy = bounceY * 0.3;
        } else {
          playerScore++;
          tennisBall.resetBall();
        }
        //      Ball.resetBall(); no ball and bar respawn
      } else if (this.ballX < 0) {
        //bouncing of the left bar
        if (this.ballY > _bar.leftBar.barY && this.ballY < _bar.leftBar.barY + _bar.leftBar.barHeight) {
          this.dx = -this.dx;

          // the closer to the edge the higher bounce angle and faster ball movement
          bounceY = this.ballY - (_bar.leftBar.barY + _bar.leftBar.barHeight / 2);
          this.dy = bounceY * 0.3;
        } else {
          aiScore++;
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
  }, {
    key: 'resetBall',
    value: function resetBall() {
      //win conditions
      var winScore = 2;
      if (playerScore >= winScore || aiScore >= winScore) {
        win = true;
        //      console.log(win);      
      }

      //reseting ball position to the center after scoring and changing ball direction
      this.dy = -2;
      this.dx = -this.dx;
      this.ballX = _canvas.canvas.width / 2;
      this.ballY = _canvas.canvas.height / 2;
    }
  }, {
    key: 'gameReset',
    value: function gameReset() {
      if (win) {
        //      console.log(win);
        _canvas.ctx.font = '30px Courier New';
        _canvas.ctx.fillText('Click to restart', 50, _canvas.canvas.height / 2);
        this.ballX = _canvas.canvas.width / 2;
        this.ballY = _canvas.canvas.height / 2;
        //      this.resetBall();
      }
      return;
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

_canvas.canvas.addEventListener('mousedown', function () {
  if (win) {
    playerScore = 0;
    aiScore = 0;
    win = false;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(0);

var _ballAndScore = __webpack_require__(2);

var _bar = __webpack_require__(1);

function draw() {

  (0, _canvas.drawCanvas)();

  _ballAndScore.tennisBall.drawBall();
  _bar.leftBar.drawBar();
  _bar.rightBar.drawBar();
  _bar.rightBar.aiMovement();
  _ballAndScore.tennisBall.score();
  (0, _canvas.drawNet)();
  _ballAndScore.tennisBall.gameReset();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2ZmYTE3OGE1MWEwN2E2NjNhMmIiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL2xlZnRCYXJIYW5kbGVyLmpzIl0sIm5hbWVzIjpbImRyYXdDYW52YXMiLCJkcmF3TmV0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImJhbGxZIiwibGVmdEJhciIsInJpZ2h0QmFyIiwicGxheWVyU2NvcmUiLCJhaVNjb3JlIiwid2luIiwiQmFsbCIsImJhbGxYIiwiYmFsbFJhZGl1cyIsImR4IiwiZHkiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbG9zZVBhdGgiLCJib3VuY2VZIiwidGVubmlzQmFsbCIsInJlc2V0QmFsbCIsIndpblNjb3JlIiwiZm9udCIsImZpbGxUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXciLCJkcmF3QmFsbCIsImRyYXdCYXIiLCJhaU1vdmVtZW50Iiwic2NvcmUiLCJnYW1lUmVzZXQiLCJzZXRJbnRlcnZhbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJtb3VzZVBvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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R0FBaEI7O0FBRVAsZUFBT2pCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLFVBQVNTLEdBQVQsRUFBYztBQUMzQyxNQUFJUyxXQUFXViw0QkFBb0JDLEdBQXBCLENBQWY7QUFDQSxVQUpHUSxTQUlILGVBQVlDLFNBQVNKLENBQVQsR0FBYyxhQUFRdkMsU0FBUixHQUFvQixDQUE5QztBQUNBLGVBQVFGLElBQVIsR0FBZTRDLFNBQWYsQ0FIMkMsQ0FHbEI7QUFDMUIsQ0FKUCxFIiwiZmlsZSI6Ii4vanMvb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2ZmYTE3OGE1MWEwN2E2NjNhMmIiLCJleHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlbm5pc0NhbnZhcycpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhbnZhcygpIHsgIFxuICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdOZXQoKXtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMuaGVpZ2h0OyBpICs9IDMwKSB7XG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggLyAyIC0gMSwgaSwgMiwgMjApO1xuICB9XG59XG5cblxuLy9ob3cgdG8gY2VudGVyIGNhbnZhcz9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jYW52YXMuanMiLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge3Bvc2l0aW9uWX0gZnJvbSAnLi9sZWZ0QmFySGFuZGxlcic7XG5pbXBvcnQge3Rlbm5pc0JhbGx9IGZyb20gJy4vYmFsbEFuZFNjb3JlJztcblxuY2xhc3MgQmFyIHtcbiAgY29uc3RydWN0b3IoYmFyWCwgYmFyWSwgYmFyV2lkdGgsIGJhckhlaWdodCl7XG5cbiAgICB0aGlzLmJhclggPSBiYXJYO1xuICAgIHRoaXMuYmFyWSA9IGJhclk7XG4gICAgdGhpcy5iYXJIZWlnaHQgPSBiYXJIZWlnaHQ7XG4gICAgdGhpcy5iYXJXaWR0aCA9IGJhcldpZHRoO1xuICB9XG4gIFxuICBkcmF3QmFyKCkge1xuICAgIGN0eC5yZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoLCB0aGlzLmJhckhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG4gIFxuICBhaU1vdmVtZW50KCkge1xuICAgIC8vYWkgYmFyIGZvbGxvd3MgYmFsbFxuICAgIGlmICh0aGlzLmJhclkgKyAodGhpcy5iYXJIZWlnaHQgLyAyKSA8IHRlbm5pc0JhbGwuYmFsbFkgLSAzMCkge1xuICAgICAgdGhpcy5iYXJZICs9IDg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmFyWSArICh0aGlzLmJhckhlaWdodCAvIDIpID4gdGVubmlzQmFsbC5iYWxsWSArIDMwKXtcbiAgICAgIHRoaXMuYmFyWSAtPSA4O1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBsZWZ0QmFyID0gbmV3IEJhcigxMCwgcG9zaXRpb25ZLCAxMCwgMTAwKTtcbmV4cG9ydCBsZXQgcmlnaHRCYXIgPSBuZXcgQmFyKGNhbnZhcy53aWR0aCAtIDIwLCAoY2FudmFzLmhlaWdodCAtIDEwMCkgLyAyLCAxMCwgMTAwKTtcblxuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2Jhci5qcyIsIi8vbW91c2UgY2xpY2sgZXZlbnQgZm9yIGdhbWUgcmVzdGFydCBwbGFjZWQgYXQgdGhlIGVuZCBvZiB0aGUgY29kZVxuXG5pbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge2xlZnRCYXIsIHJpZ2h0QmFyfSBmcm9tICcuL2Jhcic7XG5cbmxldCBwbGF5ZXJTY29yZSA9IDA7XG5sZXQgYWlTY29yZSA9IDA7XG5sZXQgd2luID0gZmFsc2U7XG5cbmNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3RvcihiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGR4LCBkeSkge1xuICAgIFxuICAgIHRoaXMuYmFsbFggPSBiYWxsWDtcbiAgICB0aGlzLmJhbGxZID0gYmFsbFk7XG4gICAgdGhpcy5iYWxsUmFkaXVzID0gYmFsbFJhZGl1cztcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IGR5O1xuICB9XG4gIFxuICBkcmF3QmFsbCgpIHsgICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYyh0aGlzLmJhbGxYLCB0aGlzLmJhbGxZLCB0aGlzLmJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgXG4gICAgLy9hZGRpbmcgYmFsbCBtb3ZlbWVudFxuICAgIHRoaXMuYmFsbFggKz0gdGhpcy5keFxuICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5keSAgICBcbiAgICBcbiAgICBsZXQgYm91bmNlWTtcbiAgICBcbiAgICBpZiAodGhpcy5iYWxsWCA+PSBjYW52YXMud2lkdGgpIHtcbiAgICAgIC8vYm91bmNpbmcgb2YgdGhlIHJpZ2h0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiByaWdodEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCByaWdodEJhci5iYXJZICsgcmlnaHRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoZSBjbG9zZXIgdG8gdGhlIGVkZ2UgdGhlIGhpZ2hlciBib3VuY2UgYW5nbGUgYW5kIGZhc3RlciBiYWxsIG1vdmVtZW50ICAgICAgICAgXG4gICAgICAgIGJvdW5jZVkgPSB0aGlzLmJhbGxZIC0gKHJpZ2h0QmFyLmJhclkgKyByaWdodEJhci5iYXJIZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5keSA9IGJvdW5jZVkgKiAwLjM7XG4gICAgICB9XG4gICAgICBlbHNlIHsgICAgICAgIFxuICAgICAgICBwbGF5ZXJTY29yZSsrO1xuICAgICAgICB0ZW5uaXNCYWxsLnJlc2V0QmFsbCgpOyAgICAgICAgXG4gICAgICB9ICAgICAgXG4vLyAgICAgIEJhbGwucmVzZXRCYWxsKCk7IG5vIGJhbGwgYW5kIGJhciByZXNwYXduXG4gICAgfSAgICBcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxYIDwgMCkge1xuICAgICAgLy9ib3VuY2luZyBvZiB0aGUgbGVmdCBiYXJcbiAgICAgIGlmICh0aGlzLmJhbGxZID4gbGVmdEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCBsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCkge1xuICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGUgY2xvc2VyIHRvIHRoZSBlZGdlIHRoZSBoaWdoZXIgYm91bmNlIGFuZ2xlIGFuZCBmYXN0ZXIgYmFsbCBtb3ZlbWVudFxuICAgICAgICBib3VuY2VZID0gdGhpcy5iYWxsWSAtIChsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmR5ID0gYm91bmNlWSAqIDAuMztcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAgICAgXG4gICAgICAgIGFpU2NvcmUrKztcbiAgICAgICAgdGVubmlzQmFsbC5yZXNldEJhbGwoKTsgICAgICAgICBcbiAgICAgIH0gIFxuLy8gICAgICBCYWxsLnJlc2V0QmFsbCgpO1xuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIGJvdHRvbVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxSYWRpdXMgPj0gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gICAgLy9ib3VjaW5nIG9mIHRoZSB0b3BcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxZIDwgMCArIHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgfVxuICBcblxuICByZXNldEJhbGwoKSB7XG4gICAgLy93aW4gY29uZGl0aW9uc1xuICAgIGxldCB3aW5TY29yZSA9IDI7ICAgIFxuICAgIGlmIChwbGF5ZXJTY29yZSA+PSB3aW5TY29yZSB8fCBhaVNjb3JlID49IHdpblNjb3JlKSB7XG4gICAgICB3aW4gPSB0cnVlO1xuLy8gICAgICBjb25zb2xlLmxvZyh3aW4pOyAgICAgIFxuICAgIH0gXG5cbiAgICAvL3Jlc2V0aW5nIGJhbGwgcG9zaXRpb24gdG8gdGhlIGNlbnRlciBhZnRlciBzY29yaW5nIGFuZCBjaGFuZ2luZyBiYWxsIGRpcmVjdGlvblxuICAgIHRoaXMuZHkgPSAtMjsgXG4gICAgdGhpcy5keCA9IC0gdGhpcy5keDtcbiAgICB0aGlzLmJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLmJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gIH1cbiAgXG4gIGdhbWVSZXNldCgpIHtcbiAgICAgIGlmICh3aW4pIHtcbi8vICAgICAgY29uc29sZS5sb2cod2luKTtcbiAgICAgIGN0eC5mb250ID0gJzMwcHggQ291cmllciBOZXcnO1xuICAgICAgY3R4LmZpbGxUZXh0KCdDbGljayB0byByZXN0YXJ0JywgNTAsIGNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgIHRoaXMuYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyOyAgXG4vLyAgICAgIHRoaXMucmVzZXRCYWxsKCk7XG4gICAgfSAgICBcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIC8vZHJhd2luZyBzY29yZVxuICBzY29yZSgpIHtcbiAgICBjdHguZm9udCA9ICczMHB4IENvdXJpZXIgTmV3JzsgIFxuICAgIGN0eC5maWxsVGV4dChwbGF5ZXJTY29yZSwgMTAwLCAxMDApO1xuICAgIGN0eC5maWxsVGV4dChhaVNjb3JlLCBjYW52YXMud2lkdGggLSAxMDAsIDEwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCB0ZW5uaXNCYWxsID0gbmV3IEJhbGwoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDEwLCA1LCAtMik7XG5cblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuICBpZiAod2luKSB7XG4gICAgcGxheWVyU2NvcmUgPSAwO1xuICAgIGFpU2NvcmUgPSAwO1xuICAgIHdpbiA9IGZhbHNlO1xuICB9XG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJpbXBvcnQge2RyYXdDYW52YXMsIGRyYXdOZXR9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsQW5kU2NvcmUnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5mdW5jdGlvbiBkcmF3KCkgeyAgXG4gIFxuICBkcmF3Q2FudmFzKCk7ICBcbiAgXG4gIHRlbm5pc0JhbGwuZHJhd0JhbGwoKTtcbiAgbGVmdEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmRyYXdCYXIoKTtcbiAgcmlnaHRCYXIuYWlNb3ZlbWVudCgpOyBcbiAgdGVubmlzQmFsbC5zY29yZSgpO1xuICBkcmF3TmV0KCk7XG4gIHRlbm5pc0JhbGwuZ2FtZVJlc2V0KCk7ICBcbn0gICBcblxuc2V0SW50ZXJ2YWwoZHJhdywgMTApO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCJpbXBvcnQge2NhbnZhc30gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyfSBmcm9tICcuL2Jhcic7XG5cblxuZnVuY3Rpb24gZ2V0TW91c2VQb3MoY2FudmFzLCBldnQpIHtcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuXG5leHBvcnQgbGV0IHBvc2l0aW9uWSA9IDIwMDtcbiAgICAgIFxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAgIHBvc2l0aW9uWSA9IG1vdXNlUG9zLnkgLSAobGVmdEJhci5iYXJIZWlnaHQgLyAyKTtcbiAgICAgICAgbGVmdEJhci5iYXJZID0gcG9zaXRpb25ZOy8vY2FuIGkgZG8gQmFyP1xuICAgICAgfSk7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9sZWZ0QmFySGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=