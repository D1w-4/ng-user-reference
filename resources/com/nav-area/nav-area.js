import 'nav-area.styl'

class navAreaController{
    constructor($navArea){
        this.navArea = $navArea.navItems
    }
    triggerAction($ctrl){
        if(typeof $ctrl.navAreaAction == 'function')
            $ctrl.navAreaAction()
    }
}
angular.module('app').service('$navArea',function($http,$sce) {
    class navArea{
        constructor(){
            this.navItems = []
        }
        add($ctrl){
            let index = this.navItems.indexOf($ctrl)
            if(index==-1) {
                this.navItems.push($ctrl)
            }
        }
        remove($ctrl){
            let index = this.navItems.indexOf($ctrl)
            if(index!=-1){
                this.navItems.splice(index,1)
            }
        }
    }
    return new navArea()
})
angular.module('app').component('navArea',{
    template:require('nav-area.jade')(),
    controller:navAreaController
})