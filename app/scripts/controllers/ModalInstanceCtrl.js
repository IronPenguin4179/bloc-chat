(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.word = "foo";
        this.work = function () {
            this.word = "bar";
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
        .controller('ModalInstanceCtrl',["$uibModalInstance",ModalInstanceCtrl]);
})();