/**
 * Filter Unique Values
 */

const array = [1, 1, 2, 3, 6, 6, 3, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 6]
