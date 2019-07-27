var Friends = {
  befriend: function(value) {
    value = value.split(' ');
    value = value[0]
    $(`.${value}`).css('background-color', "yellow");
  }

};
