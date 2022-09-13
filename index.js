const bestFriends = [
  { id: "1", name: "Daniyal Manzoor", age: 24 },
  { id: "2", name: "Aqib Ali", age: 25 },
  { id: "3", name: "Ali Shair", age: 23 },
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

// convert to id => person lookup (dict)

friendsId = bestFriends.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});
console.log(friendsId);

// max age

maxAge = bestFriends.reduce((acc, person) => {
  if (acc === null || person.age > acc) return person.age;
  return acc;
}, null);
console.log(maxAge);
// min age

minAge = bestFriends.reduce((acc, person) => {
  if (acc === null || person.age < acc) return person.age;
  return acc;
}, null);
console.log(minAge);
// find by name

findName = bestFriends.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Ali Shair") return person;
  return null;
}, null);
console.log(findName);
// all over 18

result = bestFriends.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 20;
}, true);
console.log(result);
// any over 18

result = bestFriends.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 18;
}, false);
