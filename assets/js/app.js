/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ng-user-reference/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(2);
	__webpack_require__(9);
	__webpack_require__(15);
	__webpack_require__(19);
	__webpack_require__(23);
	__webpack_require__(27);
	__webpack_require__(31);
	module.exports = __webpack_require__(35);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _users = __webpack_require__(2);
	
	var _users2 = _interopRequireDefault(_users);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = angular.module('app', ['ui.router']);
	
	app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider.state({
	        name: 'welcome',
	        url: '/',
	        template: function template() {
	            return new Promise(function (r) {
	                __webpack_require__.e/* nsure */(1, function () {
	                    r(__webpack_require__(3)());
	                });
	            });
	        }
	    }).state({
	        name: 'users',
	        url: '/users/:user_id',
	        template: function template() {
	            return new Promise(function (r) {
	                __webpack_require__.e/* nsure */(2, function () {
	                    r(__webpack_require__(6)());
	                });
	            });
	        },
	        controller: _users2.default,
	        resolve: {
	            users: ['$userList', function (data) {
	                return data;
	            }]
	        }
	    });
	}]);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var usersController = function () {
	    function usersController($scope, $state, $stateParams, $navArea, $popup) {
	        _classCallCheck(this, usersController);
	
	        this.$popup = $popup;
	        this.$navArea = $navArea;
	        this.$state = $state;
	        this.navtitle = 'Лица';
	        this.pushNavArea();
	        $scope.$on("$destroy", angular.bind(this, this.$onDestroy));
	        if (!$stateParams.user_id) this.$popup.close();
	    }
	
	    _createClass(usersController, [{
	        key: 'pushNavArea',
	        value: function pushNavArea() {
	            this.$navArea.add(this);
	        }
	    }, {
	        key: 'navAreaAction',
	        value: function navAreaAction() {
	            this.$state.go('users', { user_id: null }, { notify: false });
	            this.$popup.close();
	        }
	    }, {
	        key: '$onDestroy',
	        value: function $onDestroy() {
	            this.$navArea.remove(this);
	        }
	    }]);
	
	    return usersController;
	}();
	
	exports.default = usersController;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */
	
	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];
	
	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }
	
	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }
	
	  return a;
	};
	
	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function nulls(val) {
	  return val != null && val !== '';
	}
	
	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}
	
	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};
	
	
	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};
	
	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];
	
	  var keys = Object.keys(obj);
	
	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];
	
	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }
	
	  return buf.join('');
	};
	
	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;
	
	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}
	
	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};
	
	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */
	
	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(5).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);
	
	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');
	
	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};
	
	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var unique = function () {
	    var iterator = 0;
	    return function (prefix) {
	        iterator++;
	        return prefix || iterator;
	    };
	}();
	angular.module('app').service('$collection', function () {
	    var collection = function () {
	        function collection(items) {
	            _classCallCheck(this, collection);
	
	            this.models = items.map(function (item) {
	                item.id = unique();
	                return item;
	            });
	        }
	
	        _createClass(collection, [{
	            key: 'get',
	            value: function get(id) {
	                return this.models.find(function (model) {
	                    return model.id == id;
	                });
	            }
	        }, {
	            key: 'all',
	            value: function all() {
	                return this.models;
	            }
	        }]);
	
	        return collection;
	    }();
	
	    return collection;
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('app').service('$userList', function ($http, $collection) {
	    return $http.get('api/list_data.json').then(function (response) {
	        return new $collection(response.data.data);
	    });
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var navAreaController = function () {
	    function navAreaController($navArea) {
	        _classCallCheck(this, navAreaController);
	
	        this.navArea = $navArea.navItems;
	    }
	
	    _createClass(navAreaController, [{
	        key: 'triggerAction',
	        value: function triggerAction($ctrl) {
	            if (typeof $ctrl.navAreaAction == 'function') $ctrl.navAreaAction();
	        }
	    }]);
	
	    return navAreaController;
	}();
	
	angular.module('app').service('$navArea', function ($http, $sce) {
	    var navArea = function () {
	        function navArea() {
	            _classCallCheck(this, navArea);
	
	            this.navItems = [];
	        }
	
	        _createClass(navArea, [{
	            key: 'add',
	            value: function add($ctrl) {
	                var index = this.navItems.indexOf($ctrl);
	                if (index == -1) {
	                    this.navItems.push($ctrl);
	                }
	            }
	        }, {
	            key: 'remove',
	            value: function remove($ctrl) {
	                var index = this.navItems.indexOf($ctrl);
	                if (index != -1) {
	                    this.navItems.splice(index, 1);
	                }
	            }
	        }]);
	
	        return navArea;
	    }();
	
	    return new navArea();
	});
	angular.module('app').component('navArea', {
	    template: __webpack_require__(14)(),
	    controller: navAreaController
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./nav-area.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./nav-area.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-area {\n  padding: 8px 32px;\n  background-color: #fff;\n  position: relative;\n  z-index: 1;\n}\n.nav-area:empty {\n  display: none;\n}\n.nav-area__item {\n  display: inline-block;\n}\n.nav-area__item:not(:last-child):after {\n  content: \"/\";\n  display: inline-block;\n  margin: 0 4px;\n}\n.nav-area__item:hover {\n  color: #43a047;\n  cursor: pointer;\n}\n/*# sourceMappingURL=resources/com/nav-area/style/nav-area.css.map */", "", {"version":3,"sources":["/./com/nav-area/style/resources/com/nav-area/style/nav-area.styl","/./com/nav-area/style/nav-area.styl"],"names":[],"mappings":"AACA;EACE,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;CCAD;ADCC;EACE,cAAA;CCCH;ADAD;EACE,sBAAA;CCED;ADDC;EACE,aAAA;EACA,sBAAA;EACA,cAAA;CCGH;ADFC;EACE,eAAA;EACA,gBAAA;CCIH;AACD,qEAAqE","file":"nav-area.styl","sourcesContent":["@import \"~variables.styl\"\r\n.nav-area\r\n  padding 8px 32px\r\n  background-color $clr-white-list\r\n  position relative\r\n  z-index 1\r\n  &:empty\r\n    display none\r\n.nav-area__item\r\n  display inline-block\r\n  &:not(:last-child):after\r\n    content:\"/\"\r\n    display inline-block\r\n    margin 0 4px\r\n  &:hover{\r\n    color $clr-green\r\n    cursor pointer\r\n  }",".nav-area {\n  padding: 8px 32px;\n  background-color: #fff;\n  position: relative;\n  z-index: 1;\n}\n.nav-area:empty {\n  display: none;\n}\n.nav-area__item {\n  display: inline-block;\n}\n.nav-area__item:not(:last-child):after {\n  content: \"/\";\n  display: inline-block;\n  margin: 0 4px;\n}\n.nav-area__item:hover {\n  color: #43a047;\n  cursor: pointer;\n}\n/*# sourceMappingURL=resources/com/nav-area/style/nav-area.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<div class=\"nav-area\"><div ng-repeat=\"navCtrl in $ctrl.navArea\" ng-click=\"$ctrl.triggerAction(navCtrl)\" class=\"nav-area__item\">{{navCtrl.navtitle}}</div></div>");;return buf.join("");
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var userController = function () {
	    function userController($popup, $scope, $navArea, $state, $stateParams) {
	        _classCallCheck(this, userController);
	
	        this.$popup = $popup;
	        this.$state = $state;
	        this.$scope = $scope;
	        this.$navArea = $navArea;
	        $stateParams = $stateParams;
	        if ($stateParams.user_id == this.id) {
	            this.pushNavArea();
	        }
	    }
	
	    _createClass(userController, [{
	        key: 'pushNavArea',
	        value: function pushNavArea() {
	            this.$navArea.add(this);
	            this.navAreaAction();
	        }
	    }, {
	        key: 'navAreaAction',
	        value: function navAreaAction() {
	            this.$state.go('users', { user_id: this.id }, { notify: false });
	            this.$popup.open('<popup-body><user-card id="' + this.id + '"></user-card></popup-body>', this.$scope);
	        }
	    }, {
	        key: '$onDestroy',
	        value: function $onDestroy() {
	            this.$navArea.remove(this);
	        }
	    }]);
	
	    return userController;
	}();
	
	angular.module('app').component('user', {
	    restrict: 'M',
	    transclude: {
	        "username": 'userName',
	        "issue-date": '?issueDate'
	    },
	    bindings: {
	        id: '@',
	        navtitle: '='
	    },
	    template: __webpack_require__(18)(),
	    controller: userController
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./user.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./user.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".user-block {\n  padding: 8px 16px;\n  border-bottom: 1px solid #eee;\n  background-color: #fff;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out 0.1s, background 0.2s ease-in-out 0s;\n}\n.user-block:hover {\n  transform: perspective(150px) rotateX(2deg) translateY(2px);\n  background-color: #a5d6a7;\n}\n.user-block__username {\n  font-weight: 700;\n  font-size: 16px;\n  color: #424242;\n}\n/*# sourceMappingURL=resources/com/user/style/user.css.map */", "", {"version":3,"sources":["/./com/user/style/resources/com/user/style/user.styl","/./com/user/style/user.styl"],"names":[],"mappings":"AACA;EACE,kBAAA;EACA,8BAAA;EACA,uBAAA;EACA,gBAAA;EACA,4EAAA;CCAD;ADCC;EACE,4DAAA;EACA,0BAAA;CCCH;ADAD;EACE,iBAAA;EACA,gBAAA;EACA,eAAA;CCED;AACD,6DAA6D","file":"user.styl","sourcesContent":["@import \"~variables.styl\"\r\n.user-block\r\n  padding 8px 16px\r\n  border-bottom 1px solid $clr-grey-100\r\n  background-color $clr-white-list\r\n  cursor: pointer\r\n  transition transform 0.2s ease-in-out 0.1s,background 0.2s ease-in-out 0s\r\n  &:hover\r\n    transform: perspective(150px) rotateX(2deg) translateY(2px);\r\n    background-color $clr-green-100\r\n.user-block__username\r\n  font-weight 700\r\n  font-size 16px\r\n  color $clr-grey-700\r\n",".user-block {\n  padding: 8px 16px;\n  border-bottom: 1px solid #eee;\n  background-color: #fff;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out 0.1s, background 0.2s ease-in-out 0s;\n}\n.user-block:hover {\n  transform: perspective(150px) rotateX(2deg) translateY(2px);\n  background-color: #a5d6a7;\n}\n.user-block__username {\n  font-weight: 700;\n  font-size: 16px;\n  color: #424242;\n}\n/*# sourceMappingURL=resources/com/user/style/user.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<div ng-click=\"$ctrl.openPopup()\" ng-dblclick=\"$ctrl.pushNavArea();$event.preventDefault()\" class=\"user-block\"><div ng-transclude=\"username\" class=\"user-block__username\"></div></div>");;return buf.join("");
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(20);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var app = angular.module('app');
	
	var popupController = function () {
	    function popupController($popup) {
	        _classCallCheck(this, popupController);
	
	        this.$popup = $popup;
	    }
	
	    _createClass(popupController, [{
	        key: 'popupClose',
	        value: function popupClose() {
	            this.$popup.close();
	        }
	    }]);
	
	    return popupController;
	}();
	
	app.service('$popup', function ($compile, $timeout, $rootScope) {
	    var $dialog = angular.element('<popup></popup>');
	    return {
	        close: function close() {
	            $dialog.remove();
	            $timeout(function () {
	                angular.element(document.body).removeClass('popup_open');
	            }, 1000);
	        },
	        open: function open(html, scope) {
	            $dialog.html(html);
	            angular.element(document.body).append($dialog);
	            $timeout(function () {
	                if (typeof scope == 'undefined') {
	                    scope = $rootScope.$new(true);
	                }
	                $compile($dialog)(scope);
	                angular.element(document.body).addClass('popup_open');
	            });
	        }
	    };
	});
	app.component('popup', {
	    transclude: {
	        "head": '?popupHead',
	        "body": '?popupBody',
	        "footer": '?popupFooter'
	    },
	    template: __webpack_require__(22)(),
	    controller: popupController
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./popup.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./popup.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  text-align: center;\n}\n.popup:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.popup__container {\n  position: relative;\n  margin: 0 32px;\n  min-width: 400px;\n  display: inline-block;\n  border-radius: 0 0 4px 4px;\n  text-align: left;\n  vertical-align: middle;\n}\n.popup__head {\n  border-radius: 4px 4px 0 0;\n  background-color: #4caf50;\n  min-height: 32px;\n}\n.popup__close {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  vertical-align: middle;\n  font-size: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.5;\n  float: right;\n}\n.popup__close:hover {\n  opacity: 1;\n}\n.popup__close:before {\n  content: \"\";\n  height: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\n.popup__close:after {\n  content: \"\\D7\";\n  display: inline-block;\n  vertical-align: middle;\n}\n.popup__content {\n  padding: 16px;\n  background-color: #fff;\n}\nbody.popup_open {\n  overflow: hidden;\n}\n/*# sourceMappingURL=resources/com/popup/style/popup.css.map */", "", {"version":3,"sources":["/./com/popup/style/resources/com/popup/style/popup.styl","/./com/popup/style/popup.styl"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EAEA,mBAAA;CCDD;ADEC;EACE,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;CCAH;ADED;EACE,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EACA,uBAAA;CCAD;ADED;EACE,2BAAA;EACA,0BAAA;EACA,iBAAA;CCAD;ADED;EACE,sBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;CCAD;ADCC;EACE,WAAA;CCCH;ADAC;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,sBAAA;CCEH;ADDC;EACE,eAAA;EACA,sBAAA;EACA,uBAAA;CCGH;ADDD;EACE,cAAA;EACA,uBAAA;CCGD;ADDD;EACE,iBAAA;CCGD;AACD,+DAA+D","file":"popup.styl","sourcesContent":["@import \"~variables.styl\"\r\n.popup\r\n  position fixed\r\n  top: 0\r\n  left: 0\r\n  width 100%\r\n  height 100%\r\n  overflow auto\r\n  //background-color rgba(0, 0, 0, 0.3)\r\n  text-align center\r\n  &:before\r\n    content: \"\"\r\n    display inline-block\r\n    height 100%\r\n    vertical-align middle\r\n\r\n.popup__container\r\n  position relative\r\n  margin 0 32px\r\n  min-width 400px\r\n  display inline-block\r\n  border-radius 0 0 4px 4px\r\n  text-align left\r\n  vertical-align middle\r\n\r\n.popup__head\r\n  border-radius 4px 4px 0 0\r\n  background-color $clr-green-400\r\n  min-height 32px\r\n\r\n.popup__close\r\n  display inline-block\r\n  width 32px\r\n  height 32px\r\n  vertical-align middle\r\n  font-size 24px\r\n  text-align center\r\n  color $clr-white-list\r\n  cursor pointer\r\n  opacity 0.5\r\n  float: right\r\n  &:hover\r\n    opacity 1\r\n  &:before\r\n    content: \"\"\r\n    height 100%\r\n    vertical-align middle\r\n    display inline-block\r\n  &:after\r\n    content: \"×\"\r\n    display inline-block\r\n    vertical-align middle\r\n\r\n.popup__content\r\n  padding 16px\r\n  background-color $clr-white-list\r\n\r\nbody.popup_open\r\n  overflow hidden",".popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  text-align: center;\n}\n.popup:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.popup__container {\n  position: relative;\n  margin: 0 32px;\n  min-width: 400px;\n  display: inline-block;\n  border-radius: 0 0 4px 4px;\n  text-align: left;\n  vertical-align: middle;\n}\n.popup__head {\n  border-radius: 4px 4px 0 0;\n  background-color: #4caf50;\n  min-height: 32px;\n}\n.popup__close {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  vertical-align: middle;\n  font-size: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.5;\n  float: right;\n}\n.popup__close:hover {\n  opacity: 1;\n}\n.popup__close:before {\n  content: \"\";\n  height: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\n.popup__close:after {\n  content: \"×\";\n  display: inline-block;\n  vertical-align: middle;\n}\n.popup__content {\n  padding: 16px;\n  background-color: #fff;\n}\nbody.popup_open {\n  overflow: hidden;\n}\n/*# sourceMappingURL=resources/com/popup/style/popup.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<div class=\"popup\"><div class=\"popup__container\"><div class=\"popup__head\"><span ng-click=\"$ctrl.popupClose()\" class=\"popup__close\"></span></div><div ng-transclude=\"body\" class=\"popup__content\"></div></div></div>");;return buf.join("");
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(24);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var app = angular.module('app');
	
	var userCardController = function () {
	    function userCardController($userList, $userFild) {
	        var _this = this;
	
	        _classCallCheck(this, userCardController);
	
	        $userList.then(function (data) {
	            _this.user = data.get(_this.id);
	        });
	        $userFild.then(function (data) {
	            _this.userFild = data;
	        });
	    }
	
	    _createClass(userCardController, [{
	        key: 'getProp',
	        value: function getProp(key) {
	            return this.user[key];
	        }
	    }]);
	
	    return userCardController;
	}();
	
	app.service('$userFild', function ($http, $sce) {
	    return $http.get('api/card_filds.json').then(function (response) {
	        return response.data;
	    });
	});
	app.component('userCard', {
	    bindings: {
	        id: '@'
	    },
	    template: __webpack_require__(26)(),
	    controller: userCardController
	
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./user-card.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/stylus-loader/index.js?sourceMap!./user-card.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".fild-label {\n  display: block;\n  color: #616161;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.fild-input {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  border: 1px solid #bdbdbd;\n  border-radius: 2px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=resources/com/user-card/style/user-card.css.map */", "", {"version":3,"sources":["/./com/user-card/style/resources/com/user-card/style/user-card.styl","/./com/user-card/style/user-card.styl"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;CCAD;ADCD;EACE,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;EACA,YAAA;EACA,0BAAA;EACA,mBAAA;EACA,mBAAA;CCCD;AACD,uEAAuE","file":"user-card.styl","sourcesContent":["@import \"~variables.styl\"\r\n.fild-label\r\n  display block\r\n  color $clr-grey-600\r\n  font-size 14px\r\n  margin-bottom 4px\r\n.fild-input\r\n  display: block;\r\n  width: 100%;\r\n  height: 34px;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #555;\r\n  border: 1px solid $clr-grey-300;\r\n  border-radius: 2px;\r\n  margin-bottom 8px",".fild-label {\n  display: block;\n  color: #616161;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.fild-input {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  border: 1px solid #bdbdbd;\n  border-radius: 2px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=resources/com/user-card/style/user-card.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<div class=\"user-card\"><div class=\"fild-list\"><div ng-repeat=\"(key,fild) in $ctrl.userFild.meta\" class=\"fild-list__item\"><fild-input value=\"$ctrl.user[key]\" ng-if=\"fild.type=='text'\"><fild-label>{{fild.title}}</fild-label></fild-input><fild-checkbox-group value=\"$ctrl.user[key]\" groups=\"fild.items\" ng-if=\"fild.type == 'checkboxgroup'\"><fild-label>{{fild.title}}</fild-label></fild-checkbox-group><fild-date value=\"$ctrl.user[key]\" ng-if=\"fild.type=='date'\"><fild-label>{{fild.title}}</fild-label></fild-date></div></div></div>");;return buf.join("");
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(28);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var inputController = function inputController() {
	    _classCallCheck(this, inputController);
	};
	
	angular.module('app').component('fildInput', {
	    transclude: {
	        "fild-label": '?fildLabel'
	    },
	    bindings: {
	        value: '='
	    },
	    template: __webpack_require__(30)(),
	    controller: inputController
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/stylus-loader/index.js?sourceMap!./input.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/stylus-loader/index.js?sourceMap!./input.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "/*# sourceMappingURL=resources/com/filds/input/style/input.css.map */", "", {"version":3,"sources":["/./com/filds/input/style/input.styl"],"names":[],"mappings":"AAAA,qEAAqE","file":"input.styl","sourcesContent":["/*# sourceMappingURL=resources/com/filds/input/style/input.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<label ng-transclude=\"fild-label\" class=\"fild-label\"></label><input ng-model=\"$ctrl.value\" class=\"fild-input fild-input__text\">");;return buf.join("");
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(32);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by dmitrijmihajlov on 14.10.16.
	                                                                                                                                                           */
	
	
	var dateController = function dateController($filter) {
	    _classCallCheck(this, dateController);
	
	    this.min = new Date(1930, 1, 1);
	    this.max = new Date();
	    this.value = new Date(this.value);
	};
	
	angular.module('app').component('fildDate', {
	    transclude: {
	        "fild-label": '?fildLabel'
	    },
	    bindings: {
	        value: '='
	    },
	    template: __webpack_require__(34)(),
	    controller: dateController
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/stylus-loader/index.js?sourceMap!./date.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/stylus-loader/index.js?sourceMap!./date.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "/*# sourceMappingURL=resources/com/filds/date/style/date.css.map */", "", {"version":3,"sources":["/./com/filds/date/style/date.styl"],"names":[],"mappings":"AAAA,mEAAmE","file":"date.styl","sourcesContent":["/*# sourceMappingURL=resources/com/filds/date/style/date.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<label ng-transclude=\"fild-label\" class=\"fild-label\"></label><input type=\"date\" ng-min=\"$ctrl.min\" ng-max=\"$ctrl.max\" ng-model=\"$ctrl.value\" ngRequired class=\"fild-input fild-input__date\">");;return buf.join("");
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(36);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var checkboxController = function () {
	    function checkboxController() {
	        var _this = this;
	
	        _classCallCheck(this, checkboxController);
	
	        this.checked = {};
	        this.groups.forEach(function (group, key) {
	            _this.checked[key + 1] = _this.value.indexOf(key + 1) != -1;
	        });
	    }
	
	    _createClass(checkboxController, [{
	        key: 'setValue',
	        value: function setValue(key) {
	            var indexValue = this.value.indexOf(key);
	            if (this.checked[key]) {
	                if (indexValue == -1) {
	                    this.value.push(key);
	                }
	            } else {
	                this.value.splice(indexValue, 1);
	            }
	        }
	    }]);
	
	    return checkboxController;
	}();
	
	angular.module('app').component('fildCheckboxGroup', {
	    transclude: {
	        "fild-label": '?fildLabel'
	    },
	    bindings: {
	        value: '=',
	        groups: '='
	    },
	    template: __webpack_require__(38)(),
	    controller: checkboxController
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/stylus-loader/index.js?sourceMap!./checkbox-group.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/stylus-loader/index.js?sourceMap!./checkbox-group.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".fild-checkbox-group__item input[type=\"checkbox\"] {\n  margin-right: 4px;\n}\n.fild-checkbox-group__item span {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=resources/com/filds/checkbox-group/style/checkbox-group.css.map */", "", {"version":3,"sources":["/./com/filds/checkbox-group/style/resources/com/filds/checkbox-group/style/checkbox-group.styl","/./com/filds/checkbox-group/style/checkbox-group.styl"],"names":[],"mappings":"AACE;EACE,kBAAA;CCAH;ADEC;EACE,uBAAA;CCAH;AACD,uFAAuF","file":"checkbox-group.styl","sourcesContent":[".fild-checkbox-group__item\r\n  input[type=\"checkbox\"]{\r\n    margin-right 4px\r\n  }\r\n  span\r\n    vertical-align middle",".fild-checkbox-group__item input[type=\"checkbox\"] {\n  margin-right: 4px;\n}\n.fild-checkbox-group__item span {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=resources/com/filds/checkbox-group/style/checkbox-group.css.map */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<label ng-transclude=\"fild-label\" class=\"fild-label\"></label><div ng-repeat=\"group in $ctrl.groups\" ng-init=\"key=$index+1\" class=\"fild-checkbox-group\"><label class=\"fild-checkbox-group__item\"><input type=\"checkbox\" value=\"key\" ng-checked=\"$ctrl.checked[key]\" ng-model=\"$ctrl.checked[key]\" ng-change=\"$ctrl.setValue(key)\"><span>{{group.title}}</span></label></div>");;return buf.join("");
	}

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map