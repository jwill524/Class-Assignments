// Makes the id "list" an object with a click function
//document.getElementById('list').addEventListener('click',myFunction);

var list = $('#list')[0].click(function(){
    $(this).css('background-color' , 'pink');
})

