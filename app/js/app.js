'use strict';

// Declare app level module which depends on views, and components
angular.module('NoteWrangler', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/notes', {
                templateUrl: '../templates/pages/notes/index.html'
            })
            .when('/users', {
                templateUrl: '../templates/pages/users/index.html'
            })
            .when('/', {
                redirectTo: '/users'
            })
            .when('/notes/new', {
                templateUrl: '../templates/pages/notes/edit.html'
            })
            .otherwise({ redirectTo: '/notes' });
    });