var app = angular.module('thing', ['ngRoute', 'ngAnimate']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'startController'
        })
        .when('/beginner', {
            templateUrl: 'pages/home.html',
            controller: 'beginController'
        })
        .when('/easy', {
            templateUrl: 'pages/home.html',
            controller: 'easyController'
        })
        .when('/medium', {
            templateUrl: 'pages/home.html',
            controller: 'mediumController'
        })
        .when('/hard', {
            templateUrl: 'pages/home.html',
            controller: 'hardController'
        })
        .when('/impossible', {
            templateUrl: 'pages/home.html',
            controller: 'impossibleController'
        })



});

// create the controller and inject Angular's $scope

app.controller('startController', function ($scope) {
    split(wordlist);
    $scope.display = wordArr;

});

app.controller('beginController', function ($scope) {
    split(beginner);
    $scope.display = wordArr;
});

app.controller('easyController', function ($scope) {
    split(easy);
    $scope.display = wordArr;
});

app.controller('mediumController', function ($scope) {
    split(medium);
    $scope.display = wordArr;
});

app.controller('hardController', function ($scope) {
    split(hard);
    $scope.display = wordArr;
});
app.controller('impossibleController', function ($scope) {
    split(impossible);
    $scope.display = wordArr;
});