//https://youtu.be/PkZNo7MFNFg

let number = 55 / 0
console.log(number)           //Infinity

let str = "I am 'Tatev' "
console.log(str)              //I am 'Tatev' 

let myStr = "Tatev" + "Avalyan"
console.log(myStr)            //TatevAvalyan
console.log(myStr[0])         //T

myStr[0] = "A"
console.log(myStr)            //TatevAvalyan

myStr = "Lilit Avalyan"
console.log(myStr)            //Lilit Avalyan

let firstName = "Tatev"
let lastLetterOfFirstName = firstName[firstName.length - 1]
console.log(lastLetterOfFirstName)                  //v

let obj = { a: 'Tatev', b: 'Margarita', c: 'Srbuhi', d: 'Nona', e: 'Lilit' }
for (var i in obj) {
  console.log(obj[i][obj[i].length - 1])           //v a i a t
}

let arr = ['Tatev', 'Margarita', 'Srbuhi', 'Nona', 'Lilit']
for (var i in arr) {
  console.log(arr[i][arr[i].length - 2])           //e t h n i
}

let name = function words(firstWord, secondWord, thirdWord, forthWord, fifthWord) {
  return { firstWord, secondWord, thirdWord, forthWord, fifthWord }
}
console.log(words('dog', 'cat', 'mouse', 'fox', 'lion'))      //{fifthWord: "lion", firstWord: "dog", forthWord: "fox", secondWord: "cat", thirdWord: "mouse"}
console.log(words.name)   //words
console.log(words.length)  //5
console.log(words)

function words(firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
  return {
    firstWord: 'dog',
    secondWord: 'lion',
    thirdWord: 'mouse',
    forthWord: 'cat',
    fifthWord: 'elephant',
    sixthWord: 'fox'
  }
}
console.log(words)

let myArr = ['Tatev', 20, 'Lilit', 22]
console.log(myArr.shift(myArr.shift()))      //20
console.log(myArr)                           //['Lilit',22]

function named() {
  console.log('Tsaghik')
}

function lastName() {
  console.log('Khazaryan')
}

function fullName() {
  named()
  lastName()
}

fullName()                 //Tsaghik Khazaryan


function myLocalScope() {
  var myVar = 5;
  console.log(myVar)
}
myLocalScope()           //5
//console.log(myVar)        //myVar is not defined


function nextInLine(arr, item) {

  arr.push(item)
  return item
}
var testArr = [1, 2, 3, 4, 5]

console.log('Before: ' + JSON.stringify(testArr))  //[1,2,3,4,5]
console.log(nextInLine(testArr, 6))                 //6
console.log('After: ' + JSON.stringify(testArr))    //[1,2,3,4,5,6]


function test(num) {
  if (num === 12) {
    return true          // if (num == 12) returns true and if (num === 12) returns false
  }
  return false
}
console.log(test('12'))



function check(val) {
  if (val !== 13) {


    console.log('havasar che')
  }

  console.log('havasar e')
}

check(13)


function caseInSwitch(val) {
  var answer = ''
  switch (val) {
    case 1: answer = 'Tatev'; break;
    case 2: answer = "lilit"; break;
    case 3: answer = 'Margarita'; break
    case 4: answer = 'Tsaghik'; break
    default: answer = 'no name'
  }
  return answer
}
console.log(caseInSwitch(3))             //Margarita
console.log(caseInSwitch(5))             //no name


let obj1 = {
  'name': "Tatev",
  'lastName': 'Avalyan',
  'email': 'tat.avalyan1999@gmail.com'
}

let ans = obj1['email']
console.log(ans)         //tat.avalyan1999@gmail.com

let about = 'name'
console.log(obj1[about]) //Tatev

obj1['name'] = 'Lilit'
console.log(obj1)       // {name: "Lilit", lastName: "Avalyan", email: "tat.avalyan1999@gmail.com"}

obj1['telephone'] = '*********'
console.log(obj1)            //{name: "Lilit", lastName: "Avalyan", email: "tat.avalyan1999@gmail.com", telephone: "*********"}


delete obj1['email']
console.log(obj1)               //{name: "Lilit", lastName: "Avalyan", telephone: "*********"}



function hasOwnPropertyInObject(val) {
  if (obj1.hasOwnProperty(val)) {
    return obj1[val]
  } else {
    return 'not found'
  }
}

console.log(hasOwnPropertyInObject('name'))     //Lilit

let person = [
  {
    'name': 'John',
    'age': 24,
    'food': [
      'egg',
      'bread',
      'cheese'
    ],
    'male': true
  },
  {
    'name': 'David',
    'age': 25,
    'food': [
      'burger',
      'bread',
      'cheese'
    ],
  }
]
console.log(person)    // 0: {name: "John", age: 24, food: Array(3), male: true}
// 1: {name: "David", age: 25, food: Array(3)}

console.log(person[1].food[2])     //cheese

function multiplyAll(arr) {
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  } return product
}

let product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]])

console.log(product)            //5040


function getRandomNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomNumbers(10, 20))



function convertIntegers(str) {

  return parseInt(str, 2)
}
console.log(convertIntegers('10011'))


function convertIntegers1(str) {

  return parseInt(str, 8)
}
console.log(convertIntegers1('346'))



const x = 230
console.log(x.toString(8))


const array = [-5.6, 5, 3.6, -8, 6, 8.65, -0.5, 8, 0]

const squareList = (arr) => {
  const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)

  return squareIntegers
}
const squaredIntegers = squareList(array)
console.log(squaredIntegers)                                 //[25, 36, 64]   ընտիր բան


const sum = (function () {

  return function (...args) {

    return args.reduce((a, b) => a + b, 5)
  }
})()
 console.log(sum(1,2,3))         // if 5 is in reduce returns 11 else if 5 isnt in reduce , returns 6





 //Date()