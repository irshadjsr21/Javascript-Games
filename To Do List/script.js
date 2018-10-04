$(function(){
    $('.add').on('click', addToDo);
});

function addToDo(){
    
    var text = $('#newToDo').val();
    if(!text){
        return;
    }
    $('#newToDo').val('');
    createCard(text);
    setTimeout(function(){
        $('.newCard').removeClass('newCard');
    }, 10);
}

function createCard(content){
    var text = '<div class="text">' + content + '</div>';
    var img = '<img src="icons/delete.png" alt="" class="delete"><img src="icons/001-right.png" alt="" class="check">';
    var card =  '<div class="card newCard">' + text + img + '</div>';
    $(card).prependTo('#toDo').find('.check').on('click', doneCard).siblings('.delete').on('click', removeCard);;
}

function removeCard(){
    var x = this;
    $(this).parent().addClass('removeCard');

    setTimeout(function(){
        $(x).parent().remove();
    }, 1000);
}

function doneCard(){
    var x = $(this).parent().html();
    $(this).parent().remove();
    $(this).attr('src', 'icons/002-check.png');
    
    $('#done').prepend('<div class="card doneCard newCard">' + x + '</div>');
    setTimeout(function(){
        $('.newCard').removeClass('newCard');
    }, 10);
    $('.delete').on('click', removeCard);
}