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

canvas.style.display = 'block';
canvas.style.marginLeft = 'auto';
canvas.style.marginRight = 'auto';

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
  _bar.leftBar.barY = positionY;
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTJjMDRkNzU1ODYxNzU1OTJmMGQiLCJ3ZWJwYWNrOi8vLy4vanMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL2pzL2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL2xlZnRCYXJIYW5kbGVyLmpzIl0sIm5hbWVzIjpbImRyYXdDYW52YXMiLCJkcmF3TmV0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsIkJhciIsImJhclgiLCJiYXJZIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJyZWN0IiwiZmlsbCIsImJhbGxZIiwibGVmdEJhciIsInJpZ2h0QmFyIiwicGxheWVyU2NvcmUiLCJhaVNjb3JlIiwid2luIiwid2luU2NvcmUiLCJCYWxsIiwiYmFsbFgiLCJiYWxsUmFkaXVzIiwiZHgiLCJkeSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImJvdW5jZVkiLCJ0ZW5uaXNCYWxsIiwicmVzZXRCYWxsIiwiZmlsbFRleHQiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXciLCJkcmF3QmFsbCIsImRyYXdCYXIiLCJhaU1vdmVtZW50Iiwic2NvcmUiLCJnYW1lUmVzZXQiLCJzZXRJbnRlcnZhbCIsImdldE1vdXNlUG9zIiwiZXZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJwb3NpdGlvblkiLCJtb3VzZVBvcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O1FDdERnQkEsVSxHQUFBQSxVO1FBS0FDLE8sR0FBQUEsTztBQVpULElBQU1DLDBCQUFTQyxTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxJQUFNQyxvQkFBTUgsT0FBT0ksVUFBUCxDQUFrQixJQUFsQixDQUFaOztBQUVQSixPQUFPSyxLQUFQLENBQWFDLE9BQWIsR0FBdUIsT0FBdkI7QUFDQU4sT0FBT0ssS0FBUCxDQUFhRSxVQUFiLEdBQTBCLE1BQTFCO0FBQ0FQLE9BQU9LLEtBQVAsQ0FBYUcsV0FBYixHQUEyQixNQUEzQjs7QUFFTyxTQUFTVixVQUFULEdBQXNCO0FBQzNCSyxNQUFJTSxTQUFKLEdBQWdCLE1BQWhCO0FBQ0FOLE1BQUlPLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CVixPQUFPVyxLQUExQixFQUFpQ1gsT0FBT1ksTUFBeEM7QUFDRDs7QUFFTSxTQUFTYixPQUFULEdBQWtCO0FBQ3ZCLE9BQUssSUFBSWMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYixPQUFPWSxNQUEzQixFQUFtQ0MsS0FBSyxFQUF4QyxFQUE0QztBQUM1Q1YsUUFBSU8sUUFBSixDQUFhVixPQUFPVyxLQUFQLEdBQWUsQ0FBZixHQUFtQixDQUFoQyxFQUFtQ0UsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUMsRUFBekM7QUFDQztBQUNGOztBQUdELHVCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOztBQUNBOztBQUNBOzs7O0lBRU1DLEc7QUFDSixlQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsUUFBeEIsRUFBa0NDLFNBQWxDLEVBQTRDO0FBQUE7O0FBRTFDLFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtFLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7Ozs4QkFFUztBQUNSLGtCQUFJRSxJQUFKLENBQVMsS0FBS0osSUFBZCxFQUFvQixLQUFLQyxJQUF6QixFQUErQixLQUFLQyxRQUFwQyxFQUE4QyxLQUFLQyxTQUFuRDtBQUNBLGtCQUFJVCxTQUFKLEdBQWdCLE1BQWhCO0FBQ0Esa0JBQUlXLElBQUo7QUFDRDs7O2lDQUVZO0FBQ1g7QUFDQSxVQUFJLEtBQUtKLElBQUwsR0FBYSxLQUFLRSxTQUFMLEdBQWlCLENBQTlCLEdBQW1DLHlCQUFXRyxLQUFYLEdBQW1CLEVBQTFELEVBQThEO0FBQzVELGFBQUtMLElBQUwsSUFBYSxDQUFiO0FBQ0QsT0FGRCxNQUdLLElBQUksS0FBS0EsSUFBTCxHQUFhLEtBQUtFLFNBQUwsR0FBaUIsQ0FBOUIsR0FBbUMseUJBQVdHLEtBQVgsR0FBbUIsRUFBMUQsRUFBNkQ7QUFDaEUsYUFBS0wsSUFBTCxJQUFhLENBQWI7QUFDRDtBQUNGOzs7Ozs7QUFFSSxJQUFJTSw0QkFBVSxJQUFJUixHQUFKLENBQVEsRUFBUiw2QkFBdUIsRUFBdkIsRUFBMkIsR0FBM0IsQ0FBZDtBQUNBLElBQUlTLDhCQUFXLElBQUlULEdBQUosQ0FBUSxlQUFPSCxLQUFQLEdBQWUsRUFBdkIsRUFBMkIsQ0FBQyxlQUFPQyxNQUFQLEdBQWdCLEdBQWpCLElBQXdCLENBQW5ELEVBQXNELEVBQXRELEVBQTBELEdBQTFELENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7cWpCQzlCUDs7QUFFQTs7QUFDQTs7OztBQUVBLElBQUlZLGNBQWMsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVLENBQWQ7QUFDQSxJQUFJQyxNQUFNLEtBQVY7QUFDQSxJQUFJQyxXQUFXLENBQWY7O0lBRU1DLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQlIsS0FBbkIsRUFBMEJTLFVBQTFCLEVBQXNDQyxFQUF0QyxFQUEwQ0MsRUFBMUMsRUFBOEM7QUFBQTs7QUFFNUMsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS1IsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS1MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDRDs7OzsrQkFFVTtBQUNULGtCQUFJQyxTQUFKO0FBQ0Esa0JBQUlDLEdBQUosQ0FBUSxLQUFLTCxLQUFiLEVBQW9CLEtBQUtSLEtBQXpCLEVBQWdDLEtBQUtTLFVBQXJDLEVBQWlELENBQWpELEVBQW9ESyxLQUFLQyxFQUFMLEdBQVUsQ0FBOUQ7QUFDQSxrQkFBSTNCLFNBQUosR0FBZ0IsTUFBaEI7QUFDQSxrQkFBSTRCLFNBQUo7O0FBRUE7QUFDQSxXQUFLUixLQUFMLElBQWMsS0FBS0UsRUFBbkI7QUFDQSxXQUFLVixLQUFMLElBQWMsS0FBS1csRUFBbkI7O0FBRUEsVUFBSU0sZ0JBQUo7O0FBRUEsVUFBSSxLQUFLVCxLQUFMLElBQWMsZUFBT2xCLEtBQXpCLEVBQWdDO0FBQzlCO0FBQ0EsWUFBSSxLQUFLVSxLQUFMLEdBQWEsY0FBU0wsSUFBdEIsSUFBOEIsS0FBS0ssS0FBTCxHQUFhLGNBQVNMLElBQVQsR0FBZ0IsY0FBU0UsU0FBeEUsRUFBbUY7QUFDakYsZUFBS2EsRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7O0FBRUE7QUFDQU8sb0JBQVUsS0FBS2pCLEtBQUwsSUFBYyxjQUFTTCxJQUFULEdBQWdCLGNBQVNFLFNBQVQsR0FBcUIsQ0FBbkQsQ0FBVjtBQUNBLGVBQUtjLEVBQUwsR0FBVU0sVUFBVSxHQUFwQjtBQUNELFNBTkQsTUFPSztBQUNIZDtBQUNBZSxxQkFBV0MsU0FBWDtBQUNEO0FBQ0YsT0FiRCxNQWNLLElBQUksS0FBS1gsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ3ZCO0FBQ0EsWUFBSSxLQUFLUixLQUFMLEdBQWEsYUFBUUwsSUFBckIsSUFBNkIsS0FBS0ssS0FBTCxHQUFhLGFBQVFMLElBQVIsR0FBZSxhQUFRRSxTQUFyRSxFQUFnRjtBQUM5RSxlQUFLYSxFQUFMLEdBQVUsQ0FBQyxLQUFLQSxFQUFoQjs7QUFFQTtBQUNBTyxvQkFBVSxLQUFLakIsS0FBTCxJQUFjLGFBQVFMLElBQVIsR0FBZSxhQUFRRSxTQUFSLEdBQW9CLENBQWpELENBQVY7QUFDQSxlQUFLYyxFQUFMLEdBQVVNLFVBQVUsR0FBcEI7QUFDRCxTQU5ELE1BT0s7QUFDSGI7QUFDQWMscUJBQVdDLFNBQVg7QUFDRDtBQUNGO0FBQ0Q7QUFkSyxXQWVBLElBQUksS0FBS25CLEtBQUwsR0FBYSxLQUFLUyxVQUFsQixJQUFnQyxlQUFPbEIsTUFBM0MsRUFBbUQ7QUFDeEQsZUFBS29CLEVBQUwsR0FBVSxDQUFDLEtBQUtBLEVBQWhCO0FBQ0M7QUFDRDtBQUhLLGFBSUEsSUFBSSxLQUFLWCxLQUFMLEdBQWEsSUFBSSxLQUFLUyxVQUExQixFQUFzQztBQUN6QyxpQkFBS0UsRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDRDtBQUNGOzs7Z0NBR1c7QUFDVjtBQUNBLFVBQUlSLGVBQWVHLFFBQWYsSUFBMkJGLFdBQVdFLFFBQTFDLEVBQW9EO0FBQ2xERCxjQUFNLElBQU47QUFDRDs7QUFFRDtBQUNBLFdBQUtHLEtBQUwsR0FBYSxlQUFPbEIsS0FBUCxHQUFlLENBQTVCO0FBQ0EsV0FBS1UsS0FBTCxHQUFhLGVBQU9ULE1BQVAsR0FBZ0IsQ0FBN0I7QUFDQSxXQUFLb0IsRUFBTCxHQUFVLENBQUMsQ0FBWDtBQUNBLFdBQUtELEVBQUwsR0FBVSxDQUFFLEtBQUtBLEVBQWpCO0FBQ0Q7OztnQ0FFVztBQUNSLFVBQUlMLEdBQUosRUFBUztBQUNQO0FBQ0EsWUFBSUYsZUFBZUcsUUFBbkIsRUFBNkI7QUFDM0Isc0JBQUljLFFBQUosQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLEVBQTZCLEdBQTdCO0FBQ0Q7QUFDRDtBQUhBLGFBSUssSUFBSWhCLFdBQVdFLFFBQWYsRUFBeUI7QUFDNUIsd0JBQUljLFFBQUosQ0FBYSxlQUFiLEVBQThCLEdBQTlCLEVBQW1DLEdBQW5DO0FBQ0Q7QUFDSCxvQkFBSUMsSUFBSixHQUFXLGtCQUFYO0FBQ0Esb0JBQUlELFFBQUosQ0FBYSxrQkFBYixFQUFpQyxFQUFqQyxFQUFxQyxHQUFyQztBQUNBLGFBQUtaLEtBQUwsR0FBYSxlQUFPbEIsS0FBUCxHQUFlLENBQTVCO0FBQ0EsYUFBS1UsS0FBTCxHQUFhLGVBQU9ULE1BQVAsR0FBZ0IsQ0FBN0I7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQ7Ozs7NEJBQ1E7QUFDTixrQkFBSThCLElBQUosR0FBVyxrQkFBWDtBQUNBLGtCQUFJRCxRQUFKLENBQWFqQixXQUFiLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CO0FBQ0Esa0JBQUlpQixRQUFKLENBQWFoQixPQUFiLEVBQXNCLGVBQU9kLEtBQVAsR0FBZSxHQUFyQyxFQUEwQyxHQUExQztBQUNEOzs7Ozs7QUFHSSxJQUFJNEIsa0NBQWEsSUFBSVgsSUFBSixDQUFTLGVBQU9qQixLQUFQLEdBQWUsQ0FBeEIsRUFBMkIsZUFBT0MsTUFBUCxHQUFnQixDQUEzQyxFQUE4QyxFQUE5QyxFQUFrRCxDQUFsRCxFQUFxRCxDQUFDLENBQXRELENBQWpCOztBQUdQLGVBQU8rQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxZQUFXO0FBQzlDLE1BQUlqQixHQUFKLEVBQVM7QUFDUEYsa0JBQWMsQ0FBZDtBQUNBQyxjQUFVLENBQVY7QUFDQUMsVUFBTSxLQUFOO0FBQ0Q7QUFDRixDQU5ELEU7Ozs7Ozs7OztBQ2pIQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTa0IsSUFBVCxHQUFnQjs7QUFFZDtBQUNBLDJCQUFXQyxRQUFYO0FBQ0EsZUFBUUMsT0FBUjtBQUNBLGdCQUFTQSxPQUFUO0FBQ0EsZ0JBQVNDLFVBQVQ7QUFDQSwyQkFBV0MsS0FBWDtBQUNBO0FBQ0EsMkJBQVdDLFNBQVg7QUFDRDs7QUFFREMsWUFBWU4sSUFBWixFQUFrQixFQUFsQixFOzs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFDQTs7QUFHQSxTQUFTTyxXQUFULENBQXFCbkQsTUFBckIsRUFBNkJvRCxHQUE3QixFQUFrQztBQUMxQixNQUFJakMsT0FBT25CLE9BQU9xRCxxQkFBUCxFQUFYO0FBQ0EsU0FBTztBQUNMQyxPQUFHRixJQUFJRyxPQUFKLEdBQWNwQyxLQUFLcUMsSUFEakI7QUFFTEMsT0FBR0wsSUFBSU0sT0FBSixHQUFjdkMsS0FBS3dDO0FBRmpCLEdBQVA7QUFJRDs7QUFFQSxJQUFJQyxnQ0FBWSxHQUFoQjs7QUFFUCxlQUFPakIsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBU1MsR0FBVCxFQUFjO0FBQzNDLE1BQUlTLFdBQVdWLDRCQUFvQkMsR0FBcEIsQ0FBZjtBQUNBLFVBSkdRLFNBSUgsZUFBWUMsU0FBU0osQ0FBVCxHQUFjLGFBQVF2QyxTQUFSLEdBQW9CLENBQTlDO0FBQ0EsZUFBUUYsSUFBUixHQUFlNEMsU0FBZjtBQUNELENBSlAsRSIsImZpbGUiOiIuL2pzL291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEyYzA0ZDc1NTg2MTc1NTkyZjBkIiwiZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW5uaXNDYW52YXMnKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuY2FudmFzLnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XG5jYW52YXMuc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0byc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FudmFzKCkgeyAgXG4gIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd05ldCgpe1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhcy5oZWlnaHQ7IGkgKz0gMzApIHtcbiAgY3R4LmZpbGxSZWN0KGNhbnZhcy53aWR0aCAvIDIgLSAxLCBpLCAyLCAyMCk7XG4gIH1cbn1cblxuXG4vL2hvdyB0byBjZW50ZXIgY2FudmFzP1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NhbnZhcy5qcyIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7cG9zaXRpb25ZfSBmcm9tICcuL2xlZnRCYXJIYW5kbGVyJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsQW5kU2NvcmUnO1xuXG5jbGFzcyBCYXIge1xuICBjb25zdHJ1Y3RvcihiYXJYLCBiYXJZLCBiYXJXaWR0aCwgYmFySGVpZ2h0KXtcblxuICAgIHRoaXMuYmFyWCA9IGJhclg7XG4gICAgdGhpcy5iYXJZID0gYmFyWTtcbiAgICB0aGlzLmJhckhlaWdodCA9IGJhckhlaWdodDtcbiAgICB0aGlzLmJhcldpZHRoID0gYmFyV2lkdGg7XG4gIH1cbiAgXG4gIGRyYXdCYXIoKSB7XG4gICAgY3R4LnJlY3QodGhpcy5iYXJYLCB0aGlzLmJhclksIHRoaXMuYmFyV2lkdGgsIHRoaXMuYmFySGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbiAgXG4gIGFpTW92ZW1lbnQoKSB7XG4gICAgLy9haSBiYXIgZm9sbG93cyBiYWxsXG4gICAgaWYgKHRoaXMuYmFyWSArICh0aGlzLmJhckhlaWdodCAvIDIpIDwgdGVubmlzQmFsbC5iYWxsWSAtIDMwKSB7XG4gICAgICB0aGlzLmJhclkgKz0gODtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5iYXJZICsgKHRoaXMuYmFySGVpZ2h0IC8gMikgPiB0ZW5uaXNCYWxsLmJhbGxZICsgMzApe1xuICAgICAgdGhpcy5iYXJZIC09IDg7XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGxlZnRCYXIgPSBuZXcgQmFyKDEwLCBwb3NpdGlvblksIDEwLCAxMDApO1xuZXhwb3J0IGxldCByaWdodEJhciA9IG5ldyBCYXIoY2FudmFzLndpZHRoIC0gMjAsIChjYW52YXMuaGVpZ2h0IC0gMTAwKSAvIDIsIDEwLCAxMDApO1xuXG4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYmFyLmpzIiwiLy9tb3VzZSBjbGljayBldmVudCBmb3IgZ2FtZSByZXN0YXJ0IHBsYWNlZCBhdCB0aGUgZW5kIG9mIHRoZSBjb2RlXG5cbmltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7bGVmdEJhciwgcmlnaHRCYXJ9IGZyb20gJy4vYmFyJztcblxubGV0IHBsYXllclNjb3JlID0gMDtcbmxldCBhaVNjb3JlID0gMDtcbmxldCB3aW4gPSBmYWxzZTtcbmxldCB3aW5TY29yZSA9IDM7XG5cbmNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3RvcihiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGR4LCBkeSkge1xuICAgIFxuICAgIHRoaXMuYmFsbFggPSBiYWxsWDtcbiAgICB0aGlzLmJhbGxZID0gYmFsbFk7XG4gICAgdGhpcy5iYWxsUmFkaXVzID0gYmFsbFJhZGl1cztcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keSA9IGR5O1xuICB9XG4gIFxuICBkcmF3QmFsbCgpIHsgICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LmFyYyh0aGlzLmJhbGxYLCB0aGlzLmJhbGxZLCB0aGlzLmJhbGxSYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgXG4gICAgLy9hZGRpbmcgYmFsbCBtb3ZlbWVudFxuICAgIHRoaXMuYmFsbFggKz0gdGhpcy5keFxuICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5keSAgICBcbiAgICBcbiAgICBsZXQgYm91bmNlWTtcbiAgICBcbiAgICBpZiAodGhpcy5iYWxsWCA+PSBjYW52YXMud2lkdGgpIHtcbiAgICAgIC8vYm91bmNpbmcgb2YgdGhlIHJpZ2h0IGJhclxuICAgICAgaWYgKHRoaXMuYmFsbFkgPiByaWdodEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCByaWdodEJhci5iYXJZICsgcmlnaHRCYXIuYmFySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoZSBjbG9zZXIgdG8gdGhlIGVkZ2UgdGhlIGhpZ2hlciBib3VuY2UgYW5nbGUgYW5kIGZhc3RlciBiYWxsIG1vdmVtZW50ICAgICAgICAgXG4gICAgICAgIGJvdW5jZVkgPSB0aGlzLmJhbGxZIC0gKHJpZ2h0QmFyLmJhclkgKyByaWdodEJhci5iYXJIZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5keSA9IGJvdW5jZVkgKiAwLjM7XG4gICAgICB9XG4gICAgICBlbHNlIHsgICAgICAgIFxuICAgICAgICBwbGF5ZXJTY29yZSsrO1xuICAgICAgICB0ZW5uaXNCYWxsLnJlc2V0QmFsbCgpOyAgICAgICAgXG4gICAgICB9ICAgICAgXG4gICAgfSAgICBcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxYIDwgMCkge1xuICAgICAgLy9ib3VuY2luZyBvZiB0aGUgbGVmdCBiYXJcbiAgICAgIGlmICh0aGlzLmJhbGxZID4gbGVmdEJhci5iYXJZICYmIHRoaXMuYmFsbFkgPCBsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCkge1xuICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGUgY2xvc2VyIHRvIHRoZSBlZGdlIHRoZSBoaWdoZXIgYm91bmNlIGFuZ2xlIGFuZCBmYXN0ZXIgYmFsbCBtb3ZlbWVudFxuICAgICAgICBib3VuY2VZID0gdGhpcy5iYWxsWSAtIChsZWZ0QmFyLmJhclkgKyBsZWZ0QmFyLmJhckhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmR5ID0gYm91bmNlWSAqIDAuMztcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAgICAgXG4gICAgICAgIGFpU2NvcmUrKztcbiAgICAgICAgdGVubmlzQmFsbC5yZXNldEJhbGwoKTsgICAgICAgICBcbiAgICAgIH0gIFxuICAgIH1cbiAgICAvL2JvdWNpbmcgb2YgdGhlIGJvdHRvbVxuICAgIGVsc2UgaWYgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxSYWRpdXMgPj0gY2FudmFzLmhlaWdodCkge1xuICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICB9XG4gICAgLy9ib3VjaW5nIG9mIHRoZSB0b3BcbiAgICBlbHNlIGlmICh0aGlzLmJhbGxZIDwgMCArIHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgIH1cbiAgfVxuICBcblxuICByZXNldEJhbGwoKSB7XG4gICAgLy93aW4gY29uZGl0aW9ucyAgICAgXG4gICAgaWYgKHBsYXllclNjb3JlID49IHdpblNjb3JlIHx8IGFpU2NvcmUgPj0gd2luU2NvcmUpIHtcbiAgICAgIHdpbiA9IHRydWU7XG4gICAgfSBcblxuICAgIC8vcmVzZXRpbmcgYmFsbCBwb3NpdGlvbiB0byB0aGUgY2VudGVyIGFmdGVyIHNjb3JpbmcgYW5kIGNoYW5naW5nIGJhbGwgZGlyZWN0aW9uXG4gICAgdGhpcy5iYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHRoaXMuZHkgPSAtMjsgXG4gICAgdGhpcy5keCA9IC0gdGhpcy5keDsgICAgXG4gIH1cbiAgXG4gIGdhbWVSZXNldCgpIHtcbiAgICAgIGlmICh3aW4pIHtcbiAgICAgICAgLy9kaXNwbGF5aW5nIHBsYXllciB3aW5cbiAgICAgICAgaWYgKHBsYXllclNjb3JlID49IHdpblNjb3JlKSB7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KCdZb3UgV29uIScsIDUwLCAyNTApO1xuICAgICAgICB9XG4gICAgICAgIC8vZGlzcGxheWluZyBjb21wdXRlciB3aW5cbiAgICAgICAgZWxzZSBpZiAoYWlTY29yZSA+PSB3aW5TY29yZSkge1xuICAgICAgICAgIGN0eC5maWxsVGV4dCgnQ29tcHV0ZXIgV29uIScsIDQ1MCwgMjUwKTtcbiAgICAgICAgfVxuICAgICAgY3R4LmZvbnQgPSAnMzBweCBDb3VyaWVyIE5ldyc7XG4gICAgICBjdHguZmlsbFRleHQoJ0NsaWNrIHRvIHJlc3RhcnQnLCA1MCwgNDAwKTtcbiAgICAgIHRoaXMuYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgdGhpcy5iYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyOyAgXG4gICAgfSAgICBcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIC8vZHJhd2luZyBzY29yZVxuICBzY29yZSgpIHtcbiAgICBjdHguZm9udCA9ICczMHB4IENvdXJpZXIgTmV3JzsgIFxuICAgIGN0eC5maWxsVGV4dChwbGF5ZXJTY29yZSwgMTAwLCAxMDApO1xuICAgIGN0eC5maWxsVGV4dChhaVNjb3JlLCBjYW52YXMud2lkdGggLSAxMDAsIDEwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCB0ZW5uaXNCYWxsID0gbmV3IEJhbGwoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDEwLCA1LCAtMik7XG5cblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuICBpZiAod2luKSB7XG4gICAgcGxheWVyU2NvcmUgPSAwO1xuICAgIGFpU2NvcmUgPSAwO1xuICAgIHdpbiA9IGZhbHNlO1xuICB9XG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iYWxsQW5kU2NvcmUuanMiLCJpbXBvcnQge2RyYXdDYW52YXMsIGRyYXdOZXR9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7dGVubmlzQmFsbH0gZnJvbSAnLi9iYWxsQW5kU2NvcmUnO1xuaW1wb3J0IHtsZWZ0QmFyLCByaWdodEJhcn0gZnJvbSAnLi9iYXInO1xuXG5mdW5jdGlvbiBkcmF3KCkgeyAgXG4gIFxuICBkcmF3Q2FudmFzKCk7ICAgIFxuICB0ZW5uaXNCYWxsLmRyYXdCYWxsKCk7XG4gIGxlZnRCYXIuZHJhd0JhcigpO1xuICByaWdodEJhci5kcmF3QmFyKCk7XG4gIHJpZ2h0QmFyLmFpTW92ZW1lbnQoKTsgXG4gIHRlbm5pc0JhbGwuc2NvcmUoKTtcbiAgZHJhd05ldCgpO1xuICB0ZW5uaXNCYWxsLmdhbWVSZXNldCgpOyAgXG59ICAgXG5cbnNldEludGVydmFsKGRyYXcsIDEwKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vY2FudmFzJztcbmltcG9ydCB7bGVmdEJhcn0gZnJvbSAnLi9iYXInO1xuXG5cbmZ1bmN0aW9uIGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KSB7XG4gICAgICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cblxuZXhwb3J0IGxldCBwb3NpdGlvblkgPSAyMDA7XG4gICAgICBcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3MoY2FudmFzLCBldnQpO1xuICAgICAgICBwb3NpdGlvblkgPSBtb3VzZVBvcy55IC0gKGxlZnRCYXIuYmFySGVpZ2h0IC8gMik7XG4gICAgICAgIGxlZnRCYXIuYmFyWSA9IHBvc2l0aW9uWTtcbiAgICAgIH0pO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbGVmdEJhckhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9