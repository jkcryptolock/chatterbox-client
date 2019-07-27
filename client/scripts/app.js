var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    debugger;
    FormView.initialize();
    RoomsView.initialize();
    App.startSpinner();
    App.fetch(()=> {
      App.stopSpinner();
      MessagesView.initialize();
    })

    // Fetch initial batch of messages

  },

  // messages: undefined,

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      // examine the response from the server request:
      console.log(data);
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