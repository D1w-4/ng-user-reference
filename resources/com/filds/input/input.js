import 'input.styl'

class inputController{
}

angular.module('app').component('fildInput',{
    transclude:{
        "fild-label":'?fildLabel',
    },
    bindings:{
        value:'=',
    },
    template:require('input.jade')(),
    controller:inputController
})