import 'checkbox-group.styl'

class checkboxController {
    constructor() {
        this.checked = {}
        this.groups.forEach((group,key)=>{
            this.checked[key+1] = this.value.indexOf(key+1)!=-1
        })
    }
    setValue(key){
        let indexValue = this.value.indexOf(key)
        if(this.checked[key]){
            if(indexValue == -1){
                this.value.push(key)
            }
        }
        else{
            this.value.splice(indexValue,1)
        }
    }
}

angular.module('app').component('fildCheckboxGroup', {
    transclude: {
        "fild-label": '?fildLabel',
    },
    bindings: {
        value: '=',
        groups: '='
    },
    template: require('checkbox-group.jade')(),
    controller: checkboxController
})