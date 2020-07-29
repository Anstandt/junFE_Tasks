
function randomInteger(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
  }

// Cycles
//1
function factorial (a){
    let result = 1;
    let i = 1;
while (a >= i) {
    result = result * i;
    i++;
}
return result;
}

let first = randomInteger(1, 15)
let factResult = factorial(first);

console.log(factResult);

//2

let third = randomInteger(10000, 100000000);

function sum(a) {
    let str = String(a);
    let arr = str.split('').map(function(item){
        return Number(item);
    });

    let sum = arr.reduce((sum, current) => sum + current, 0);
    return sum; 
}
//3
function product(a) {
    let str = String(a);
    let arr = str.split('').map(function(item){
        return Number(item);
    });

    let product = arr.reduce((product, current) => product*current);
    return product; 
}

let b = sum(third);
let c = product(third);

console.log(b);
console.log(c);

function createArray(a){
    let rnd = [];
    for ( var i = 0; i < a; i++ ) {
        rnd.push(randomInteger(-100, 100));
        }
    return rnd;
    
}

//4
//5 Нашла решение в интернете. сама бы точно такого не придумала! Поэтому добавлять в дз показалось нечестным.

// Arrays
// 1
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

let sub = createArray(25);

console.log(sub);

let max = getMaxOfArray(sub);
let index = sub.indexOf(getMaxOfArray(sub));

console.log(max); // наибольшее в массиве
console.log(index); // индекс наибольшего в массиве

//2

console.log(sub.reverse());

//3 

function halfReverse (sub){ 
    
    let modulo = sub.length % 2;

    if (modulo == 0) {
        let division = sub.length / 2;
        let half = sub.splice(0,division);
        let newArr = [];
        newArr = newArr.concat(sub, half);
        return newArr;
    } else {
        let division = (sub.length / 2) - 0.5;
        let half = sub.splice(0,division);
        let secondHalf = sub.splice(1,division);
        let newArr = [];
        newArr = newArr.concat(secondHalf,sub, half);
        return newArr;
    }
}

let newArr = halfReverse(sub);
console.log(newArr);

// 4

let arrFour = createArray(30);

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

let some = average(arrFour);

let minorSome = arrFour.filter(item => item < some);

console.log(some);
console.log(minorSome);


// 5 

function sumWithoutMaxMin (arr) {
    let maxMinArr = [getMaxOfArray(arr),getMinOfArray(arr)];
    let arrForSum = arr.filter(item => !maxMinArr.includes(item));
    let arrSum = arrForSum.reduce((arrSum, current) => arrSum + current);
    return arrSum;
}

let superSum = sumWithoutMaxMin(arrFour);


console.log(arrFour);
console.log(superSum);
