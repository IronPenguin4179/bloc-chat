(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    var checkTime = function(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    var displayTime = function() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        m = checkTime(m);
        time = h + ":" + m;
        return time;
    }
    Message.currentUser = $cookies.get('blocChatCurrentUser');
    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage, currentRoomId) {
      console.log(newMessage);

      messageObject = {
        content: newMessage,
        roomId: currentRoomId,
        sentAt: displayTime(),
        username: Message.currentUser
      }
      messages.$add(messageObject);
    };

    return Message;
}

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();