define([
    'app/common/api',
], function(Api){
	
   var BrandModel = function(attrs){
	   
	   this.brand = attrs.brandName;
	   this.model = attrs.model;
	   
   };
   
   BrandModel.prototype.getVariants = function(){
	  
	   var url = 'http://jsonplaceholder.typicode.com/posts';
		
		return Api.call('GET',
				 url,
				 {
			 	   brand: this.brand,
			 	   model: this.model,
			     }
			);
		
   };
   
   return BrandModel;
	
});