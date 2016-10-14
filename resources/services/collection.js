const unique = (function(){
    let iterator = 0
    return function(prefix){
        iterator++
        return (prefix||iterator)
    }
})()
angular.module('app').service('$collection',function(){
    class collection{
        constructor(items){
            this.models = items.map((item)=>{
                item.id = unique()
                return item
            })
        }
        get(id){
            return this.models.find((model)=>{
                return model.id == id
            })
        }
        all(){
            return this.models
        }
    }
    return collection
})