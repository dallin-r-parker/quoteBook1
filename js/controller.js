angular.module('quoteApp')
    .controller('quoteController', function ($scope, mainService) {

        $scope.getQuotes = mainService.getQuotes();

        $scope.input = function () {
             mainService.getAdd($scope.quoteInput, $scope.authorInput);
        };
        
        $scope.delete = function (textToRemove) {
            mainService.removeQuote(textToRemove);
        }

});