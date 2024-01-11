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