function add_text_row(){
	var div = jQuery('<div/>', {class: 'row'});
	var row_text = jQuery('<div/>', {class: 'row-text'});
	row_text.text($('#text-input').val());
	$('#text-input').val('');
	var close_button = jQuery('<img/>', {src: 'close.png', class: 'close-button'});
	close_button.click(delete_row);
	div.append(row_text, close_button);
	$('.wrapper').append(div);
};

function delete_row(event){
  alert("ROW MUST BE DELETED!!!");
};

function start(){
	$('#add-button').click(add_text_row);
};

$(document).ready(start);
