(function() {
    function ModalCtrl($uibModal) {
        this.open = function () {
    
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalinstancectrl'
            });
        }
    }
            
    angular
        .module('bloc-chat')
        .controller('ModalCtrl',['$uibModal',ModalCtrl]);
})();