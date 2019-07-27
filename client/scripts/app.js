var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    // debugger;
    App.startSpinner();
    App.fetch(()=> {
      App.stopSpinner();
      // Fetch initial batch of stuff
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      // RoomsView.renderRoom();
    })
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      // examine the response from the server request:
      window.data = data;
      callback();

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

// setInterval( function() { App.fetch(()=> {
//   MessagesView.initialize();
// })} , 100)

