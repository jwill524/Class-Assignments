const header = document.getElementsByTagName('header');
console.log(header);

const allSection = document.getElementsByTagName('section');
console.log(allSection);

const firstClass = document.getElementsByClassName('current');
console.log(firstClass);

const nextSection = firstClass[0].nextElementSibling;
console.log(nextSection)

const prevSection = firstClass[0].previousElementSibling;
console.log(prevSection);

const divPart = firstClass[0].parentElement;
console.log(divPart);

const h2s = document.querySelectorAll('h2');
console.log(h2s)