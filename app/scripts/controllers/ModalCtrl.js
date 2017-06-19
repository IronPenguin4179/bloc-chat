(function() {
    function ModalCtrl($uibModal) {
        this.open = function (size, parentSelector) {
            //var parentElem = parentSelector ? 
            //angular.element($document[0].querySelector('.newChatRoomModal ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalinstancectrl'
              //  size: size,
              //  appendTo: parentElem,
            });
        }
    }
            
    angular
        .module('bloc-chat')
        .controller('ModalCtrl',["$uibModal",ModalCtrl]);
})();