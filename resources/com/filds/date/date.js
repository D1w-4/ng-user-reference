/**
 * Created by dmitrijmihajlov on 14.10.16.
 */
import 'date.styl'

class dateController {
    constructor($filter) {
        this.min = new Date(1930,1,1)
        this.max = new Date()
        this.value = new Date(this.value)
    }

}

angular.module('app').component('fildDate',{
    transclude:{
        "fild-label":'?fildLabel',
    },
    bindings:{
        value:'=',
    },
    template:require('date.jade')(),
    controller:dateController
})