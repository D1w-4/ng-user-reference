import usersController from "users.js"
const app = angular.module('app', ['ui.router'])

app.config(['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state({
            name: 'welcome',
            url: '/',
            template: function () {
                return new Promise(function (r) {
                    require.ensure([], function () {
                        r(require('welcome.jade')())
                    })
                })
            },
        }).state({
            name: 'users',
            url: '/users/:user_id',
            template: function () {
                return new Promise(function (r) {
                    require.ensure([], function () {
                        r(require('users.jade')())
                    })
                })
            },
            controller:usersController,
            resolve: {
                users: ['$userList',function (data) {
                    return data;
                }]
            }
        })
    }
])