//.............. codewars 1 .............

// Write a function which calculates the average of the numbers in a given list.


function calculateAverage() {
    let arr = [ 2, 3, 7, 5, 9]
    let sum = 0;
    for(let i = 0; i < arr.length; i++){

        sum = sum + arr[i]
   
    }
    return (sum / arr.length)
}

let result = calculateAverage()
console.log(result)

//.............. codewars 2 .............
//The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
//Note: Math.pow and some other Math functions like eval() and ** are disabled.

// function numberToPower() {
//     let num1 = 10;
//     let num2 = 3;
//     let sum = 1;

//     for( let i = 0; i < num2; i++){
      
//         sum *= num1

//     }

//      return (sum)

// }
// let result = numberToPower()
// console.log(result)

//....................... codewars 3 ..............

// function createArray(number){
//     let newArray = [];
    
//     for(let counter = 1; counter <= number; counter++ ){
//       newArray.push(counter);
//     }
    
//     return newArray;
//   }
//   let result = createArray()
//   console.log(result)


//.............. codewars 4 ...........
//Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// function goal (params) {

//     let goals = [5, 10, 2 ];
//     let total = 0;

//     goals.forEach( goal => total += goal)
//    return (total)
// }

// let result = goal()

// console.log(result)

// ............... codewars 5 .........

// function flower(params) {
//     let numberOfLeaves = [ 6,9];

//     if ( numberOfLeaves[0] % 2 == 0 && numberOfLeaves[1] % 2 == 0) {
//         console.log("true")
//     }else{
//         console.log("false")
//     }

// }
// flower()

//................ codewars 6 ...........

// function times(params) {
//     let h = 0;
//     let m = 1;
//     let s = 1;
//     let millisecond = 1000;
//     let result = s*millisecond + m*60*millisecond + h * 3600*1000

//     console.log(result)

// }
//  times()
//............. codewars 7 ...........
// In this kata you will create a function to check a non-negative input to see if it is a prime number.
// The function will take in a number and will return True if it is a prime number and False if it is not.
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.


//  function fn(params) {
//     let num = 1;
//     let sqrt = parseInt(Math.sqrt(num));
//     let count = 0
//     for(let i = 0; i <= sqrt; i++){
    
//         if ( num % i == 0) {
//             count++
//         }
//     }
//     if ( count <= 1) {
//         console.log("Tub son")
//     }
//     else{
//         console.log("Murakkab son")
//     }
// }
//  fn()

//................ codewars 8 ..........

// function getCalculate(params) {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     let count ;
//     let arr = []
//     let sum = 0;
//     let positive = numbers.filter(num => num >= 0);
//     let negative = numbers.filter( item => item < 0);
//     count = (positive.length)

//     negative.forEach(n =>{
//         sum += n
//     })
//     console.log(count,sum)
  

// }
// getCalculate()

// ............. codewars 9 ...........
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the ////students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.

// function totalScore() {
//     let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let sum = 0;
//     score.forEach(n => {
//         sum += n 
//     })
//     return Math.trunc( sum / score.length)
// }
//     let result = totalScore()
//     console.log(result)

// ............... codewars 10 ..........

// function abbreviateName(params) {
//     let str = ("sam harris ")
//     let arr = str.split(" ")
//     let newStr = ""
//     arr.forEach( item =>{
//         newStr +=   (`${item[0].toUpperCase()}.`)
//     })
//     return (newStr.slice(0, newStr.length-1))
// }
// let result = abbreviateName()
// console.log(result)

