let app = angular.module("ShoppingListApp", []);
app.controller("ListController", function($scope){
    $scope.list = ["Mangoes","guava", "Apple", "Oranges"];
    $scope.addItem = function(add){
        $scope.list.push(add);
        $scope.newItem = "";
    }
    $scope.remove = function(remove) {
        let removeItem = $scope.list.indexOf(remove);
        $scope.list.splice(removeItem, 1);
    }
});
    

