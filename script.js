// create the module and name it scotchApp
var IONdemo = angular.module('IONdemo', ['ngRoute']);

// configure our routes
IONdemo.config(function($routeProvider) {
  $routeProvider

     .when('/', {
      templateUrl : 'pages/welcome.html',
      controller  : 'welcomeController'
    })

     // route for the login page
    .when('/login', {
      templateUrl : 'pages/login.html',
      controller  : 'loginController'
    })

    // route for the home page
    .when('/home', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })


    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope

IONdemo.controller('welcomeController', function($scope,$location,$route) {
    if(localStorage.getItem('DemoUser')){
      $location.path( "/home" );
    }else {
      $location.path( "/" );
    }
    $route.reload();
});

IONdemo.controller('mainController', function($scope,$location,$route) {
  $scope.message = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia!';
  if(localStorage.getItem('DemoUser'))
   $scope.userName = JSON.parse(localStorage.getItem('DemoUser')).userEmail;
   $scope.logoutUser = function(){
     localStorage.removeItem('DemoUser');
     $location.path( "/" );
     $route.reload();
   }
});

IONdemo.controller('loginController', function($scope) {
 $scope.loginUser = function(){
    var localData={};
    localData.userEmail = $scope.emailInput;
    localData.userPassword = Base64.encode($scope.passwordInput);
    localStorage.setItem("DemoUser",JSON.stringify(localData));
  }
});

IONdemo.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
