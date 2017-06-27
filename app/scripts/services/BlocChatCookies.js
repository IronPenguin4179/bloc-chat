(function() {
    function BlocChatCookies($cookies, $uibModal) {
        Cookies = {};
        console.log("Pre username check");
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log("Post username check, name is "+currentUser);
        if (!currentUser || currentUser === '') {
            this.open = function () {
                console.log("Inside modal block");
                var modalInstance = $uibModal.open({
                    animation: this.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: '/templates/logInModalInstance.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'modalinstancectrl',
                    backdrop: 'static'
              
                });
            }
            var modalOpen = this.open();
            modalOpen;
            
        }
        Cookies.addCookie = function(username) {
          $cookies.put("blocChatCurrentUser",username);
          console.log(currentUser);
        }
        return Cookies;
    }
    angular
        .module('bloc-chat')
        .run(['$cookies','$uibModal', BlocChatCookies]);
})();