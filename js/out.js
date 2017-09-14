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
      this.dx = -this.dx;
      //changing ball direction after scoring
      if (playerScore % 2 == 0) {
        this.dy = -2;
      } else {
        this.dy = 2;
      }
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

var tennisBall = exports.tennisBall = new Ball(_canvas.canvas.width / 2, _canvas.canvas.height / 2, 10, 5, 2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzRiNWM3ODY4NzU1ODhkNDUxM2EiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL2xlZnRCYXJIYW5kbGVyLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZHJhd0NhbnZhcyIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3TmV0IiwiaSIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImJhbGxZIiwibGVmdEJhciIsInJpZ2h0QmFyIiwicGxheWVyU2NvcmUiLCJhaVNjb3JlIiwid2luIiwid2luU2NvcmUiLCJCYWxsIiwiYmFsbFgiLCJiYWxsUmFkaXVzIiwiZHgiLCJkeSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImJvdW5jZVkiLCJ0ZW5uaXNCYWxsIiwicmVzZXRCYWxsIiwiZmlsbFRleHQiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXciLCJkcmF3QmFsbCIsImRyYXdCYXIiLCJhaU1vdmVtZW50Iiwic2NvcmUiLCJnYW1lUmVzZXQiLCJzZXRJbnRlcnZhbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJtb3VzZVBvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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YyxhQUFRdkMsU0FBUixHQUFvQixDQUE5QztBQUNBLGVBQVFGLElBQVIsR0FBZTRDLFNBQWY7QUFDRCxDQUpQLEUiLCJmaWxlIjoiLi9qcy9vdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NGI1Yzc4Njg3NTU4OGQ0NTEzYSIsImV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVubmlzQ2FudmFzJyk7XG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbmNhbnZhcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuY2FudmFzLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nO1xuXG5leHBvcnQgbGV0IGRyYXdDYW52YXMgPSAoKT0+IHsgIFxuICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGxldCBkcmF3TmV0ID0gKCk9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzLmhlaWdodDsgaSArPSAzMCkge1xuICBjdHguZmlsbFJlY3QoY2FudmFzLndpZHRoIC8gMiAtIDEsIGksIDIsIDIwKTtcbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NhbnZhcy5qcyIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7cG9zaXRpb25ZfSBmcm9tICcuL2xlZnRCYXJIYW5kbGVyJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsQW5kU2NvcmUnO1xuXG5jbGFzcyBCYXIge1xuICBjb25zdHJ1Y3RvcihiYXJYLCBiYXJZLCBiYXJXaWR0aCwgYmFySGVpZ2h0KXtcblxuICAgIHRoaXMuYmFyWCA9IGJhclg7XG4gICAgdGhpcy5iYXJZID0gYmFyWTsgICAgXG4gICAgdGhpcy5iYXJXaWR0aCA9IGJhcldpZHRoO1xuICAgIHRoaXMuYmFySGVpZ2h0ID0gYmFySGVpZ2h0O1xuICB9XG4gIFxuICBkcmF3QmFyKCkge1xuICAgIGN0eC5yZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoLCB0aGlzLmJhckhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguZmlsbCgpO1xuICB9XG4gIFxuICBhaU1vdmVtZW50KCkge1xuICAgIC8vYWkgYmFyIGZvbGxvd3MgYmFsbFxuICAgIGlmICh0aGlzLmJhclkgKyAodGhpcy5iYXJIZWlnaHQgLyAyKSA8IHRlbm5pc0JhbGwuYmFsbFkgLSAzMCkge1xuICAgICAgdGhpcy5iYXJZICs9IDg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmFyWSArICh0aGlzLmJhckhlaWdodCAvIDIpID4gdGVubmlzQmFsbC5iYWxsWSArIDMwKSB7XG4gICAgICB0aGlzLmJhclkgLT0gODtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgbGVmdEJhciA9IG5ldyBCYXIoMTAsIHBvc2l0aW9uWSwgMTAsIDEwMCk7XG5leHBvcnQgbGV0IHJpZ2h0QmFyID0gbmV3IEJhcihjYW52YXMud2lkdGggLSAyMCwgKGNhbnZhcy5oZWlnaHQgLSAxMDApIC8gMiwgMTAsIDEwMCk7XG5cbiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYXIuanMiLCIvL21vdXNlIGNsaWNrIGV2ZW50IGZvciBnYW1lIHJlc3RhcnQgcGxhY2VkIGF0IHRoZSBlbmQgb2YgdGhlIGNvZGVcblxuaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5sZXQgcGxheWVyU2NvcmUgPSAwO1xubGV0IGFpU2NvcmUgPSAwO1xubGV0IHdpbiA9IGZhbHNlO1xubGV0IHdpblNjb3JlID0gMztcblxuY2xhc3MgQmFsbCB7XG4gIGNvbnN0cnVjdG9yKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgZHgsIGR5KSB7XG4gICAgXG4gICAgdGhpcy5iYWxsWCA9IGJhbGxYO1xuICAgIHRoaXMuYmFsbFkgPSBiYWxsWTtcbiAgICB0aGlzLmJhbGxSYWRpdXMgPSBiYWxsUmFkaXVzO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR5ID0gZHk7XG4gIH1cbiAgXG4gIGRyYXdCYWxsKCkgeyAgICBcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHguYXJjKHRoaXMuYmFsbFgsIHRoaXMuYmFsbFksIHRoaXMuYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgY3R4LmNsb3NlUGF0aCgpOyBcbiAgICBcbiAgICAvL2FkZGluZyBiYWxsIG1vdmVtZW50XG4gICAgdGhpcy5iYWxsWCArPSB0aGlzLmR4XG4gICAgdGhpcy5iYWxsWSArPSB0aGlzLmR5ICAgIFxuICAgIFxuICAgIGxldCBib3VuY2VZOyAgICBcbiAgICBcbiAgICBpZiAodGhpcy5iYWxsWCA+PSBjYW52YXMud2lkdGggLSB0aGlzLmJhbGxSYWRpdXMgLSAocmlnaHRCYXIuYmFyV2lkdGggKiAyKSkge1xuICAgICAgICAvL2JvdW5jaW5nIG9mIHRoZSByaWdodCBiYXJcbiAgICAgIGlmICh0aGlzLmJhbGxZID49IHJpZ2h0QmFyLmJhclkgLSB0aGlzLmJhbGxSYWRpdXMgJiYgdGhpcy5iYWxsWSA8PSByaWdodEJhci5iYXJZICsgcmlnaHRCYXIuYmFySGVpZ2h0ICsgdGhpcy5iYWxsUmFkaXVzICYmIHRoaXMuYmFsbFggPCBjYW52YXMud2lkdGggLSAocmlnaHRCYXIuYmFyV2lkdGggKiAyKSkge1xuICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7ICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyB0aGUgY2xvc2VyIHRvIHRoZSBlZGdlIHRoZSBoaWdoZXIgYm91bmNlIGFuZ2xlIGFuZCBmYXN0ZXIgYmFsbCBtb3ZlbWVudCAgICAgICAgIFxuICAgICAgICBib3VuY2VZID0gdGhpcy5iYWxsWSAtIChyaWdodEJhci5iYXJZICsgcmlnaHRCYXIuYmFySGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuZHkgPSBib3VuY2VZICogMC4zO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5iYWxsWCA+IGNhbnZhcy53aWR0aCAtIHJpZ2h0QmFyLmJhcldpZHRoKSB7ICAgICAgICBcbiAgICAgICAgcGxheWVyU2NvcmUrKztcbiAgICAgICAgdGVubmlzQmFsbC5yZXNldEJhbGwoKTsgICAgICAgIFxuICAgICAgICB9ICAgICAgXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFggPD0gdGhpcy5iYWxsUmFkaXVzICsgKGxlZnRCYXIuYmFyV2lkdGggKiAyKSkge1xuICAgICAgLy9ib3VuY2luZyBvZiB0aGUgbGVmdCBiYXJcbiAgICAgIGlmICh0aGlzLmJhbGxZID49IGxlZnRCYXIuYmFyWSAtIHRoaXMuYmFsbFJhZGl1cyAmJiB0aGlzLmJhbGxZIDw9IGxlZnRCYXIuYmFyWSArIGxlZnRCYXIuYmFySGVpZ2h0ICsgdGhpcy5iYWxsUmFkaXVzICYmIHRoaXMuYmFsbFggPiBsZWZ0QmFyLmJhcldpZHRoICogMikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoZSBjbG9zZXIgdG8gdGhlIGVkZ2UgdGhlIGhpZ2hlciBib3VuY2UgYW5nbGUgYW5kIGZhc3RlciBiYWxsIG1vdmVtZW50XG4gICAgICAgIGJvdW5jZVkgPSB0aGlzLmJhbGxZIC0gKGxlZnRCYXIuYmFyWSArIGxlZnRCYXIuYmFySGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuZHkgPSBib3VuY2VZICogMC4zO1xuICAgICAgfSAgICAgXG4gICAgICBlbHNlIGlmICh0aGlzLmJhbGxYIDwgbGVmdEJhci5iYXJXaWR0aCkgeyAgICAgXG4gICAgICAgIGFpU2NvcmUrKztcbiAgICAgICAgdGVubmlzQmFsbC5yZXNldEJhbGwoKTsgICAgICAgICBcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIFxuICAgIC8vYm91Y2luZyBvZiB0aGUgYm90dG9tXG4gICAgZWxzZSBpZiAodGhpcy5iYWxsWSArIHRoaXMuYmFsbFJhZGl1cyA+PSBjYW52YXMuaGVpZ2h0KSB7XG4gICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIHRvcFxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgPCAwICsgdGhpcy5iYWxsUmFkaXVzKSB7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XG4gICAgfVxuICB9XG4gIFxuXG4gIHJlc2V0QmFsbCgpIHtcbiAgICAvL3dpbiBjb25kaXRpb25zICAgICBcbiAgICBpZiAocGxheWVyU2NvcmUgPj0gd2luU2NvcmUgfHwgYWlTY29yZSA+PSB3aW5TY29yZSkge1xuICAgICAgd2luID0gdHJ1ZTtcbiAgICB9IFxuXG4gICAgLy9yZXNldGluZyBiYWxsIHBvc2l0aW9uIHRvIHRoZSBjZW50ZXIgYWZ0ZXIgc2NvcmluZyBhbmQgY2hhbmdpbmcgYmFsbCBkaXJlY3Rpb25cbiAgICB0aGlzLmJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICB0aGlzLmJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgdGhpcy5keCA9IC0gdGhpcy5keDtcbiAgICAvL2NoYW5naW5nIGJhbGwgZGlyZWN0aW9uIGFmdGVyIHNjb3JpbmdcbiAgICBpZiAocGxheWVyU2NvcmUgJSAyID09IDApIHtcbiAgICAgIHRoaXMuZHkgPSAtMjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmR5ID0gMjtcbiAgICB9ICAgXG4gIH1cbiAgXG4gIGdhbWVSZXNldCgpIHtcbiAgICAgIGlmICh3aW4pIHtcbiAgICAgICAgLy9kaXNwbGF5aW5nIHBsYXllciB3aW5cbiAgICAgICAgaWYgKHBsYXllclNjb3JlID49IHdpblNjb3JlKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCdZb3UgV29uIScsIDUwLCAyNTApO1xuICAgICAgICB9XG4gICAgICAgIC8vZGlzcGxheWluZyBjb21wdXRlciB3aW5cbiAgICAgICAgZWxzZSBpZiAoYWlTY29yZSA+PSB3aW5TY29yZSkge1xuICAgICAgICAgIGN0eC5maWxsVGV4dCgnQ29tcHV0ZXIgV29uIScsIDQ1MCwgMjUwKTtcbiAgICAgICAgfVxuICAgICAgY3R4LmZvbnQgPSAnMzBweCBDb3VyaWVyIE5ldyc7XG4gICAgICBjdHguZmlsbFRleHQoJ0NsaWNrIHRvIHJlc3RhcnQnLCA1MCwgNDAwKTtcbiAgICAgIHRoaXMuYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyOyAgXG4gICAgfSAgICBcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIC8vZHJhd2luZyBzY29yZVxuICBzY29yZSgpIHtcbiAgICBjdHguZm9udCA9ICczMHB4IENvdXJpZXIgTmV3JzsgIFxuICAgIGN0eC5maWxsVGV4dChwbGF5ZXJTY29yZSwgMTAwLCAxMDApO1xuICAgIGN0eC5maWxsVGV4dChhaVNjb3JlLCBjYW52YXMud2lkdGggLSAxMDAsIDEwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCB0ZW5uaXNCYWxsID0gbmV3IEJhbGwoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDEwLCA1LCAyKTtcblxuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCk9PiB7XG4gIGlmICh3aW4pIHtcbiAgICBwbGF5ZXJTY29yZSA9IDA7XG4gICAgYWlTY29yZSA9IDA7XG4gICAgd2luID0gZmFsc2U7XG4gIH1cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2JhbGxBbmRTY29yZS5qcyIsImltcG9ydCB7ZHJhd0NhbnZhcywgZHJhd05ldH0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHt0ZW5uaXNCYWxsfSBmcm9tICcuL2JhbGxBbmRTY29yZSc7XG5pbXBvcnQge2xlZnRCYXIsIHJpZ2h0QmFyfSBmcm9tICcuL2Jhcic7XG5cbmxldCBkcmF3ID0gKCk9PiB7ICBcbiAgXG4gIGRyYXdDYW52YXMoKTsgICAgXG4gIHRlbm5pc0JhbGwuZHJhd0JhbGwoKTtcbiAgbGVmdEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmRyYXdCYXIoKTtcbiAgcmlnaHRCYXIuYWlNb3ZlbWVudCgpOyBcbiAgdGVubmlzQmFsbC5zY29yZSgpO1xuICBkcmF3TmV0KCk7XG4gIHRlbm5pc0JhbGwuZ2FtZVJlc2V0KCk7ICBcbn0gICBcblxuc2V0SW50ZXJ2YWwoZHJhdywgMTApO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCJpbXBvcnQge2NhbnZhc30gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHtsZWZ0QmFyfSBmcm9tICcuL2Jhcic7XG5cblxubGV0IGdldE1vdXNlUG9zID0gKGNhbnZhcywgZXZ0KT0+IHtcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZXZ0LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuXG5leHBvcnQgbGV0IHBvc2l0aW9uWSA9IDIwMDtcbiAgICAgIFxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldnQpPT4ge1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCk7XG4gICAgICAgIHBvc2l0aW9uWSA9IG1vdXNlUG9zLnkgLSAobGVmdEJhci5iYXJIZWlnaHQgLyAyKTtcbiAgICAgICAgbGVmdEJhci5iYXJZID0gcG9zaXRpb25ZO1xuICAgICAgfSk7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9sZWZ0QmFySGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=