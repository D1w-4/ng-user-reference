import 'popup.styl'

const app = angular.module('app')

class popupController{
    constructor($popup){
        this.$popup = $popup
    }
    popupClose(){
        this.$popup.close()
    }
}

app.service('$popup',function($compile, $timeout, $rootScope) {
        var $dialog = angular.element('<popup></popup>');
        return {
            close:function(){
                $dialog.remove()
                $timeout(function(){
                    angular.element(document.body).removeClass('popup_open')
                },1000)
            },
            open:function(html,scope){
                $dialog.html(html)
                angular.element(document.body).append($dialog);
                $timeout(function() {
                    if(typeof scope == 'undefined'){
                        scope = $rootScope.$new(true);
                    }
                    $compile($dialog)(scope);
                    angular.element(document.body).addClass('popup_open')
                });
            }
        }
})
app.component('popup',{
    transclude:{
        "head":'?popupHead',
        "body":'?popupBody',
        "footer":'?popupFooter'
    },
    template:require('popup.jade')(),
    controller:popupController
})

