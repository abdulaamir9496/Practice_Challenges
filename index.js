/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
// const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
// const numsSquared = nums.map((num) => num * num);
// console.log(numsSquared);


//Use Math.sqrt() with map() to square root each element of an array:
// const array = [1, 4, 9, 16];
// const sqrtArray = array.map(square => Math.sqrt(square));
// console.log(sqrtArray);

//Double the Array
// const numsDoubled = nums.map((double) => double * 2);
// console.log(numsDoubled);


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

// const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
// const capitalizedArray = names.map((name) => {
//     return name[0].toUpperCase() + name.slice(1);

// const capitalizedArray = names.map(name => name[0].toUpperCase() + name.slice(1));
// });

// console.log(capitalizedArray);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
// const monsters = pokemon.map((mons) => `<p>${mons}</p>`);
const monsters = pokemon.map(mons => `<p>${mons}</p>`)
console.log(monsters);