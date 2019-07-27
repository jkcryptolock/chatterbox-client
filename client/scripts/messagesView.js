var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // // App.startSpinner();
    // // App.fetch(App.stopSpinner);

    // var html = ``;

    // $(document).ready(function() {
    //   var msgList = App.messages;

    //   for (var i = 0; i < msgList.results.length; i++) {
    //     if (!msgList.results[i].username) {
    //       msgList.results[i].username = "";
    //     }
    //     if (!msgList.results[i].text) {
    //       msgList.results[i].text = "";
    //     }
    //     if (!msgList.results[i].roomname) {
    //       msgList.results[i].roomname = "";
    //     }
    //     html += MessageView.render(msgList.results[i])
    //     console.log(msgList.results[i]);
    //   }

    //   MessagesView.$chats.append(html);

    //   });
    MessagesView.renderMessage();
  },

  renderMessage: function() {

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
      MessagesView.$chats.append($message);
    }

  }

};