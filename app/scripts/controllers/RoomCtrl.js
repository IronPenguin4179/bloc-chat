(function() {
    function RoomCtrl(Room) {
        this.newRoomName = 'bloop'
        this.theRooms = Room.all;
        this.addRoom = function() {
            Room.add(this.newRoomName)
        };
    }
 
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();