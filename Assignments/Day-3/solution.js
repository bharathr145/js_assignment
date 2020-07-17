

// Q1 solution
let inputval = prompt("Hey please enter number below");

let checkEven = function(a){
    if(a%2){
        return 0;
    }
    else return 1;
}
let result  = checkEven(inputval);
result = (result) ? "Even" : "Odd";

console.log(`The number entered is ${inputval}  and the number is ${result}` );







// Q2 solution

inputval = prompt("Hey please enter os name and the version of it below with space seperated");

result = inputval.split(" ");
console.log(`The OS name is ${result[0]} and version is ${result[1]}`);







// Q3 solution

// Using Conditions 
let marks = prompt("Hey please marks of student below");

if(marks>=90)
    console.log(`Marks are ${marks} and the grade is A`);
else if(marks>=50 && marks<90){
    console.log(`Marks are ${marks} and the grade is B`);
}
else {
    console.log(`Marks are ${marks} and the grade is C`);
}


// Using Ternary condition
let grade = (marks>=90)? "A" : ((marks>=50)? "B" : "C");
console.log(`Marks are ${marks} and the grade is ${grade}`);

// Using Switch
