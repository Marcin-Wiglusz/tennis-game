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
var canvas = exports.canvas = document.getElementById('tennisCanvas');
var ctx = exports.ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.style.marginLeft = 'auto';
canvas.style.marginRight = 'auto';

var drawCanvas = exports.drawCanvas = function drawCanvas() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

var drawNet = exports.drawNet = function drawNet() {
  for (var i = 0; i < canvas.height; i += 30) {
    ctx.fillRect(canvas.width / 2 - 1, i, 2, 20);
  }
};

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
    this.barWidth = barWidth;
    this.barHeight = barHeight;
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
var winScore = 3;

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

      if (this.ballX >= _canvas.canvas.width - this.ballRadius - _bar.rightBar.barWidth * 2) {
        //bouncing of the right bar
        if (this.ballY >= _bar.rightBar.barY - this.ballRadius && this.ballY <= _bar.rightBar.barY + _bar.rightBar.barHeight + this.ballRadius && this.ballX < _canvas.canvas.width - _bar.rightBar.barWidth * 2) {
          this.dx = -this.dx;

          // the closer to the edge the higher bounce angle and faster ball movement         
          bounceY = this.ballY - (_bar.rightBar.barY + _bar.rightBar.barHeight / 2);
          this.dy = bounceY * 0.3;
        } else if (this.ballX > _canvas.canvas.width - _bar.rightBar.barWidth) {
          playerScore++;
          tennisBall.resetBall();
        }
      } else if (this.ballX <= this.ballRadius + _bar.leftBar.barWidth * 2) {
        //bouncing of the left bar
        if (this.ballY >= _bar.leftBar.barY - this.ballRadius && this.ballY <= _bar.leftBar.barY + _bar.leftBar.barHeight + this.ballRadius && this.ballX > _bar.leftBar.barWidth * 2) {
          this.dx = -this.dx;

          // the closer to the edge the higher bounce angle and faster ball movement
          bounceY = this.ballY - (_bar.leftBar.barY + _bar.leftBar.barHeight / 2);
          this.dy = bounceY * 0.3;
        } else if (this.ballX < _bar.leftBar.barWidth) {
          aiScore++;
          tennisBall.resetBall();
        }
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
      if (playerScore >= winScore || aiScore >= winScore) {
        win = true;
      }

      //reseting ball position to the center after scoring and changing ball direction
      this.ballX = _canvas.canvas.width / 2;
      this.ballY = _canvas.canvas.height / 2;
      this.dy = -2;
      this.dx = -this.dx;
    }
  }, {
    key: 'gameReset',
    value: function gameReset() {
      if (win) {
        //displaying player win
        if (playerScore >= winScore) {
          _canvas.ctx.fillText('You Won!', 50, 250);
        }
        //displaying computer win
        else if (aiScore >= winScore) {
            _canvas.ctx.fillText('Computer Won!', 450, 250);
          }
        _canvas.ctx.font = '30px Courier New';
        _canvas.ctx.fillText('Click to restart', 50, 400);
        this.ballX = _canvas.canvas.width / 2;
        this.ballY = _canvas.canvas.height / 2;
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

var draw = function draw() {

  (0, _canvas.drawCanvas)();
  _ballAndScore.tennisBall.drawBall();
  _bar.leftBar.drawBar();
  _bar.rightBar.drawBar();
  _bar.rightBar.aiMovement();
  _ballAndScore.tennisBall.score();
  (0, _canvas.drawNet)();
  _ballAndScore.tennisBall.gameReset();
};

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

var getMousePos = function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

var positionY = exports.positionY = 200;

_canvas.canvas.addEventListener('mousemove', function (evt) {
  var mousePos = getMousePos(_canvas.canvas, evt);
  exports.positionY = positionY = mousePos.y - _bar.leftBar.barHeight / 2;
  _bar.leftBar.barY = positionY;
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkwODJkZmI5NTY3NjIzZjYyNDciLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL2xlZnRCYXJIYW5kbGVyLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZHJhd0NhbnZhcyIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3TmV0IiwiaSIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImJhbGxZIiwibGVmdEJhciIsInJpZ2h0QmFyIiwicGxheWVyU2NvcmUiLCJhaVNjb3JlIiwid2luIiwid2luU2NvcmUiLCJCYWxsIiwiYmFsbFgiLCJiYWxsUmFkaXVzIiwiZHgiLCJkeSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImJvdW5jZVkiLCJ0ZW5uaXNCYWxsIiwicmVzZXRCYWxsIiwiZmlsbFRleHQiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXciLCJkcmF3QmFsbCIsImRyYXdCYXIiLCJhaU1vdmVtZW50Iiwic2NvcmUiLCJnYW1lUmVzZXQiLCJzZXRJbnRlcnZhbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJtb3VzZVBvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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Iiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTkwODJkZmI5NTY3NjIzZjYyNDciLCJleHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlbm5pc0NhbnZhcycpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5jYW52YXMuc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcbmNhbnZhcy5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJztcblxuZXhwb3J0IGxldCBkcmF3Q2FudmFzID0gKCk9PiB7ICBcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cbmV4cG9ydCBsZXQgZHJhd05ldCA9ICgpPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhcy5oZWlnaHQ7IGkgKz0gMzApIHtcbiAgY3R4LmZpbGxSZWN0KGNhbnZhcy53aWR0aCAvIDIgLSAxLCBpLCAyLCAyMCk7XG4gIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jYW52YXMuanMiLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQge3Bvc2l0aW9uWX0gZnJvbSAnLi9sZWZ0QmFySGFuZGxlcic7XG5pbXBvcnQge3Rlbm5pc0JhbGx9IGZyb20gJy4vYmFsbEFuZFNjb3JlJztcblxuY2xhc3MgQmFyIHtcbiAgY29uc3RydWN0b3IoYmFyWCwgYmFyWSwgYmFyV2lkdGgsIGJhckhlaWdodCl7XG5cbiAgICB0aGlzLmJhclggPSBiYXJYO1xuICAgIHRoaXMuYmFyWSA9IGJhclk7ICAgIFxuICAgIHRoaXMuYmFyV2lkdGggPSBiYXJXaWR0aDtcbiAgICB0aGlzLmJhckhlaWdodCA9IGJhckhlaWdodDtcbiAgfVxuICBcbiAgZHJhd0JhcigpIHtcbiAgICBjdHgucmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCwgdGhpcy5iYXJIZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuICBcbiAgYWlNb3ZlbWVudCgpIHtcbiAgICAvL2FpIGJhciBmb2xsb3dzIGJhbGxcbiAgICBpZiAodGhpcy5iYXJZICsgKHRoaXMuYmFySGVpZ2h0IC8gMikgPCB0ZW5uaXNCYWxsLmJhbGxZIC0gMzApIHtcbiAgICAgIHRoaXMuYmFyWSArPSA4O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJhclkgKyAodGhpcy5iYXJIZWlnaHQgLyAyKSA+IHRlbm5pc0JhbGwuYmFsbFkgKyAzMCkge1xuICAgICAgdGhpcy5iYXJZIC09IDg7XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGxlZnRCYXIgPSBuZXcgQmFyKDEwLCBwb3NpdGlvblksIDEwLCAxMDApO1xuZXhwb3J0IGxldCByaWdodEJhciA9IG5ldyBCYXIoY2FudmFzLndpZHRoIC0gMjAsIChjYW52YXMuaGVpZ2h0IC0gMTAwKSAvIDIsIDEwLCAxMDApO1xuXG4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYmFyLmpzIiwiLy9tb3VzZSBjbGljayBldmVudCBmb3IgZ2FtZSByZXN0YXJ0IHBsYWNlZCBhdCB0aGUgZW5kIG9mIHRoZSBjb2RlXG5cbmltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXJ9IGZyb20gJy4vYmFyJztcblxubGV0IHBsYXllclNjb3JlID0gMDtcbmxldCBhaVNjb3JlID0gMDtcbmxldCB3aW4gPSBmYWxzZTtcbmxldCB3aW5TY29yZSA9IDM7XG5cbmNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3RvcihiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGR4LCBkeSkge1xuICAgIFxuICAgIHRoaXMuYmFsbFggPSBiYWxsWDtcbiAgICB0aGlzLmJhbGxZID0gYmFsbFk7XG4gICAgdGhpcy5iYWxsUmFkaXVzID0gYmFsbFJhZGl1cztcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IGR5O1xuICB9XG4gIFxuICBkcmF3QmFsbCgpIHsgICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYyh0aGlzLmJhbGxYLCB0aGlzLmJhbGxZLCB0aGlzLmJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgXG4gICAgLy9hZGRpbmcgYmFsbCBtb3ZlbWVudFxuICAgIHRoaXMuYmFsbFggKz0gdGhpcy5keFxuICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5keSAgICBcbiAgICBcbiAgICBsZXQgYm91bmNlWTsgICAgXG4gICAgXG4gICAgaWYgKHRoaXMuYmFsbFggPj0gY2FudmFzLndpZHRoIC0gdGhpcy5iYWxsUmFkaXVzIC0gKHJpZ2h0QmFyLmJhcldpZHRoICogMikpIHtcbiAgICAgICAgLy9ib3VuY2luZyBvZiB0aGUgcmlnaHQgYmFyXG4gICAgICBpZiAodGhpcy5iYWxsWSA+PSByaWdodEJhci5iYXJZIC0gdGhpcy5iYWxsUmFkaXVzICYmIHRoaXMuYmFsbFkgPD0gcmlnaHRCYXIuYmFyWSArIHJpZ2h0QmFyLmJhckhlaWdodCArIHRoaXMuYmFsbFJhZGl1cyAmJiB0aGlzLmJhbGxYIDwgY2FudmFzLndpZHRoIC0gKHJpZ2h0QmFyLmJhcldpZHRoICogMikpIHtcbiAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4OyAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gdGhlIGNsb3NlciB0byB0aGUgZWRnZSB0aGUgaGlnaGVyIGJvdW5jZSBhbmdsZSBhbmQgZmFzdGVyIGJhbGwgbW92ZW1lbnQgICAgICAgICBcbiAgICAgICAgYm91bmNlWSA9IHRoaXMuYmFsbFkgLSAocmlnaHRCYXIuYmFyWSArIHJpZ2h0QmFyLmJhckhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmR5ID0gYm91bmNlWSAqIDAuMztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuYmFsbFggPiBjYW52YXMud2lkdGggLSByaWdodEJhci5iYXJXaWR0aCkgeyAgICAgICAgXG4gICAgICAgIHBsYXllclNjb3JlKys7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICAgICAgICBcbiAgICAgICAgfSAgICAgIFxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJhbGxYIDw9IHRoaXMuYmFsbFJhZGl1cyArIChsZWZ0QmFyLmJhcldpZHRoICogMikpIHtcbiAgICAgIC8vYm91bmNpbmcgb2YgdGhlIGxlZnQgYmFyXG4gICAgICBpZiAodGhpcy5iYWxsWSA+PSBsZWZ0QmFyLmJhclkgLSB0aGlzLmJhbGxSYWRpdXMgJiYgdGhpcy5iYWxsWSA8PSBsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCArIHRoaXMuYmFsbFJhZGl1cyAmJiB0aGlzLmJhbGxYID4gbGVmdEJhci5iYXJXaWR0aCAqIDIpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGUgY2xvc2VyIHRvIHRoZSBlZGdlIHRoZSBoaWdoZXIgYm91bmNlIGFuZ2xlIGFuZCBmYXN0ZXIgYmFsbCBtb3ZlbWVudFxuICAgICAgICBib3VuY2VZID0gdGhpcy5iYWxsWSAtIChsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmR5ID0gYm91bmNlWSAqIDAuMztcbiAgICAgIH0gICAgIFxuICAgICAgZWxzZSBpZiAodGhpcy5iYWxsWCA8IGxlZnRCYXIuYmFyV2lkdGgpIHsgICAgIFxuICAgICAgICBhaVNjb3JlKys7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICAgICAgICAgXG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBcbiAgICAvL2JvdWNpbmcgb2YgdGhlIGJvdHRvbVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxSYWRpdXMgPj0gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gICAgLy9ib3VjaW5nIG9mIHRoZSB0b3BcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxZIDwgMCArIHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgfVxuICBcblxuICByZXNldEJhbGwoKSB7XG4gICAgLy93aW4gY29uZGl0aW9ucyAgICAgXG4gICAgaWYgKHBsYXllclNjb3JlID49IHdpblNjb3JlIHx8IGFpU2NvcmUgPj0gd2luU2NvcmUpIHtcbiAgICAgIHdpbiA9IHRydWU7XG4gICAgfSBcblxuICAgIC8vcmVzZXRpbmcgYmFsbCBwb3NpdGlvbiB0byB0aGUgY2VudGVyIGFmdGVyIHNjb3JpbmcgYW5kIGNoYW5naW5nIGJhbGwgZGlyZWN0aW9uXG4gICAgdGhpcy5iYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuZHkgPSAtMjsgXG4gICAgdGhpcy5keCA9IC0gdGhpcy5keDsgICAgXG4gIH1cbiAgXG4gIGdhbWVSZXNldCgpIHtcbiAgICAgIGlmICh3aW4pIHtcbiAgICAgICAgLy9kaXNwbGF5aW5nIHBsYXllciB3aW5cbiAgICAgICAgaWYgKHBsYXllclNjb3JlID49IHdpblNjb3JlKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCdZb3UgV29uIScsIDUwLCAyNTApO1xuICAgICAgICB9XG4gICAgICAgIC8vZGlzcGxheWluZyBjb21wdXRlciB3aW5cbiAgICAgICAgZWxzZSBpZiAoYWlTY29yZSA+PSB3aW5TY29yZSkge1xuICAgICAgICAgIGN0eC5maWxsVGV4dCgnQ29tcHV0ZXIgV29uIScsIDQ1MCwgMjUwKTtcbiAgICAgICAgfVxuICAgICAgY3R4LmZvbnQgPSAnMzBweCBDb3VyaWVyIE5ldyc7XG4gICAgICBjdHguZmlsbFRleHQoJ0NsaWNrIHRvIHJlc3RhcnQnLCA1MCwgNDAwKTtcbiAgICAgIHRoaXMuYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyOyAgXG4gICAgfSAgICBcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIC8vZHJhd2luZyBzY29yZVxuICBzY29yZSgpIHtcbiAgICBjdHguZm9udCA9ICczMHB4IENvdXJpZXIgTmV3JzsgIFxuICAgIGN0eC5maWxsVGV4dChwbGF5ZXJTY29yZSwgMTAwLCAxMDApO1xuICAgIGN0eC5maWxsVGV4dChhaVNjb3JlLCBjYW52YXMud2lkdGggLSAxMDAsIDEwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCB0ZW5uaXNCYWxsID0gbmV3IEJhbGwoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDEwLCA1LCAtMik7XG5cblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpPT4ge1xuICBpZiAod2luKSB7XG4gICAgcGxheWVyU2NvcmUgPSAwO1xuICAgIGFpU2NvcmUgPSAwO1xuICAgIHdpbiA9IGZhbHNlO1xuICB9XG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJpbXBvcnQge2RyYXdDYW52YXMsIGRyYXdOZXR9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsQW5kU2NvcmUnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5sZXQgZHJhdyA9ICgpPT4geyAgXG4gIFxuICBkcmF3Q2FudmFzKCk7ICAgIFxuICB0ZW5uaXNCYWxsLmRyYXdCYWxsKCk7XG4gIGxlZnRCYXIuZHJhd0JhcigpO1xuICByaWdodEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmFpTW92ZW1lbnQoKTsgXG4gIHRlbm5pc0JhbGwuc2NvcmUoKTtcbiAgZHJhd05ldCgpO1xuICB0ZW5uaXNCYWxsLmdhbWVSZXNldCgpOyAgXG59ICAgXG5cbnNldEludGVydmFsKGRyYXcsIDEwKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7bGVmdEJhcn0gZnJvbSAnLi9iYXInO1xuXG5cbmxldCBnZXRNb3VzZVBvcyA9IChjYW52YXMsIGV2dCk9PiB7XG4gICAgICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cblxuZXhwb3J0IGxldCBwb3NpdGlvblkgPSAyMDA7XG4gICAgICBcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZ0KT0+IHtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY2FudmFzLCBldnQpO1xuICAgICAgICBwb3NpdGlvblkgPSBtb3VzZVBvcy55IC0gKGxlZnRCYXIuYmFySGVpZ2h0IC8gMik7XG4gICAgICAgIGxlZnRCYXIuYmFyWSA9IHBvc2l0aW9uWTtcbiAgICAgIH0pO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbGVmdEJhckhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9