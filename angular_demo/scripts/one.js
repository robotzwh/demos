angular.module("friends").component("friend", {
    templateUrl: "templates/one.html",
    controller: function ($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.modelSwitch = function () {
            if (this.model) {
                ctrl.onUpdate({id: ctrl.friend.id, yanZhi: ctrl.yanzhi});
            }
            ctrl.yanzhi = ctrl.friend.yanzhi;
            this.model = !this.model;

        };
        ctrl.$onInit = function () {
            this.yanzhi = ctrl.friend.yanzhi;
            this.model = false;
        }
    },
    bindings: {
        friend: "<",
        onUpdate: "&"
    }

});