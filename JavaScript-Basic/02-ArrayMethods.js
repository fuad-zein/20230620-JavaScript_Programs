/**
 * 1. toString()
 *  - returns string with array values separated by commas(,),
 *  - does overwrites original ? NO ❌
 */
let array1 = [1, 2, 3];
console.log(array1.toString()); // "1, 2, 3"

/**
 * 2. join(separator)
 *  - return array as string, any separator can be specified.
 *  - the default is comma(,)
 *  - does overwrites original ? NO ❌
 */
let array2 = ["Hello", "World...👋"];
console.log(array2.join("-")); // Hello-World...👋
console.log(array2.join("**")); // Hello**World...👋

/**
 * 3. pop()
 *  - removes the last element of an array,
 *  - return removed element.
 *  - does overwrites original ? Yes ✅
 */
let array3 = ["a", "b", "c"];
console.log(array3.pop());
console.log(array3); // ["a", "b"]

/**
 * 4. push(item1, item2 ... n)
 *  - adds new element to the end of an array,
 *  - return new length of array.
 *  - does overwrites original ? Yes ✅
 */
let array4 = ["a", "b", "c"];
console.log(array4.push("z")); // 4 (length)
console.log(array4); // ["a", "b", "c", "z"]

/**
 * 5. shift()
 *  - removes the first element of an array,
 *  - return removed element.
 *  - does overwrites original ? Yes ✅
 */
let array5 = ["a", "b", "c"];
console.log(array5.shift()); // a (removed)
console.log(array5); // ["b", "c"]

/**
 * 6. unshift(item1, item2 ... n)
 *  - adds new element to the start of an array,
 *  - return new length of array
 *  - does overwites original ? Yes ✅
 */
let array6 = ["a", "b", "c"];
console.log(array6.unshift("X")); // 4 (length)
console.log(array6); // ["X", "a", "b", "c"]

/**
 * 7. concat()
 *  - concatenates (join) two or more arrays
 *  - return a new array, joined arrays
 *  - does overwrites original ? No ❌
 */
let ary1 = [1, 2],
  ary2 = [3, 4],
  ary3 = ["a"];
let concatArray = ary1.concat(ary2, ary3);
console.log(concatArray); // [1, 2, 3, 4, "a"]

/**
 * 8. sort()
 *  - sorts the elements of an array,
 *  - strings in alphabetical and ascending order.
 *  - does overwrites original ? Yes ✅
 */
let nums = [5, 3, 6, 2],
  str = ["b", "a", "z"];
console.log(nums.sort()); // [2, 3, 5, 6]
console.log(str.sort()); // ["a", "b", "z"]

/**
 * 9. splice(index*, count, e1, e2..)
 *  - adds and/or removes array elements.
 *  - return removed items in array (if any).
 *  - does overwrites original ? Yes ✅
 */
let array9 = ["a", "b", "c", "d"];
console.log(array9.splice(1, 2, "X")); // ["b", "c"]
console.log(array9); // ["a", "X", "d"]

/**
 * 10. slice(start, end)
 *  - returns selected elements in an array
 *  - as a new array
 *  - default start = 0
 *  - end = last E
 *  - does overwrites original ? No ❌
 */
let numbers = [11, 22, 33, 44, 55];
let sliceArray = numbers.slice(2, 4);
console.log(sliceArray); // [33, 44]

/**
 * 11. reverse()
 *  - reverse the order of the elements in an array
 *  - does overwrites original ? Yes ✅
 */
let array11 = [1, 2, 3, 4, 5];
console.log(array11.reverse()); // [5, 4, 3, 2, 1]

/**
 * 12. isArray(array)
 *  - return true if an object is an array
 *  - otherwise false
 *  - does overwrites original ? No ❌
 */
let array12 = [1, 2, 3, 4, 5];
let str12 = "this is string";
console.log(Array.isArray(array12)); // true
console.log(Array.isArray(str12)); // false

/**
 * 13. indexOf(item, start)
 *  - return the first index of a specified value
 *  - -1 (minus 1) if the value is not found => left to right
 *  - does overwrites original ? No ❌
 */
let array13 = ["a", "b", "c", "d", "e"];
console.log(array13.indexOf("c", 0)); // 2 (index)
console.log(array13.indexOf("b", 3)); // -1

/**
 * 14. lastIndexOf(item, start)
 *  - returns the last index of a specified value
 *  - -1 (minus 1) if the value is not found => right to left
 *  - does overwrites original ? No ❌
 */
let array14 = ["a", "b", "c", "d", "e"];
console.log(array14.lastIndexOf("d", 5)); // 3 (index)
console.log(array14.lastIndexOf("c", 0)); // -1

/**
 * 15. find(callbackFn, thisArg)
 *  - return first element in the array
 *  - if the provided func test passed, else undefined
 *  - does overwrites original ? No ❌
 */
let array15 = [44, 55, "a", "b", 66, 77];
console.log(array15.find((e) => e > 60)); // 66 -> returns only first element

/**
 * 16. findIndexOf(cbFn, thisRg)
 *  - returns index of first element that passes test
 *  - -1 (minus 1) if no match is found
 *  - does overwrites original ? No ❌
 */
let array16 = [44, 55, "a", "b", 66, 77];
console.log(array16.findIndex((e) => e > 60)); // 4 -> first element is 66 test pass & index

/**
 * 17. every(callbackFn, thisArg)
 *  - tests whether all elements in the array pass the test
 *  - returns boolean true/false
 *  - does overwrites original ? No ❌
 */
let array17 = [44, 55, 66, 77];
console.log(array17.every((e) => e > 10)); // true -> all element are greater than 10

/**
 * 18. some(cbFn, thisArg)
 *  - tests whether at least one element in the array passes the test
 *  - return true/false
 *  - does overwrites original ? No ❌
 */
let array18 = [44, 55, 66, 77];
console.log(array18.some((e) => e > 70)); // true -> 77 is greater than 70

/**
 * 19. includes(element, start)
 *  - whether an array includes a certain value among its entries
 *  - return true/false
 *  - does overwrites original ? No ❌
 */
let array19 = [1, 2, 3, "xyz"];
console.log(array19.includes("xyz")); // true
console.log(array19.includes(5)); // false

/**
 * 20. entries()
 *  - return an array iterator object with key/value pairs
 *  - (using for of loop)
 *  - does overwrites original ? No ❌
 */
let array20 = ["a", "b", "c"];
let entrs = array20.entries();
for (const index of entrs) {
  console.log(index + " \n"); // 0,a , 1,b , 2,c
}

/**
 * 21. fill(value, start, end)
 *  - fills specified elements in an array with a value
 *  - if !specified => all elements will be filled
 *  - does overwrites original ? ✅
 */
let array21 = [1, 2, 3, 4, 5];
console.log(array21.fill(100, 2, 4)); // [1, 2, 100, 100, 5] => filled from index 2 to index 3

/**
 * 22. copyWithin(target, S, E)
 *  - copies array elements to another position in the array
 *  - doesn't add items to the array
 *  - does overwrites original ? Yes ✅
 */
let array22 = [1, 2, 3, 4, 5];
console.log(array22.copyWithin(2, 3, 5)); // [1, 2, 4, 5, 5]

/**
 * 23. lengthProperty
 *  - the length property returns the length (size) of an array
 *  - does overwrites original ? No ❌
 */
let array23 = [1, 2, 3, 4, 5];
console.log(array23.length); // 5 => can be used on both arrays & strings

/**
 * 24. deleteOperator
 *  - deletes array elements & leaves undefined holes in array
 *  - use pop() or shit() instead
 *  - does overwrites original ? ✅
 */
// delete object[index]; //syntax
let array24 = [1, 2, 3, 4, 5];
console.log(delete array24[2]); // true
console.log(array24); // [1, 2, , 4, 5] => it can be used on both arrays and strings
