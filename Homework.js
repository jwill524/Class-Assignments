// function upperCaser(input) {
//     return input.toUpperCase();
//   }

//   module.exports = upperCaser

// function add(number1,number2){
//     return number1 + number2;
// }


// function repeat(operation, num) {
//     return operation(num)
//   }

//   // Do not remove the line below
//   module.exports = repeat

function doubleAll(numbers) {
   const arr = Array.prototype.map(function(x){   
        return x*2;

    })
    return numbers
  }

  module.exports = doubleAll