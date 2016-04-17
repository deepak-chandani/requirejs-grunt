define([
    'app/common/api',
], function(Api){
	
   var Product = function(){
	   
	   
   };
   
   Product.prototype.getList = function(){
	  
	   var url = 'http://jsonplaceholder.typicode.com/posts';
		
		return Api.call('GET',
				 url,
				 {}
			);
		
   };
   
   return Product;
	
});