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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTRhMWRmMDIyM2EzYjQ3NjRiMGQiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL2xlZnRCYXJIYW5kbGVyLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZHJhd0NhbnZhcyIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3TmV0IiwiaSIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImJhbGxZIiwibGVmdEJhciIsInJpZ2h0QmFyIiwicGxheWVyU2NvcmUiLCJhaVNjb3JlIiwid2luIiwid2luU2NvcmUiLCJCYWxsIiwiYmFsbFgiLCJiYWxsUmFkaXVzIiwiZHgiLCJkeSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImJvdW5jZVkiLCJ0ZW5uaXNCYWxsIiwicmVzZXRCYWxsIiwiZmlsbFRleHQiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXciLCJkcmF3QmFsbCIsImRyYXdCYXIiLCJhaU1vdmVtZW50Iiwic2NvcmUiLCJnYW1lUmVzZXQiLCJzZXRJbnRlcnZhbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJtb3VzZVBvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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MkJBQVdDLEtBQVg7QUFDQTtBQUNBLDJCQUFXQyxTQUFYO0FBQ0QsQ0FWRDs7QUFZQUMsWUFBWU4sSUFBWixFQUFrQixFQUFsQixFOzs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFDQTs7QUFHQSxJQUFJTyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ3JELE1BQUQsRUFBU3NELEdBQVQsRUFBZ0I7QUFDMUIsTUFBSWpDLE9BQU9yQixPQUFPdUQscUJBQVAsRUFBWDtBQUNBLFNBQU87QUFDTEMsT0FBR0YsSUFBSUcsT0FBSixHQUFjcEMsS0FBS3FDLElBRGpCO0FBRUxDLE9BQUdMLElBQUlNLE9BQUosR0FBY3ZDLEtBQUt3QztBQUZqQixHQUFQO0FBSUQsQ0FOUDs7QUFRTyxJQUFJQyxnQ0FBWSxHQUFoQjs7QUFFUCxlQUFPakIsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ1MsR0FBRCxFQUFRO0FBQ3JDLE1BQUlTLFdBQVdWLDRCQUFvQkMsR0FBcEIsQ0FBZjtBQUNBLFVBSkdRLFNBSUgsZUFBWUMsU0FBU0osQ0FBVCxHQUFjLGFBQVF2QyxTQUFSLEdBQW9CLENBQTlDO0FBQ0EsZUFBUUYsSUFBUixHQUFlNEMsU0FBZjtBQUNELENBSlAsRSIsImZpbGUiOiIuL2pzL291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE0YTFkZjAyMjNhM2I0NzY0YjBkIiwiZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW5uaXNDYW52YXMnKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuY2FudmFzLnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XG5jYW52YXMuc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0byc7XG5cbmV4cG9ydCBsZXQgZHJhd0NhbnZhcyA9ICgpPT4geyAgXG4gIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG5leHBvcnQgbGV0IGRyYXdOZXQgPSAoKT0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMuaGVpZ2h0OyBpICs9IDMwKSB7XG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggLyAyIC0gMSwgaSwgMiwgMjApO1xuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2FudmFzLmpzIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtwb3NpdGlvbll9IGZyb20gJy4vbGVmdEJhckhhbmRsZXInO1xuaW1wb3J0IHt0ZW5uaXNCYWxsfSBmcm9tICcuL2JhbGxBbmRTY29yZSc7XG5cbmNsYXNzIEJhciB7XG4gIGNvbnN0cnVjdG9yKGJhclgsIGJhclksIGJhcldpZHRoLCBiYXJIZWlnaHQpe1xuXG4gICAgdGhpcy5iYXJYID0gYmFyWDtcbiAgICB0aGlzLmJhclkgPSBiYXJZO1xuICAgIHRoaXMuYmFySGVpZ2h0ID0gYmFySGVpZ2h0O1xuICAgIHRoaXMuYmFyV2lkdGggPSBiYXJXaWR0aDtcbiAgfVxuICBcbiAgZHJhd0JhcigpIHtcbiAgICBjdHgucmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCwgdGhpcy5iYXJIZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuICBcbiAgYWlNb3ZlbWVudCgpIHtcbiAgICAvL2FpIGJhciBmb2xsb3dzIGJhbGxcbiAgICBpZiAodGhpcy5iYXJZICsgKHRoaXMuYmFySGVpZ2h0IC8gMikgPCB0ZW5uaXNCYWxsLmJhbGxZIC0gMzApIHtcbiAgICAgIHRoaXMuYmFyWSArPSA4O1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJhclkgKyAodGhpcy5iYXJIZWlnaHQgLyAyKSA+IHRlbm5pc0JhbGwuYmFsbFkgKyAzMCl7XG4gICAgICB0aGlzLmJhclkgLT0gODtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgbGVmdEJhciA9IG5ldyBCYXIoMTAsIHBvc2l0aW9uWSwgMTAsIDEwMCk7XG5leHBvcnQgbGV0IHJpZ2h0QmFyID0gbmV3IEJhcihjYW52YXMud2lkdGggLSAyMCwgKGNhbnZhcy5oZWlnaHQgLSAxMDApIC8gMiwgMTAsIDEwMCk7XG5cbiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYXIuanMiLCIvL21vdXNlIGNsaWNrIGV2ZW50IGZvciBnYW1lIHJlc3RhcnQgcGxhY2VkIGF0IHRoZSBlbmQgb2YgdGhlIGNvZGVcblxuaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5sZXQgcGxheWVyU2NvcmUgPSAwO1xubGV0IGFpU2NvcmUgPSAwO1xubGV0IHdpbiA9IGZhbHNlO1xubGV0IHdpblNjb3JlID0gMztcblxuY2xhc3MgQmFsbCB7XG4gIGNvbnN0cnVjdG9yKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgZHgsIGR5KSB7XG4gICAgXG4gICAgdGhpcy5iYWxsWCA9IGJhbGxYO1xuICAgIHRoaXMuYmFsbFkgPSBiYWxsWTtcbiAgICB0aGlzLmJhbGxSYWRpdXMgPSBiYWxsUmFkaXVzO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR5ID0gZHk7XG4gIH1cbiAgXG4gIGRyYXdCYWxsKCkgeyAgICBcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHguYXJjKHRoaXMuYmFsbFgsIHRoaXMuYmFsbFksIHRoaXMuYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgY3R4LmNsb3NlUGF0aCgpOyBcbiAgICBcbiAgICAvL2FkZGluZyBiYWxsIG1vdmVtZW50XG4gICAgdGhpcy5iYWxsWCArPSB0aGlzLmR4XG4gICAgdGhpcy5iYWxsWSArPSB0aGlzLmR5ICAgIFxuICAgIFxuICAgIGxldCBib3VuY2VZO1xuICAgIFxuICAgIGlmICh0aGlzLmJhbGxYID49IGNhbnZhcy53aWR0aCkge1xuICAgICAgLy9ib3VuY2luZyBvZiB0aGUgcmlnaHQgYmFyXG4gICAgICBpZiAodGhpcy5iYWxsWSA+IHJpZ2h0QmFyLmJhclkgJiYgdGhpcy5iYWxsWSA8IHJpZ2h0QmFyLmJhclkgKyByaWdodEJhci5iYXJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgICAgICBcbiAgICAgICAgLy8gdGhlIGNsb3NlciB0byB0aGUgZWRnZSB0aGUgaGlnaGVyIGJvdW5jZSBhbmdsZSBhbmQgZmFzdGVyIGJhbGwgbW92ZW1lbnQgICAgICAgICBcbiAgICAgICAgYm91bmNlWSA9IHRoaXMuYmFsbFkgLSAocmlnaHRCYXIuYmFyWSArIHJpZ2h0QmFyLmJhckhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmR5ID0gYm91bmNlWSAqIDAuMztcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAgICAgICAgXG4gICAgICAgIHBsYXllclNjb3JlKys7XG4gICAgICAgIHRlbm5pc0JhbGwucmVzZXRCYWxsKCk7ICAgICAgICBcbiAgICAgIH0gICAgICBcbiAgICB9ICAgIFxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFggPCAwKSB7XG4gICAgICAvL2JvdW5jaW5nIG9mIHRoZSBsZWZ0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiBsZWZ0QmFyLmJhclkgJiYgdGhpcy5iYWxsWSA8IGxlZnRCYXIuYmFyWSArIGxlZnRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoZSBjbG9zZXIgdG8gdGhlIGVkZ2UgdGhlIGhpZ2hlciBib3VuY2UgYW5nbGUgYW5kIGZhc3RlciBiYWxsIG1vdmVtZW50XG4gICAgICAgIGJvdW5jZVkgPSB0aGlzLmJhbGxZIC0gKGxlZnRCYXIuYmFyWSArIGxlZnRCYXIuYmFySGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuZHkgPSBib3VuY2VZICogMC4zO1xuICAgICAgfVxuICAgICAgZWxzZSB7ICAgICBcbiAgICAgICAgYWlTY29yZSsrO1xuICAgICAgICB0ZW5uaXNCYWxsLnJlc2V0QmFsbCgpOyAgICAgICAgIFxuICAgICAgfSAgXG4gICAgfVxuICAgIC8vYm91Y2luZyBvZiB0aGUgYm90dG9tXG4gICAgZWxzZSBpZiAodGhpcy5iYWxsWSArIHRoaXMuYmFsbFJhZGl1cyA+PSBjYW52YXMuaGVpZ2h0KSB7XG4gICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIHRvcFxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgPCAwICsgdGhpcy5iYWxsUmFkaXVzKSB7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XG4gICAgfVxuICB9XG4gIFxuXG4gIHJlc2V0QmFsbCgpIHtcbiAgICAvL3dpbiBjb25kaXRpb25zICAgICBcbiAgICBpZiAocGxheWVyU2NvcmUgPj0gd2luU2NvcmUgfHwgYWlTY29yZSA+PSB3aW5TY29yZSkge1xuICAgICAgd2luID0gdHJ1ZTtcbiAgICB9IFxuXG4gICAgLy9yZXNldGluZyBiYWxsIHBvc2l0aW9uIHRvIHRoZSBjZW50ZXIgYWZ0ZXIgc2NvcmluZyBhbmQgY2hhbmdpbmcgYmFsbCBkaXJlY3Rpb25cbiAgICB0aGlzLmJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLmJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5keSA9IC0yOyBcbiAgICB0aGlzLmR4ID0gLSB0aGlzLmR4OyAgICBcbiAgfVxuICBcbiAgZ2FtZVJlc2V0KCkge1xuICAgICAgaWYgKHdpbikge1xuICAgICAgICAvL2Rpc3BsYXlpbmcgcGxheWVyIHdpblxuICAgICAgICBpZiAocGxheWVyU2NvcmUgPj0gd2luU2NvcmUpIHtcbiAgICAgICAgICBjdHguZmlsbFRleHQoJ1lvdSBXb24hJywgNTAsIDI1MCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9kaXNwbGF5aW5nIGNvbXB1dGVyIHdpblxuICAgICAgICBlbHNlIGlmIChhaVNjb3JlID49IHdpblNjb3JlKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCdDb21wdXRlciBXb24hJywgNDUwLCAyNTApO1xuICAgICAgICB9XG4gICAgICBjdHguZm9udCA9ICczMHB4IENvdXJpZXIgTmV3JztcbiAgICAgIGN0eC5maWxsVGV4dCgnQ2xpY2sgdG8gcmVzdGFydCcsIDUwLCA0MDApO1xuICAgICAgdGhpcy5iYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICB0aGlzLmJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7ICBcbiAgICB9ICAgIFxuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLy9kcmF3aW5nIHNjb3JlXG4gIHNjb3JlKCkge1xuICAgIGN0eC5mb250ID0gJzMwcHggQ291cmllciBOZXcnOyAgXG4gICAgY3R4LmZpbGxUZXh0KHBsYXllclNjb3JlLCAxMDAsIDEwMCk7XG4gICAgY3R4LmZpbGxUZXh0KGFpU2NvcmUsIGNhbnZhcy53aWR0aCAtIDEwMCwgMTAwKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IHRlbm5pc0JhbGwgPSBuZXcgQmFsbChjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiwgMTAsIDUsIC0yKTtcblxuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCk9PiB7XG4gIGlmICh3aW4pIHtcbiAgICBwbGF5ZXJTY29yZSA9IDA7XG4gICAgYWlTY29yZSA9IDA7XG4gICAgd2luID0gZmFsc2U7XG4gIH1cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2JhbGxBbmRTY29yZS5qcyIsImltcG9ydCB7ZHJhd0NhbnZhcywgZHJhd05ldH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHt0ZW5uaXNCYWxsfSBmcm9tICcuL2JhbGxBbmRTY29yZSc7XG5pbXBvcnQge2xlZnRCYXIsIHJpZ2h0QmFyfSBmcm9tICcuL2Jhcic7XG5cbmxldCBkcmF3ID0gKCk9PiB7ICBcbiAgXG4gIGRyYXdDYW52YXMoKTsgICAgXG4gIHRlbm5pc0JhbGwuZHJhd0JhbGwoKTtcbiAgbGVmdEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmRyYXdCYXIoKTtcbiAgcmlnaHRCYXIuYWlNb3ZlbWVudCgpOyBcbiAgdGVubmlzQmFsbC5zY29yZSgpO1xuICBkcmF3TmV0KCk7XG4gIHRlbm5pc0JhbGwuZ2FtZVJlc2V0KCk7ICBcbn0gICBcblxuc2V0SW50ZXJ2YWwoZHJhdywgMTApO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCJpbXBvcnQge2NhbnZhc30gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyfSBmcm9tICcuL2Jhcic7XG5cblxubGV0IGdldE1vdXNlUG9zID0gKGNhbnZhcywgZXZ0KT0+IHtcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuXG5leHBvcnQgbGV0IHBvc2l0aW9uWSA9IDIwMDtcbiAgICAgIFxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldnQpPT4ge1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAgIHBvc2l0aW9uWSA9IG1vdXNlUG9zLnkgLSAobGVmdEJhci5iYXJIZWlnaHQgLyAyKTtcbiAgICAgICAgbGVmdEJhci5iYXJZID0gcG9zaXRpb25ZO1xuICAgICAgfSk7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9sZWZ0QmFySGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=