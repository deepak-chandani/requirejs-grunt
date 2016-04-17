// Filename: logger.js
define([
  "config/app"
], function(AppConfigs){
	
   var exports = {};
   
   var debug = AppConfigs.debug || false;
	   
	   
   exports.log = function(){
	   
	   if(window.console === undefined){
		   return;
	   }
	   
	   if(debug){
		   Function.prototype.apply.call(console.log, console, arguments);
	   }
   };
	
   
   return exports;
   
});
