var myApp = angular.module('myApp',['ngRoute','ui.bootstrap']);
myApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/footwear', {
			  templateUrl: 'FootwearSection.html',
			  controller: 'footwearSectionCtrl'						  
			}).when('/', {
			  templateUrl: 'AngularSlideShow.html',
			  controller: 'myCtrl'						  
			});
	}
]);
myApp.controller('myCtrl',function($scope, $interval, $route, $routeParams, $location){

	$scope.images = [{src:"Pictures/Desert.jpg",visible:false},{src:"Pictures/Hydrangeas.jpg",visible:false}];

	$scope.footwearCategory = [{category:'Casual',src:'#'},{category:'Office Wear',src:'#'},{category:'Party Wear',src:'#'},{category:'FlipFlops',src:'#'}];

	$scope.groomingMens = [{category:'Casual Grooming kit',src:'#'},{category:'Lorem ipsum',src:'#'},{category:'consectetuer ',src:'#'},{category:'commodo ligula',src:'#'},{category:'Cum sociis',src:'#'},{category:'aliquet',src:'#'},{category:'tincidunt',src:'#'}];

	$scope.groomingWomens = [{category:'Women Grooming kit',src:'#'},{category:'ipsum',src:'#'},{category:'Lorem consectetuer ',src:'#'},{category:'ligula',src:'#'},{category:'Aliquam ',src:'#'},{category:'aliquet',src:'#'},{category:'perdiet',src:'#'},{category:'Loimprdiet',src:'#'},{category:'linkimper diet',src:'#'},{category:'toim erdt',src:'#'}];

	$scope.apparalMens = [{category:'Women Grooming kit',src:'#'},{category:'ipsum',src:'#'},{category:'Lorem consectetuer ',src:'#'},{category:'ligula',src:'#'},{category:'Aliquam ',src:'#'},{category:'aliquet',src:'#'},{category:'imperdiet',src:'#'}];

	$scope.apparalWomens = [{category:'Women Grooming kit',src:'#'},{category:'ipsum',src:'#'},{category:'Lorem consectetuer ',src:'#'},{category:'ligula',src:'#'},{category:'Aliquam ',src:'#'},{category:'aliquet',src:'#'},{category:'imperdiet',src:'#'}];

	$scope.apparalKids = [{category:'Kid Apparal Category',src:'#'},{category:'ipsum',src:'#'},{category:'Lorem consectetuer ',src:'#'},{category:'ligula',src:'#'},{category:'Aliquam ',src:'#'},{category:'aliquet',src:'#'},{category:'imperdiet',src:'#'}];

	$scope.stationaryItems = [{category:'Fusce',src:'#'},{category:'suscipit',src:'#'},{category:'Vestibulum',src:'#'},{category:'Nonummy',src:'#'},{category:'volutpat',src:'#'},{category:'blandit',src:'#'},{category:'Quisque',src:'#'}]

	$('.dropdown').hover(function(){ 
	  $('.dropdown-toggle', this).trigger('click'); 
	});
	$scope.mensSection = false;
	$scope.showHidePopUp = function(val){
		$scope.mensSection = val;
	}
	
	$('#myCarousel').show();
	
});
