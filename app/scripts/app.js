(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
 
        $stateProvider
            .state('room', {
                url: '/',
                controller: 'RoomCtrl as roomctrl',
                templateUrl: '/templates/room.html'
            })
            .state('modal', {
                controller: 'ModalCtrl as modalctrl',
                templateUrl: '/templates/modal.html'
            })
            .state('modalInstance', {
                controller: 'ModalInstanceCtrl as modalinstancectrl',
                templateUrl: '/templates/modal.html'
            });
    }
     
    angular
        .module('bloc-chat', ['ui.router', 'firebase','ui.bootstrap','ngCookies'])
        .config(config);
})();