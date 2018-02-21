// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(window).ready(function () {

function makeGrid(height, width) {

  let pixelCanvas, grid; 
  pixelCanvas = $('#pixelCanvas'); 

  if(pixelCanvas.children().length) {
    pixelCanvas.empty(); 
  }

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
    let height, width;
    width = $('#inputWidth').val();
    height = $('#inputHeight').val();
		evt.preventDefault();
		makeGrid(height, width);
  });
  
});
