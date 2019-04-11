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



//const newCoffee = document.querySelector('#list');

// list.children[1].innerHTML = "Fair Trade Coffee";
// list.children[3].remove();

// const newLi = document.createElement('li');
// newLi.innerHTML = 'Cheese Whiz';

// const newList = document.querySelector('ul');
// list.appendChild(newLi);

// list.innerHTML = '';
// ['protein powder', 'muscle milk', 'power bars'].forEach(function(itemText){
// 	var li = document.createElement('li');
// 	li.innerHTML = itemText;
// 	list.appendChild(li);
// })










