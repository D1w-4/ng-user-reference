export default class usersController{
    constructor($scope,$state,$stateParams,$navArea,$popup) {
        this.$popup = $popup
        this.$navArea = $navArea
        this.$state = $state
        this.navtitle = 'Лица'
        this.pushNavArea()
        $scope.$on("$destroy",angular.bind(this,this.$onDestroy))
        if(!$stateParams.user_id)
            this.$popup.close()
    }
    pushNavArea(){
        this.$navArea.add(this)
    }
    navAreaAction(){
        this.$state.go('users',{user_id:null},{notify: false})
        this.$popup.close()
    }
    $onDestroy(){
        this.$navArea.remove(this)
    }
}