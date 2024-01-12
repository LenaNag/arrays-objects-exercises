// zadanie 1
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
};

console.log(mergeArrays([2, 5], [3, 7]));

//zadanie 2
const exceptFirst = (...parameters) => {
    return parameters.slice(1);
};

console.log(exceptFirst(2, "delfin", null));

//zadanie 3
const last2Parameter = (...parameters) => {
    return parameters.slice(-2);
};

console.log(last2Parameter(1, 3, undefined, null));

//zadanie 4
const indexOf = (element, array) => {
    return array.indexOf(element);
};

console.log(indexOf("kawa", ["rum", "kawa", "sangría"]));

//zadanie 5
const tasks = [
    {content: ""},
    {content: "kupić balony w kształcie psów"},
];

const findNonEmptyTask = task => task.content !== "";

const nonEmptyTask = tasks.find(findNonEmptyTask);
console.log(nonEmptyTask);

//zadanie 6
const numbers = [2, 4, 7, 8];

const oddIndex = number => number % 2 == 1;
const firstOddIndex = numbers.findIndex(oddIndex);
console.log(firstOddIndex);

//zadanie 7
const fruits = ["banan", "marakuja"];

const hasStrawberry = fruits.includes("truskawka");
console.log(hasStrawberry);

//zadanie 8
const people = [
    {name: "Melodia", age: 15},
    {name: "Kosmo", age: 19},
];

const someAdult = x => x.age >= 19;
const isSomeAdult = people.some(someAdult);
console.log(isSomeAdult);