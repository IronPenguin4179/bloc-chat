(function() {
    function RoomCtrl(Room) {
        this.theRooms = Room.all;
    }
 
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();