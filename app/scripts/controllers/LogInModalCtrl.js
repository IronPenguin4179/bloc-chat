(function() {
    function LogInModalCtrl(BlocChatCookies) {
        
        
        this.addName = function() {
            this.newUsername = this.name;
            Cookies.addCookie(this.newUsername);
            console.log(this.newUsername);
        }
    }
        angular
            .module('bloc-chat')
            .controller('LogInModalCtrl',[LogInModalCtrl]);
})();