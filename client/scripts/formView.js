var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val()
    var roomPost = '';
    if ($('#addRoom').val()){
      roomPost = $('#addRoom').val();
    } else {
      roomPost = $('select').val();
    }
    var newMsg = new Messages(App.username, text, roomPost)
    Parse.create(newMsg);
    $('#message').val('');
    MessagesView.renderMessage(newMsg);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};