(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(newRoomName) {
      rooms.$add(newRoomName);
    }
    
    Room.remove = function(roomNum) {
      rooms.$remove(rooms[roomNum]);
    }
    return Room;
}

  angular
    .module('bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();