
var submit = $('#myBtn')

function getUserByName(username){
    return new Promise((resolve,reject)=>{debugger
        $('#myBtn').click(function(){
            var username = document.getElementById('myText').value
            $.get( 'http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
            if(users.length)
                     resolve(users[0]);
                     else
                     reject('User with name ' + username + 'not found');
             })
         })
     })
    }
    
    //console.log(users)
    

//     function getPostsByUser(user) {
//         return new Promise(function(resolve,reject){
//              $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, function(posts){
//                  resolve(posts);
//              });
//         })
//         }

//         function getAlbumByUser(user) {
//             return new Promise(function(resolve,reject){
//                  $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, function(album){
//                      resolve(album);
//                  });
//             })
//             }


//             const userPromise = getUserByName();
//             const postsPromise = getPostsByUser();

