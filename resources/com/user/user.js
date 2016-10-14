import "user.styl"

class userController {
    constructor($popup,$scope,$navArea,$state,$stateParams) {
        this.$popup = $popup
        this.$state = $state
        this.$scope = $scope
        this.$navArea = $navArea
        $stateParams = $stateParams
        if($stateParams.user_id == this.id){
            this.pushNavArea()
        }
    }
    pushNavArea(){
        this.$navArea.add(this)
        this.navAreaAction()
    }
    navAreaAction(){
        this.$state.go('users',{user_id:this.id},{notify: false})
        this.$popup.open(`<popup-body><user-card id="${this.id}"></user-card></popup-body>`,this.$scope)
    }
    $onDestroy(){
        this.$navArea.remove(this)
    }
}
angular.module('app').component('user', {
    restrict:'M',
    transclude:{
        "username":'userName',
        "issue-date":'?issueDate'
    },
    bindings:{
        id:'@',
        navtitle:'='
    },
    template: require('user.jade')(),
    controller: userController,
})