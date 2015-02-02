'use strict';

/**
 * @ngdoc overview
 * @name smileMeApp
 * @description
 * # smileMeApp
 *
 * Main module of the application.
 */
var smileMeApp = angular.module('smileMeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
	.when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'formCtrl'
      })
	.when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'galleryCtrl'
      })
    .when('/celebrations', {
        templateUrl: 'views/celebrations.html',
        controller: 'servicesCtrl'
      })
    .when('/renting', {
        templateUrl: 'views/renting.html',
        controller: 'servicesCtrl'
      })
    .when('/excursion', {
        templateUrl: 'views/excursion.html',
        controller: 'servicesCtrl'
      })
      .otherwise({
        redirectTo: '/index.html'
      });
  }]);
;'use strict';

/**
 * @ngdoc function
 * @name smileMeApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the smileMeApp
 */
angular.module('smileMeApp')
  .controller('mainCtrl', ["$scope", function ($scope) {
    //TODO
  }]);
;'use strict';

/**
 * @ngdoc function
 * @name smileMeApp.controller:aboutCtrl
 * @description
 * # aboutCtrl
 * Controller of the smileMeApp
 */
angular.module('smileMeApp')
  .controller('aboutCtrl', ["$scope", function ($scope) {
    //TODO
  }]);
;'use strict';

/**
 * @ngdoc function
 * @name smileMeApp.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the smileMeApp
 */
smileMeApp.factory("Post", ["$resource", function($resource){
		var post = $resource('https://api.mongolab.com/api/1/databases/smileme/collections/smileme_contactform', {
						apiKey: 'Sqyp3__btaqcey97X5s9RRQmTH-2atf2',
						id: 'wylly'
						});
		return post;
	}])
	.controller('formCtrl', ["$scope", "Post", function ($scope, Post)
	{
		$scope.postsent = false;
		$scope.post = function()
		{
			$scope.postsent = true;
			var post = new Post(
			{
				nombre: ""+$scope.nombre+"",
				email: ""+$scope.email+"",
				telefono: ""+$scope.telefono+"",
				texto: ""+$scope.texto+""
			});
			
			post.$save();
		}
  }]);
