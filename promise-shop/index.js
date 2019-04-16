const moment = require('moment');
const request = require('request-promise')
console.log("hfuapidsg")



    setInterval(() => {
        request('http://jsonplaceholder.typicode.com/posts/1')
    .then(console.log)

   var day = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(day)
        
    }, 3000);