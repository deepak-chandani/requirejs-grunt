define([
    'app/common/api',
], function(Api){
	
   var Brand = function(attrs){
	   
	   this.brand = attrs.name;
	   
   };
   
   Brand.prototype.getModels = function(){
	  
	   var url = 'http://jsonplaceholder.typicode.com/posts';
		
		return Api.call('GET',
				 url,
				 {brand: this.brand}
			);
		
   };
   
   return Brand;
	
});