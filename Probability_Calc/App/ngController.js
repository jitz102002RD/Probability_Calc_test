// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    // declaring variables of both inpouts
    $scope.valueA;
    $scope.valueB;


    $scope.selectedOpertion = 0; // setting default value here


    // function to do probability operation on given value
    // once result is calculated api call will be made to dump log data to specific folder 
    $scope.calculation = function () {
        if ($scope.selectedOpertion == 0) {
            $scope.result = $scope.valueA * $scope.valueB;
        } else {
            $scope.result = parseFloat($scope.valueA) + parseFloat($scope.valueB) - parseFloat($scope.valueA) * parseFloat($scope.valueB);
        }
        $http.post('home/DumpLog', {
            valueA: $scope.valueA,
            valueB: $scope.valueB,
            selectedOpertion: $scope.selectedOpertion,
            result: $scope.result
        })
            .success(function (result) {
                $scope.logfile = 'Log file has been generated to C:\\Temp\\Calculation.log path';
            })
            .error(function (data, status) {
                console.log(data);
            });

    }


}]);



