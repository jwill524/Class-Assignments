let userName = document.querySelector('input#myText')
let submit = document.querySelector('button [ type = "button"]')

function getUserByName(username){
return new Promise((resolve,reject)=>{
        $.get( 'http://jsonplaceholder.typicode.com/users?username=' + username, function(user){
        if(user.length)
			 	resolve(user[0]);
			else
				reject('User with name ' + username + 'not found');
        })
    })
}

function getUserPost(user){
    return new Promise((resolve,reject) => {
        $.get('http://jsonplaceholder.typicode.com/post?userid=' + user.id, function(posts){
            resolve (posts)
        })
    })
}

function getUserAlbum(user){
    return new Promise((resolve,reject) => {
        $.get('http://jsonplaceholder.typicode.com/album?userid=' + user.id, function(album){
            resolve (album)
        })
    })
}







