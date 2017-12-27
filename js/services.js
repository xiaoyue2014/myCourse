angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '老师',
    lastText: 'You on your way?',
    face: '../img/teacher.svg'
  }, {
    id: 1,
    name: '学生',
    lastText: 'Hey, it\'s me',
    face: '../img/student.svg'
  }, {
    id: 2,
    name: '家长',
    lastText: 'Did you get the ice cream?',
    face: '../img/parents.svg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
