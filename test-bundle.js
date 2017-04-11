/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("pixi.js");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var context = __webpack_require__(2);
context.keys().forEach(context);
module.exports = context;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./comb/tooth.spec.js": 5,
	"./index.spec.js": 1
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Oscillator = function () {
  function Oscillator(options) {
    _classCallCheck(this, Oscillator);

    this.options = options;
    this.position = 0;
    this.vibrating = false;
    this.timeOfVibration = 0;
  }

  _createClass(Oscillator, [{
    key: "triggerVibration",
    value: function triggerVibration() {
      this.vibrating = true;
      this.timeOfVibration = 0;
    }
  }, {
    key: "run",
    value: function run(time) {
      if (this.vibrating) {
        this.timeOfVibration += time;
        this.position = this.computePosition(this.timeOfVibration);
      }

      if (this.timeOfVibration > this.options.timeOfVibrationEnd) {
        this.vibrating = false;
        this.timeOfVibration = 0;
        this.position = 0;
      }

      return this.position;
    }
  }, {
    key: "computePosition",
    value: function computePosition(t) {
      // Equation of a damped harmonic oscillator
      return Math.exp(-this.options.gamma * t) * this.options.amplitude * Math.cos(this.options.omega1 * t);
    }
  }]);

  return Oscillator;
}();

exports.default = Oscillator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixi = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PointsFactory = function () {
  function PointsFactory() {
    _classCallCheck(this, PointsFactory);
  }

  _createClass(PointsFactory, null, [{
    key: 'create',
    value: function create(number, length) {
      var points = [];

      for (var i = 0; i < number; i += 1) {
        points.push(new _pixi.Point(0, i * length));
      }

      return points;
    }
  }]);

  return PointsFactory;
}();

var ToothSkeleton = function () {
  function ToothSkeleton(number, length) {
    _classCallCheck(this, ToothSkeleton);

    this.graphics = new _pixi.Graphics();
    this.points = PointsFactory.create(number, length);
  }

  _createClass(ToothSkeleton, [{
    key: 'position',
    value: function position(x, y) {
      this.graphics.x = x;
      this.graphics.y = y;
    }
  }, {
    key: 'pointsPositionX',
    value: function pointsPositionX(x) {
      for (var i = 0; i < this.points.length; i += 1) {
        this.points[i].x = i * x;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var g = this.graphics;

      g.clear();
      g.lineStyle(2, 0xffc2c2);
      g.moveTo(this.points[0].x, this.points[0].y);

      for (var i = 1; i < this.points.length; i += 1) {
        g.lineTo(this.points[i].x, this.points[i].y);
      }

      for (var _i = 1; _i < this.points.length; _i += 1) {
        g.beginFill(0xff0022);
        g.drawCircle(this.points[_i].x, this.points[_i].y, 5);
        g.endFill();
      }
    }
  }]);

  return ToothSkeleton;
}();

exports.default = ToothSkeleton;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chai = __webpack_require__(8);

describe('Tooth', function () {
  var module = void 0;

  beforeEach(function () {
    var ModuleToothInjector = __webpack_require__(7);
    var ModuleToothSkeletonInjector = __webpack_require__(6);

    module = ModuleToothInjector({
      'pixi.js': {},
      './tooth-skeleton': ModuleToothSkeletonInjector({
        'pixi.js': {}
      })
    }).default;
  });

  it('should complain if the image is not set in the options', function () {
    // Arrange
    var options = {};

    // Act
    var fn = function fn() {
      module.checkOptions(options);
    };

    // Assert
    _chai.assert.throws(fn, 'The image is missing.');
  });
}); /* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-webpack-loader-syntax: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint global-require: 0 */

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __injector(__injections) {
  __injections = __injections || {};

  (function __validateInjection() {
    var validDependencies = ["pixi.js"];
    var injectedDependencies = Object.keys(__injections);
    var invalidInjectedDependencies = injectedDependencies.filter(function (dependency) {
      return validDependencies.indexOf(dependency) === -1;
    });

    if (invalidInjectedDependencies.length > 0) {
      var validDependenciesString = '- ' + validDependencies.join('\n- ');
      var injectedDependenciesString = '- ' + injectedDependencies.join('\n- ');
      var invalidDependenciesString = '- ' + invalidInjectedDependencies.join('\n- ');
      throw new Error('Some of the injections you passed in are invalid.\n' + 'Valid injection targets for this module are:\n' + validDependenciesString + '\n' + 'The following injections were passed in:\n' + injectedDependenciesString + '\n' + 'The following injections are invalid:\n' + invalidDependenciesString + '\n');
    }
  })();

  var module = {
    exports: {}
  };
  var exports = module.exports;

  function __getInjection(dependency) {
    return __injections.hasOwnProperty(dependency) ? __injections[dependency] : null;
  }

  (function () {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _pixi = __getInjection("pixi.js") || __webpack_require__(0);

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var PointsFactory = function () {
      function PointsFactory() {
        _classCallCheck(this, PointsFactory);
      }

      _createClass(PointsFactory, null, [{
        key: 'create',
        value: function create(number, length) {
          var points = [];

          for (var i = 0; i < number; i += 1) {
            points.push(new _pixi.Point(0, i * length));
          }

          return points;
        }
      }]);

      return PointsFactory;
    }();

    var ToothSkeleton = function () {
      function ToothSkeleton(number, length) {
        _classCallCheck(this, ToothSkeleton);

        this.graphics = new _pixi.Graphics();
        this.points = PointsFactory.create(number, length);
      }

      _createClass(ToothSkeleton, [{
        key: 'position',
        value: function position(x, y) {
          this.graphics.x = x;
          this.graphics.y = y;
        }
      }, {
        key: 'pointsPositionX',
        value: function pointsPositionX(x) {
          for (var i = 0; i < this.points.length; i += 1) {
            this.points[i].x = i * x;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var g = this.graphics;
          g.clear();
          g.lineStyle(2, 0xffc2c2);
          g.moveTo(this.points[0].x, this.points[0].y);

          for (var i = 1; i < this.points.length; i += 1) {
            g.lineTo(this.points[i].x, this.points[i].y);
          }

          for (var _i = 1; _i < this.points.length; _i += 1) {
            g.beginFill(0xff0022);
            g.drawCircle(this.points[_i].x, this.points[_i].y, 5);
            g.endFill();
          }
        }
      }]);

      return ToothSkeleton;
    }();

    exports.default = ToothSkeleton;
  })();

  return module.exports;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __injector(__injections) {
  __injections = __injections || {};

  (function __validateInjection() {
    var validDependencies = ["pixi.js", "./tooth-skeleton", "./oscillator"];
    var injectedDependencies = Object.keys(__injections);
    var invalidInjectedDependencies = injectedDependencies.filter(function (dependency) {
      return validDependencies.indexOf(dependency) === -1;
    });

    if (invalidInjectedDependencies.length > 0) {
      var validDependenciesString = '- ' + validDependencies.join('\n- ');
      var injectedDependenciesString = '- ' + injectedDependencies.join('\n- ');
      var invalidDependenciesString = '- ' + invalidInjectedDependencies.join('\n- ');
      throw new Error('Some of the injections you passed in are invalid.\n' + 'Valid injection targets for this module are:\n' + validDependenciesString + '\n' + 'The following injections were passed in:\n' + injectedDependenciesString + '\n' + 'The following injections are invalid:\n' + invalidDependenciesString + '\n');
    }
  })();

  var module = {
    exports: {}
  };
  var exports = module.exports;

  function __getInjection(dependency) {
    return __injections.hasOwnProperty(dependency) ? __injections[dependency] : null;
  }

  (function () {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _pixi = __getInjection("pixi.js") || __webpack_require__(0);

    var _toothSkeleton = __getInjection("./tooth-skeleton") || __webpack_require__(4);

    var _toothSkeleton2 = _interopRequireDefault(_toothSkeleton);

    var _oscillator = __getInjection("./oscillator") || __webpack_require__(3);

    var _oscillator2 = _interopRequireDefault(_oscillator);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var Tooth = function () {
      function Tooth(options) {
        _classCallCheck(this, Tooth);

        this.constructor.checkOptions(options);
        this.options = options;
        this.skeleton = new _toothSkeleton2.default(options.points, options.length);
        this.strip = new _pixi.mesh.Rope(_pixi.Texture.fromImage(options.image), this.skeleton.points);
        this.oscillator = new _oscillator2.default(options.oscillator);

        if (options.clickable) {
          this.activateClick();
        }
      }

      _createClass(Tooth, [{
        key: 'addToContainer',
        value: function addToContainer(container) {
          container.addChild(this.strip);

          if (this.options.displayPoints) {
            container.addChild(this.skeleton.graphics);
          }
        }
      }, {
        key: 'position',
        value: function position(x, y) {
          this.strip.x = x;
          this.strip.y = y;
          this.skeleton.position(x, y);
        }
      }, {
        key: 'activateClick',
        value: function activateClick() {
          var _this = this;

          this.strip.interactive = true;
          this.strip.buttonMode = true;
          this.strip.on('pointerdown', function () {
            return _this.oscillator.triggerVibration();
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var x = this.oscillator.run(1);
          this.skeleton.pointsPositionX(x);
          this.skeleton.render();
        }
      }], [{
        key: 'checkOptions',
        value: function checkOptions(options) {
          if (!options.image) {
            throw new Error('The image is missing.');
          }
        }
      }]);

      return Tooth;
    }();

    exports.default = Tooth;
  })();

  return module.exports;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ })
/******/ ]);