function add_text_row(){
	var row = jQuery('<div/>', {class: 'row'});
	var row_text = jQuery('<div/>', {class: 'row-text'});
	var text_input = $('#text-input');
	row_text.text(text_input.val());
	text_input.val('');
	var close_button = jQuery('<img/>', {src: 'close.png', class: 'close-button'});
	close_button.click(delete_row);
	close_button.hover(hover_close_button, unhover_close_button);
	row.append(row_text, close_button);
	$('.wrapper').append(row);
}

function delete_row(event){
  var button = $(event.target);
  var row = button.parent();
  row.remove();
}

function hover_close_button(event){
	var button = $(event.target);
	button.attr('src', 'close-hover.png');
}

function unhover_close_button(event){
	var button = $(event.target);
	button.attr('src', 'close.png');
}

function start(){
	$('#add-button').click(add_text_row);
}

$(document).ready(start);
