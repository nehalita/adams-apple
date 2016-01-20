var adamsApple = require('../../configuration/module');

adamsApple.directive('helloTitle', function () {
    return {
        restrict: 'E',
        template: '<div>Hello!!!</div>'
    }
});