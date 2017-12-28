angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '老师',
    lastText: 'You on your way?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏','语文试卷']
  }, {
    id: 1,
    name: '学生',
    lastText: 'Hey, it\'s me',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏']
  }, {
    id: 2,
    name: '家长',
    lastText: 'Did you get the ice cream?',
    content: '2018中考语文总复习（安徽专版）名师课件：1.4 专题四 语文综合应用 （共122张PPT）',
    time: '2017-12-26 17:21',
    tags: ['收藏']
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
