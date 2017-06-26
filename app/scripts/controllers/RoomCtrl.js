(function() {
    function RoomCtrl(Room, Message) {
        this.makeCurrentRoom = function(room) {
            this.currentRoomName = room.$value;
            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages);
        }
        
        this.theRooms = Room.all;
        this.addRoom = function() {
            Room.add(this.newRoomName)
            this.newRoomName = '';
        };

    }
 
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', ['Room','Message', RoomCtrl]);
})();