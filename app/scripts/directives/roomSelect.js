(function() {
    function roomSelect($document) {
        var x = 0;
        this.addNum = function() {x++;}
        console.log(x);
        return {
            templateUrl: '/templates/directives/roomSelect.html',
            replace: true,
            restrict: 'E',
            scope: {
                onChange: '&'    
            }
        }
    }
    angular
        .module('bloc-chat')
        .directive('roomSelect', ['$document', roomSelect]);
})();