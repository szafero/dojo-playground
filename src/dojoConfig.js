/*jshint unused:false*/
var dojoConfig = {
	async: true,
	baseUrl: 'http://127.0.0.1:8888',
	tlmSiblingOfDojo: false,
	isDebug: true,
	packages: [
		'dojo',
		'dijit',
		'put-selector',
		'xstyle',
		'dgrid',
		'dojo-playground'
	],
	deps: [ 'dojo-playground' ],
	callback: function (dojoPlayground) {
		dojoPlayground.init();
	}
};
