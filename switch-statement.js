// 1.  Using a switch statement create a program that has a variable myVar that can be changed resulting in the following console outputs when run.
// when myVar = "a" it logs:
// "Hey"
// when myVar = "b" it logs:
// "Foo"
// "Bar"
// when myVar = "c" it logs:
// "Bar"

var myvar = 'b'
    switch(myvar){
        case 'a':
        console.log("Hey");
        break;
        case 'b':
        console.log("Foo", "Bar");
        break;
        case 'c':
        console.log("Bar");
        break;
        default:
        console.log('Nothing')
    }