const Request = require('request-promise');

//creating dataAccess module
const dataAccess = {

   getPost(postID){
       Request( `http://jsonplaceholder.typicode.com/posts/` + postID)
      .then(resp => console.log(resp));
   }
}
module.exports = dataAccess;