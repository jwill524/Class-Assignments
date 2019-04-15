
function getUserByName(username){
return new Promise((resolve,reject)=>{
    $('#myBtn').click(function(){
        $.get( 'http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
        if(users.length)
			 	resolve(users[0]);
			else
				reject('User with name ' + username + 'not found');
        })
    })
})

}
then((message)=>{
    console.log('Success')
}).catch((message)=>{
    console.log('Failed')
})