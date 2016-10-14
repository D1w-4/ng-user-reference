import 'user-card.styl'

let app = angular.module('app')
class userCardController{
    constructor($userList,$userFild){
        $userList.then((data)=>{
            this.user = data.get(this.id)
        })
        $userFild.then((data)=>{
            this.userFild = data
        })
    }
    getProp(key){
        return this.user[key]
    }
}

app.service('$userFild',function($http,$sce) {
    return $http.get('api/card_filds.json').then(function (response) {
        return response.data
    })
})
app.component('userCard',{
    bindings:{
        id:'@'
    },
    template:require('user-card.jade')(),
    controller:userCardController,

})