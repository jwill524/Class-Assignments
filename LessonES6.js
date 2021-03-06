//Template Literal

console.log(`Hello!`
`continues  on this line`); // ES6 way

console.log('Hello! \n' + 'continues on this line');

const name = 'Jimmy';
const day = 'wednesday';
const instructor = {
    name: CHris,
    lesson:ES6,
    greet: function(){
        return 'Hello ${this.name} ${this.lesson} is my favorite day'
    }
}

console.log('Hello' + name + day + 'is my favorite day'); // ES5

console.log(`Hello ${name} ${day} is my favorite day`); //ES6 way interpellation

console.log(instructor.greet());


//Scope
function foo(){

    let x = true;
    if (x){
        let usingVar = "im using var";
    }
    console.log(usingVar);
}
// using let gives you more control
foo();// undefined



const instructors = ['Jimmy', 'Chris']
instructors = ['Jim', 'chriss']// error, can't reassign a value to a const variable

//const also accepts uppercase

function hello(name){
    name = name || 'Mystery Person'
    console.log("Hello" + name + " !")
}
hello('Bobby'); //Hello Bobby !

hello();// Hello Mystery person !


//ES6
function hello(name = 'Mystery Person'){
    console.log(`Hello ${name} !`)
}
hello('Bobby'); //Hello Bobby !

hello();// Hello Mystery person !


//Arrow functions
const teacher = {
    name:'Jim',
    speak:function(){
        //bind a function to specific context
        let boundFunction = () => {
            console.log("later my name is" + this.name);
        };
        // bound function will always run in bound context
        setTimeout(boundFunction, 1000)
    }
}
teacher.speak();
// Lexical Binding - they bind to cope where defined not where they are used 


let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: ' Taylor'}
]

// doesn't have to have a return statement as long as its on the same line
let names = students.map((student)=> student.name);
//Same as
let names = students.map((student)=> {
    return student.name
})
console.log(names);


//Prototype
function add() {
    console.log( "arguments object:", arguments);
//turns the numbers variable into an array; making it able to use array properties
//slice takes a selected object and puts it into an array
    var numbers = Array.prototype.slice.call(arguments);

    var sum = 0;
    //iterates over each number you put into the object and runs the function sum += number
    //sum += number is the same as sum = sum + number meaning each run through the sum is added to the new number
    numbers.foreach((number) =>{
        sum += number;
    })
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,));

//Rest parameter
let add = (...numbers) => {
    console.log("rest parameters", numbers);

    let sum = 0;
     
    numbers.foreach(function(number) {
        sum +=number;
    });
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8));

let add = (...numbers)=>numbers.reduce((sum,number)=>sum+=number,0);

function addStuff(x,y, ...z){
    return(x+y) *z.length
}

console.log(addStuff(1,2, "Hello", "World",true, 99));

//Spread Operator
let random = ["Hello", "World",true,99];
let newArray = [1,2, ...random, 3 ];
console.log(newArray);
//[1,2, "Hello", "World", true, 99, 3]

let spreadEx = (item) => {
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}

spreadEx("Hello World")
// spreads out Hello World literally

let rest = (...z) => {
    console.log(z)
    return z
}

restEx("hello", "world")
//["hello", "world"]

var students = ["Julian", "AJ", "Matt"];
var y = students[0]
var x = students[1]
var z = students[2]

console.log(x,y,z)

var students = ["Julian", "AJ", "Matt"];
let[x,y,z] = students

let [x, ,z] = students

let [x, ...rest] = students;
console.log(x, rest);
//Julian ["Aj", "Matt"]

//Deconstructor
let completedHomework = () => {
    return ["Julian", "AJ", "Matt"];
}

let [x,y,z] = completedHomework();

console.log(x,y,z);

let instructor = {
    name: "jimmy",
    email: 'no@no.com'
}

let {name:x, email: y} = instructor;

console.log(x);

let car = {
    make:"Honda"
}

function something({make,year = 2001}){
    console.log(make,year);
}

something(car)

//Constructor & Protypes
function Person (name, job){
    this.name = name;
    this.job = job;
}

Person.prototype.getName = function getName(){
    return this.name
}

Person.prototype.getJob = function getJob(){
    return this.job
}

var goodGuy = new Person("Aang", "Airbender");

console.log(goodGuy.getName() +" "+  goodGuy.getJob())

class Person {
    constructor (name, job){
        this.name = name;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getjob(){
        return this.job;
    }
}

let goodGuy = new Person ('Neo', 'the one ')
console.log(goodGuy);

class Person {
    constructor (name, job){
        this.name = name;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getjob(){
        return this.job;
    }
}

class SuperHero extends Person{
    constructor(name, heroName, superPower){
        super(name);
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretIdentity(){
        return `${this.heroName} is ${this.name}!!`
    }
}
let batman = new SuperHero("Bruce Wayne",  "Batman")
console.log(batman.secretIdentity())


// Set &Get
class Person{
    constructor (name){
        this.name=name;
    }
    get name (){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    
}

let goodGuy = new Person("Jim gordon")
console.log(goodGuy.name);

goodGuy.name = "James Gordon";
console.log(goodGuy.name);



let student = {name: "A-aron"};
let status = new Map();

status.set(student.name, "D-Nice");
status.set("feeling", "churlish");

console.log(status.get(student.name));
console.log(status.get("feeling"));