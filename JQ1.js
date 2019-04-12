//selects the h1 tag and turns orange for comformation with a click
// $('h1').click(function(){
//     $(this).css('background-color' , 'orange');
// })


/* to make it turn orange it has to be connected to the thing you want to 
change then the select all syntax
*/
$('section').hover(function(){
    $(this).css('background-color' , 'purple');
    $('*')// select all
})


let current = $('.Current');
// selects the section element with the class = 'current
$('.current h2').click(function(){
    $(this).css('background-color' , 'red');
})

current.next().click(function(){
    $(this).css('background-color' , 'pink');
    $('*')// select all
})






