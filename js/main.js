// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  //baseUrl: 'js',	
  paths: {
	config: 'app/config',
    jquery: 'app/libs/jquery/1.12.0/jquery-min',
    bootstrap: 'app/libs/bootstrap/bootstrap.min',
  },
  shim: {
	  bootstrap: {
		  deps: ['jquery']
	  }
  }

});

require([
  // Load our app module and pass it to our definition function
  'jquery',
  'app/models/product/product',
  'app/models/brand/brand',
  'app/models/brand/brandmodel',
  'app/common/logger',
  'bootstrap',

], function($, Product , Brand, BrandModel, Logger){
  
	$(document).ready(function(){
		
		var product = new Product();
		
		product.getList().done(function(response){
			
			
			
			Logger.log(JSON.stringify(response));
		});
		
		
		var brand = new Brand({name: 'Hyundai'});
		
		brand.getModels().done(function(response){
			
			Logger.log('models fetched for brand:Hyundai');
		})
		
		
	});
	
	
});
