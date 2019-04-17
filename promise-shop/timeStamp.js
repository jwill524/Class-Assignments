// class Module {

//     constructor(hi){
//         this.hi = hi;
//     }

//     sayHi(){
//         return this.hi;
// }
// }

// module.exports = Module;


//
const moment = require('moment');

const timeStamp = {

      getTime(){
        console.log( new moment().format('MMMM Do YYYY, h:mm:ss a'));
    }

}

module.exports = timeStamp;