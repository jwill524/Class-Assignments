const input = document.querySelector('input')
const example = document.querySelector('#example')

 input.addEventListener("change", (e) =>{
const rgb = getRgb(e.target.value);
 })

console.log(rgb)
example.style.background = e.target.value



network.train([
    {input: {r: 0, g: 0, b: 0}, output: {dark: 1 }},
    {input: {r: 1, g: 1, b: 1}, output: {light: 1 }},
    {input: {r: 0.74, g: 0.78, b: 0.86}, output: {light: 1 }},
    {input: {r: 1, g: 0.99, b: 0}, output: {dark: 1 }},
    
])
const result = brain.likely(rbg, network);

const brain = require("brain.js")
const network = new brain.NeuralNetwork();

network.train([
    { input: [60, 150], output: [1]},
    { input: [70, 260], output: [1]},
    { input: [20, 50], output: [0]},
    { input: [30, 60], output: [0]}
]);

// network.train([
//         { input: {height: 60, weight: 150}, output: {Adult: 1}},
//         { input: {height: 100, weight: 150}, output: {Adult: 1}},
//         { input: {height: 20, weight: 50}, output: {Child: 0}},
//         { input: {height: 30, weight: 40}, output: {Child: 0}}
//     ]);

const result = network.run({color:70})

console.log(result);




 //brain.js and getRGB helper function
 function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
  }