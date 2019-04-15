$('#myBtn').click(function(){
    $.get( 'http://jsonplaceholder.typicode.com/posts', function(t){
        console.log(t)
    })
    
})

$('#myBtn1').click(function(){
    $.get( 'http://jsonplaceholder.typicode.com/posts/10', function(t){
        console.log(t)
    })
    
})

$('#myBtn2').click(function(){
    $.get( 'http://jsonplaceholder.typicode.com/posts/12/comments', function(t){
        console.log(t)
    })
    
})

$('#myBtn3').click(function(){
    $.get( 'http://jsonplaceholder.typicode.com/posts/2', function(t){
        console.log(t)
    })
    
})


$('#myBtn4').click(function(){
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

})


$('#myBtn5').click(function(){
fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
})