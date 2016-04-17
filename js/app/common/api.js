// Filename: logger.js
define([
  'jquery',
  'config/app'
], function($, AppConfigs){
	
   var exports = {};
   
   exports.call = function(method, path, parameters, onSuccess, options){
	 
	   var obj = {
   		   cache: false,
           url: path,
           type: method,
           dataType: 'json',
           data: parameters,
           success: onSuccess,
           global: false //prevent page reloading on error
   		};
	   
	   
	   
	   return $.ajax(obj);
   };
	
   
   return exports;
   
});
