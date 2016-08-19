var app = angular.module("friends", []);

app.component("fMain", {
    templateUrl: "templates/main.html",
    controller: function ($scope, $element, $attrs) {
        var ctrl = this;
        $scope.filterText = "";

        $scope.friends = [
            {
                id: 1,
                name: "chaogao",
                yanzhi: 100
            },
            {
                id: 2,
                name: "colingan",
                yanzhi: 100
            },
            {
                id: 3,
                name: "leila",
                yanzhi: 100
            },
            {
                id: 4,
                name: "lucia",
                yanzhi: 100
            },
            {
                id: 5,
                name: "teetang",
                yanzhi: 100
            },
            {
                id: 6,
                name: "silasxu",
                yanzhi: 100
            },
			{
                id: 7,
                name: "jason",
                yanzhi: 100
            },
			{
                id: 8,
                name: "xuyi",
                yanzhi: 100
            },
			{
                id: 9,
                name: "ethan",
                yanzhi: 100
            },
			{
                id: 10,
                name: "nought",
                yanzhi: 100
            },
			{
                id: 11,
                name: "neowang",
                yanzhi: 100
            }
        ];
        ctrl.onUpdate = function (id, yanZhi) {
            console.log("herehrer")
            for (var i in $scope.friends) {
                if ($scope.friends[i].id == id) {
                    $scope.friends[i].yanzhi = yanZhi;
                }
            }
        };
        ctrl.getNameOfYanWang = function () {
            var name = "";
            var yz = 0;
            for (var i in $scope.friends) {
                if ($scope.friends[i].yanzhi > yz) {
                    yz = $scope.friends[i].yanzhi;
                    name = $scope.friends[i].name;
                }
            }
            return name;
        };

    }
});