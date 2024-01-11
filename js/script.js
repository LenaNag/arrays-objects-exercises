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