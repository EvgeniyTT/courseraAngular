(function() {angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope){
    $scope.food = '';
    $scope.check = function() {
      // filter empty items
      var filteredList = $scope.food.split(',').filter(item => { return item.trim()!=''});
      if (filteredList.length == 0) {
        $scope.message = 'Please enter data first';
      } else if (filteredList.length < 4) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
      }
  })
})()
