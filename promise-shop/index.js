const moment = require('moment');
const request = require('request-promise');
console.log("hfuapidsg");
// const Module = require('./module');
const dataMod = require('./dataAccess');
const timeMod = require('./timeStamp');



//     setInterval(() => {
//         request('http://jsonplaceholder.typicode.com/posts/1')
//     .then(console.log)

//    var day = moment().format('MMMM Do YYYY, h:mm:ss a');
//     console.log(day)
        
//     }, 3000);

    // const mod = new Module("Hi");
    // mod.sayHi();

dataMod.getpost(7);
timeMod.getTime();