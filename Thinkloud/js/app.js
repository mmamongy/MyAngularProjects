(function (){
var app = angular.module('store', []) ;
app.controller('storeController', function(){
	this.products = gems;
});
app.controller('PanelController', function () {
	this.tab = 1 ;
	this.selectTab = function(setTab){
		this.tab = setTab ;
	} ;
	this.isSelected = function(checkTab){
		return this.tab === checkTab ;
	} ;
}) ;
app.controller('ReviewController',  function(){	
	this.review ={};
	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};

	} ;
}) ;

var gems = [
{
	name: 'Dodehancem',
	price: 2.54,
	description :" this is some desription this is some desription this is some desription this is some desription this is some desription",
	casPurchase: false, 
	soldout: false,
	image: [{
		full: 'AngularJS-large.png' ,
		thumb: 'AngularJS-large.png'
	}, {
		full: 'AngularJS-large.png' ,
		thumb: 'AngularJS-large.png'
	},{
		full: 'AngularJS-large.png' ,
		thumb: 'AngularJS-large.png'
	}], 
	reviews: [{ stars: 5, 
	body: "I love BOODY" ,
	author: "Maryam Mamdouh"}, 
	{stars: 4 , 
	body: "I love Maryam" ,
	author: "Body Karim"}]
}, {
	name: '3asseer 2assab',
	price: 4.54,
	description :" this is some desription this is some desription this is some desription this is some desription this is some desription",
	casPurchase: false, 
	soldout: false ,
	image: [{
		full: 'AngularJS-large.png',
		thumb: 'AngularJS-large.png'
	}], 
    reviews: [
    { stars: 5 , 
	body: "I love BOODY" ,
	author: "Maryam Mamdouh"},
	{stars: 4 , 
	body: "I love Maryam" ,
	author: "Body Karim" }]
}
];
})();
