// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(window).ready(function () {

  function makeGrid(height, width) {
    
    for(let i = 0; i < height; i++){
      $('#pixelCanvas').append('<tr></tr>'); 
      for(let j = 0; j < width; j++){
        $('tr:last').append('<td class="cells"></td>');
      }
      
    }
    $('.cells').click(function(event) {
      let color = $('#colorPicker').val(); 
      event.preventDefault(); 
      $(event.target).css('background-color', color); 
    });
  }

	$('#sizePicker').submit(function(evt) {
    $('tr').remove();
    let height, width;
    width = $('#inputWidth').val();
    height = $('#inputHeight').val();
		evt.preventDefault();
    makeGrid(height, width);
  });

});
