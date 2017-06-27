(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.newUsername = "wrongName";
        
        this.addName = function() {
            this.newUsername = this.name;
            console.log(this.newUsername);
        }
        this.ok = function () {
            $uibModalInstance.close();
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
         angular
        .module('bloc-chat')
        .controller('ModalInstanceCtrl',['$uibModalInstance',ModalInstanceCtrl]);
})();