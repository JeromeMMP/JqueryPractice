$('form').on('click','#submit',function(e){
    e.preventDefault();
    
    if(title.lenth<2){
        return alert("title need to be at leas 2 character long")
    }
    let title = $('#title').val();
    let rating =$('#rating').val();
    let textValue = 'Title: <b>'+ title +'</b> <br>'+ 'Rating: <b>'+ rating +'</b> ' ;
    


    const li = $('<li>').html(textValue)
    const btn = $('<button>').text('Delete').addClass('deleteBtn'); 
    
    
    $('ul').append(li.append(btn));

    btn.on('click', function(e){
        $(e.target).parent().remove();
    })


}) 
