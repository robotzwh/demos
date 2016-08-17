angular.module("friends").component(
    "friendsList", {
        templateUrl: "templates/list.html",
        controller: function ($scope) {
            var ctrl = this;
            ctrl.onOneUpdate = function(){
                ctrl.onUpdate({id:arguments[0],yanZhi:arguments[1]})
            }
        },
        bindings: {
            list: "<",
            onUpdate: "&"
        }
    }
)