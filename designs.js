// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(window).ready(function () {

function makeGrid(height, width) {
  let pixelCanvas, grid; 
  pixelCanvas = $('#pixelCanvas'); 

  for(let i = 0; i < height; i++){
    grid += '<tr>'; 
    for(let j = 0; j < width; j++){
      grid += '<td></td>'; 
    }
      grid += '</td>'
  }
  pixelCanvas.html(grid); 
  pixelCanvas.css("background-color", "#ffffff");

}
	$('#sizePicker').click(function(evt) {
    $('tr').remove();
    let height, width;
    width = $('#inputWidth').val();
    height = $('#inputHeight').val();
    console.log(evt.target);
		evt.preventDefault();
    makeGrid(height, width);
  });

  $('#pixelCanvas').click(function(event) {
    console.log("hello-1-1");
    let color = $('#colorPicker').val(); 
    $(event.target).css("background-color", color);  
  });
  
});
