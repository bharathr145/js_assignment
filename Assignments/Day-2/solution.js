

// Q1 solution
let inputval = prompt("Hey please enter input below");
console.log(inputval);





// Q2 solution remaining string methods

// substring
/* 
this method is similar to slicing. we give range of indexes to get substing of original string.
*/
let str = "this is a test string";
let ans = str.substring(5,14);
// output the string from 5th index inclusive to 14th index exclusive(upto second parameter value)
console.log(ans);

// splice
/*
splice() method changes the elements of the array by replacing or removing the elements in place
*/

let arr = ['A', 'B', 'C', 'D'];
let removed = arr.splice(1, arr.length-1);
// here modifies original array 
console.log('Original Array: ', arr)
console.log('Removed Elements: ', removed)

// replaceAll
// replace
/*
The replace() method replaces a specified value with another value in a string
*/
str = "this is a nice day";
// here replaces 1st argument string with second argument string  
console.log(str.replace("nice day", "bad day"));






// Q3 solution
console.log(confirm("Is your age above 21")? "Can Drink" : "Cannot Drink");
