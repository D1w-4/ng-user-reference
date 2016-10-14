webpackJsonp([2],{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(4);
	
	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	buf.push("<h1>Список лиц</h1><user ng-repeat=\"user in $resolve.users.all()\" id=\"{{user.id}}\" navtitle=\"user.surname+' '+user.name.substring(0,1)+'.'\"><user-name>{{user.surname}} {{user.name}}</user-name><issue-date>{{user.issue_date}}</issue-date></user>");;return buf.join("");
	}

/***/ }

});
//# sourceMappingURL=2.bundle.js.map