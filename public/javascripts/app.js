'use strict';
var app = angular.module('TPC', [
    'ngRoute',
    'ngResource',
    'ngMock',
    'controllers',
    'services' ,
    'directives'
]);
app.config(function($routeProvider,$locationProvider){
    $routeProvider.
        when('/',{
            templateUrl:'partials/indexPartial',
            controller: 'RecentProjectsController'
        }).
        when('/manage', {
            templateUrl:'partials/managePartial',
            controller: 'TestController2'
        }).
        when('/blog', {
            templateUrl:'partials/managePartial',
            controller: 'BlogController'
        });
        $locationProvider.html5Mode(true);
});