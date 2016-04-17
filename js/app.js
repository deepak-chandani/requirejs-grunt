// Filename: app.js
define([
  'app/common/logger'
], function(Logger){
  
	var exports = {};
	
	
	exports.log = function(msg){
		
		Logger.log(msg);
	};
	
	return exports;
});
