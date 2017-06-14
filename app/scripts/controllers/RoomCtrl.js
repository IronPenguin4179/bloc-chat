(function() {
    function RoomCtrl(Room) {
        
        this.theRooms = Room.all;
        this.addRoom = function() {
            Room.add(this.newRoomName)
            this.newRoomName = '';
        };
    }
 
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();