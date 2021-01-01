let names = ['Ben', 'Jenny', 'Michael', 'Chloe', 'Timmy'];
names.push('Max');

let neighbours = ['Patrick', 'AnnMarie', 'Alisol', 'Walton'];

const whoIsWashing = (arr) => {
	let randomIndex = Math.floor(Math.random() * arr.length);
	return `${arr[randomIndex]} is going to wash the dishes today!!!`;
};

console.log(whoIsWashing(names));
console.log(whoIsWashing(neighbours));
