// // Makes the id "list" an object with a click function that removes an element in the list
$('ul').click(function(e){
    // to click all original and created elements you have to use e.target and give it a variable
    const li = e.target
    //remove the clicked item
    li.remove();
})


// Makes a button with a click function
$("#myBtn").click(function(){
    //creates a variable for the value of my input
    const text = $('#myText').val();
    //adds my text variable to the unordered as a list element
    $("ul").append('<li>'+ text+'</li>' );
  });


    