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
