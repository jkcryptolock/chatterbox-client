var RoomsView = {

  $button: $('#roomsBtn'),
  $select: $('#rooms select'),

  initialize: function() {
    $('select').empty();
    $('select').empty().append(`<option value="" disable selected>Choose a room</option>`);
    var rooms = [];
    for (var i = 0; i < data.results.length; i++) {
      if (!data.results[i].roomname) {
        data.results[i].roomname = "";
      }
      rooms.push(data.results[i].roomname);
    }
    rooms = new Set(rooms);
    for (var room of rooms) {
      $('select').append(`<option value="${room}">${room}</option>`);
    }
  },

  renderRoom: function(room) {
    // RoomsView.$button.on('click', function() {
    //   console.log('hello');
    // })

    console.log('hello');

    $('#chats').empty();
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].roomname === room) {
        var $message = MessageView.render(data.results[i]);
        $('#chats').append($message);
      }
    }
  }

};
