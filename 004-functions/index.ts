//function with name
function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);

 //anonymous function
 let addNumbersAnonim = function (x: number, y: number): number {
    return x + y;
 }
 addNumbersAnonim(1, 2);

 let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));

//arrow function
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
 }
 
 // Arrow function
 let addNumbers2 = (x: number, y: number): number => x + y;

 let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}


//Exercices
function displayAlert(message: string) {
    alert('The message is ' + message);
}

function sumTypescript(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

//required params
function addNumbersRequiredParams (x: number, y: number): number {
    return x + y;
 }
 
 addNumbersRequiredParams(1, 2); // Returns 3
 //addNumbersRequiredParams(1);    // Returns an error
 
 //optional params
 function addNumbersOptionalParams (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbersOptionalParams(1, 2); // Returns 3
addNumbersOptionalParams(1);    // Returns 1

//default params
function addNumbersDefault (x: number, y = 25): number {
    return x + y;
 }
 
 addNumbersDefault(1, 2);  // Returns 3
 addNumbersDefault(1);     // Returns 26
 

//REST params
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
//addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

//deconstructed object params
interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 displayMessage({sender: 'Christopher', text: 'hello, world'});

 //other examples
 type calculator = (x: number, y: number) => number;
 let addNumbersOther: calculator = (x: number, y: number): number => x + y;
 let subtractNumbers: calculator = (x: number, y: number): number => x - y;
 
 console.log(addNumbers(1, 2));
 console.log(subtractNumbers(1, 2));

 let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbersOther;
    } else {
        return subtractNumbers;
    }
}

// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

//let addNumbersInterface: Calculator = (x: number, y: number): number => x + y;
//let addNumbersInterface: Calculator = (number1: number, number2: number): number => number1 + number2;
//let addNumbersInterface: Calculator = (num1, num2) => num1 + num2;