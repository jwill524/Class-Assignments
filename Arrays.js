// var list=["pop-tarts", "ramen noodles", "chips", "salsa", "coffee"];
// var cart=[]
// list[4]="fair trade coffee";
// list.push("fruit loops");
// list.splice(2,2,"rice","beans");

// cart.push(list.shift());


// while( list.length > 0)
// cart.push(list.pop());
// cart.sort();
// cart.reverse();

// console.log( cart)

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};