var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#chats').empty();
    for (var i = 0; i < data.results.length; i++) {
      if (!data.results[i].username) {
        data.results[i].username = "";
      }
      if (!data.results[i].text) {
        data.results[i].text = "";
      }
      if (!data.results[i].roomname) {
        data.results[i].roomname = "";
      }
      var $message = MessageView.render(data.results[i]);
      $('#chats').append($message);
    }
  },

  renderMessage: function(message) {
    App.fetch(()=> {
      MessagesView.initialize();
    })
    // if (!message.username) {
    //   message.username = "";
    // }
    // if (!message.text) {
    //   message.text = "";
    // }
    // if (!message.roomname) {
    //   message.roomname = "General";
    // }
    // var $message = MessageView.render(message);
    // $('#chats').prepend($message);
  }

};