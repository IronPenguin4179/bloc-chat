(function() {
    function RoomCtrl(Room, Message) {
        this.theRooms = Room.all;
        this.currentRoomName = null;
        this.currentUser = Message.currentUser;

        this.makeCurrentRoom = function(room) {
            this.currentRoomName = room.$value;
            this.currentRoomId = room.$id;
            this.messages = Message.getByRoomId(this.currentRoomId);           
        }
        
        this.addRoom = function() {
            Room.add(this.newRoomName)
            this.newRoomName = '';
        };

        this.messageSend = function() {
            Message.send(this.messageContent, this.currentRoomId);
            this.messageContent = '';
        }
    }
 
    angular
        .module('bloc-chat')
        .controller('RoomCtrl', ['Room','Message', RoomCtrl]);
})();