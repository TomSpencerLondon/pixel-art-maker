$(window).ready(function() {
  //Create the grid
  function makeGrid(height, width) {

      for (let i = 0; i < height; i++) {
          $('#pixelCanvas').append('<tr></tr>');
          for (let j = 0; j < width; j++) {
              $('tr:last').append('<td class="cells"></td>');
          }

      }
      //Add event clicker for each pixel
      $('.cells').click(function(event) {
          let color = $('#colorPicker').val();
          event.preventDefault();
          $(event.target).css('background-color', color);
      });
  }
  //Event picker for the sizePicker
  $('#sizePicker').submit(function(evt) {
      $('tr').remove();
      let height, width;
      width = $('#inputWidth').val();
      height = $('#inputHeight').val();
      evt.preventDefault();
      makeGrid(height, width);
  });

});