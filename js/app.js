
var cartApp = angular.module('cartApp', []);

//controller for appcart
cartApp.controller('MainController', ['$scope', function($scope){
  $scope.title="Book Shop";
   $scope.products = 
   [
	   {
	   	name: 'The with Tigher heart', 
		price: 19 ,
		pubdate: new Date('2016' , '12', '08'),
		cover:'img/book1.jpg',
		likes:0,
		dislikes:0
	   },
	   {
	   	name: 'The Handmades tail', 
		price: 22 ,
		pubdate: new Date('2009' , '07', '06'),
		cover:'img/book2.jpg',
		likes:0,
		dislikes:0
	   },
	   {
	   	name: 'History of modern architecture', 
		price: 03 ,
		pubdate: new Date('2015' , '09', '06'),
		cover:'img/book3.jpg',
		likes:0,
		dislikes:0
	   },
	   {
	   	name: 'Dutch', 
		price: 40 ,
		pubdate: new Date('2013' , '04', '04'),
		cover:'img/book4.jpg',
		likes:0,
		dislikes:0
	   },
	   {
	   	name: 'The Book of Trees', 
		price: 50 ,
		pubdate: new Date('2011' , '03', '02'),
		cover:'img/the-book-of-trees.jpg',
		likes:0,
		dislikes:0
	   }

   ];
   $scope.plusOne=function(index){
     $scope.products[index].likes +=1;
   };
   $scope.minusOne=function(index){
     $scope.products[index].dislikes +=1;
   };
   // $scope.filterDrop=[
   // 	{'id':1, 'title':'Filter with Date'},
   // 	{'id':2, 'title':'Filter with Price'},
   // 	{'id':3, 'title':'Filter with Title'},
   // ]
}]);


