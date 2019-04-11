// Makes the id "list" an object with a click function
document.getElementById('list').addEventListener('click',myFunction);

// this is the click function
function myFunction(e){
    // this runs for each individual element you click on
    const li = e.target;
    // removes the clicked item from the list
    document.getElementById('list').removeChild(li);
}





// created function called new element: 'newElement' was recieved from the onclick in the html
function newElement() {
    //creates an element called li to add the the actual unOrdered list
    var li = document.createElement("li");
    //your input comes from what you input, called by the input id 'myText'
    //'myText was recieved from the html
    var inputValue = document.getElementById("myText").value;
    //creates a text string from your input value 
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     //adds it to the list
    document.getElementById("list").appendChild(li);
}




