const bestFriends = [
  { id: "1", name: "Daniyal", age: 24 },
  { id: "2", name: "Aqib", age: 25 },
  { id: "3", name: "ALi", age: 23 },
];

let result;

// count

count = bestFriends.reduce((acc, person) => acc + 1, 0);
console.log(count);

// sum ages

sumAge = bestFriends.reduce((perv, curr) => perv + curr.age, 0);
console.log(sumAge);
// // array of names (map)

getName = bestFriends.reduce((acc, person) => [...acc, person.name], []);
console.log(getName);
