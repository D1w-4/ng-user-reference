angular.module('app').service('$userList',function($http,$collection) {
    return $http.get('api/list_data.json').then(function (response) {
        return new $collection(response.data.data)
    })
})
