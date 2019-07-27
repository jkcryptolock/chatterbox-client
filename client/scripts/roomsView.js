var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
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

  renderRoom: function() {
  }

};
