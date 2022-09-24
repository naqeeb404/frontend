//Task 1:
//SUM of two numbers
//method 1
console.log("TASK 1");
let num1 = 10;
let num2 = 10;

console.log(num1+num2);

//TASK 2:
console.log("TASK 2");
for (var i=1; i<=10;i++){

    console.log(i);

}

//TASK 3:
//Print the odd numbers less than 100
console.log("TASK 3");
for(var i=0; i<=100; i++){

    if(i%2 !== 0){

        console.log(i);

    }

}

//TASK 4
//Print the multiplication table with 7
console.log("TASK 4");

for(var i=1;i<=10;i++){

    console.log("7 * " + i + "=" + 7*i);

}

//TASK 6
//Print  sum 1 -10 numbers
console.log("TASK 6")
var sum10 = 0;
for(let i=1; i<=10; i++){
    sum10 = sum10 + i;
}
console.log(sum10);

//TASK 7
//convert celcius to farenhite
//console.log("TASK 7")

let celcius = 45;
let f = celcius * 1.8 + 32 ;

console.log(f)


//TASK 8
//convert farenhite to celcius
//console.log("TASK 8")

let farenhite = 45;
let c = ( farenhite - 32 ) / 1.8 ;

console.log(c)

//TASK 9
//calculate area of circle
//console.log("TASK 9")

let r = 12;
console.log(3.14 * r * r);


//TASK 10
//average of 2 numbers
//console.log("TASK 10")
console.log("TASK 10")

let a= 5;
let b= 6;
let avg = ( a + b )/ 2 ;

console.log("average = " + avg);

//TASK 11
//reverse string
//console.log("TASK 11")
console.log("TASK 11")

let str = "i am naqeeb";
//STEP 1
// split string into array
var splitString = str.split("");

//STEP 2
//use reverse method to reverse array
var reverseArray = splitString.reverse();

//STEP 3
//join splited and reversed array
var joinArray = reverseArray.join("");
console.log("Original String : "+str);
console.log("Reversed String : "+joinArray);



