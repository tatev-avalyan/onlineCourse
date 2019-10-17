

//https://youtu.be/PkZNo7MFNFg

let number = 55 / 0
console.log(number)                  //Infinity

let str = "I am 'Tatev' "
console.log(str)                     //I am 'Tatev' 

let myStr = "Tatev" + "Avalyan"
console.log(myStr)                   //TatevAvalyan      


console.log(myStr)                   //TatevAvalyan

myStr = "Lilit Avalyan"
console.log(myStr)                   //Lilit Avalyan

let firstName = "Tatev"
let lastLetterOfFirstName = firstName[firstName.length - 1]
console.log(lastLetterOfFirstName)                  //v

let obj = { a: 'Tatev', b: 'Margarita', c: 'Srbuhi', d: 'Nona', e: 'Lilit' }
for (var i in obj) {
  console.log(obj[i][obj[i].length - 1])            //v a i a t
}

let arr = ['Tatev', 'Margarita', 'Srbuhi', 'Nona', 'Lilit']
for (var i in arr) {
  console.log(arr[i][arr[i].length - 2])            //e t h n i
}

let name = function words(firstWord, secondWord, thirdWord, forthWord, fifthWord) {
  return { firstWord, secondWord, thirdWord, forthWord, fifthWord }
}
console.log(words('dog', 'cat', 'mouse', 'fox', 'lion'))      //{fifthWord: "lion", firstWord: "dog", forthWord: "fox", secondWord: "cat", thirdWord: "mouse"}
console.log(words.name)                                       //words
console.log(words.length)                                     //5
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
console.log(myArr.shift(myArr.shift()))                        //20
console.log(myArr)                                             //['Lilit',22]

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

fullName()                                                     //Tsaghik Khazaryan


function myLocalScope() {
  var myVar = 5;
  console.log(myVar)
}
myLocalScope()                                                 //5
//console.log(myVar)                                           //myVar is not defined


function nextInLine(arr, item) {

  arr.push(item)
  return item
}
var testArr = [1, 2, 3, 4, 5]

console.log('Before: ' + JSON.stringify(testArr))               //[1,2,3,4,5]
console.log(nextInLine(testArr, 6))                             //6
console.log('After: ' + JSON.stringify(testArr))                //[1,2,3,4,5,6]


function test(num) {
  if (num === 12) {
    return true                                                 // if (num == 12) returns true and if (num === 12) returns false
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
console.log(caseInSwitch(3))                                     //Margarita
console.log(caseInSwitch(5))                                     //no name


let obj1 = {
  'name': "Tatev",
  'lastName': 'Avalyan',
  'email': 'tat.avalyan1999@gmail.com'
}

let ans = obj1['email']
console.log(ans)                                                 //tat.avalyan1999@gmail.com

let about = 'name'
console.log(obj1[about])                                         //Tatev

obj1['name'] = 'Lilit'
console.log(obj1)                                                // {name: "Lilit", lastName: "Avalyan", email: "tat.avalyan1999@gmail.com"}

obj1['telephone'] = '*********'
console.log(obj1)                                                //{name: "Lilit", lastName: "Avalyan", email: "tat.avalyan1999@gmail.com", telephone: "*********"}


delete obj1['email']
console.log(obj1)                                                //{name: "Lilit", lastName: "Avalyan", telephone: "*********"}



function hasOwnPropertyInObject(val) {
  if (obj1.hasOwnProperty(val)) {
    return obj1[val]
  } else {
    return 'not found'
  }
}

console.log(hasOwnPropertyInObject('name'))                       //Lilit

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
console.log(person)                                              // 0: {name: "John", age: 24, food: Array(3), male: true}
                                                                 // 1: {name: "David", age: 25, food: Array(3)}

console.log(person[1].food[2])                                   //cheese

function multiplyAll(arr) {
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  } return product
}

let product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]])

console.log(product)                                             //5040


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
console.log(sum(1, 2, 3))                                     // if 5 is in reduce returns 11 else if 5 isnt in reduce , returns 6


//-----------------------------------------


const time = Date()
console.log(time)

var seconds = Math.floor(Date.now() / 1000);
console.log(seconds)

const date = new Date(2020, 1, 10);

console.warn(date.getDate());
console.warn(date.getUTCDate())

//Date()


function tryCatch() {
  try {
    console.log("Код в блоке try");  //<-
  } catch (e) {
    console.log("Код в блоке catch");
  } finally {
    console.log("Код в блоке finally");  //<-
  }
}
tryCatch()



function tryCatch1() {
  try {
    console.warn(z);  // Ошибка
  } catch (e) {
    console.warn("Код в блоке catch");     //<-
  } finally {
    console.warn("Код в блоке finally");     //<-
  }
}
tryCatch1()


function tryCatch2() {
  try {
    let z = 6
    console.log("Код в блоке try" + " " + z);              //<- 6
  } catch (e) {
    console.log("Код в блоке catch");
  } finally {
    console.log("Код в блоке finally");      //<-
  }
}
tryCatch2()



const array1 = [1, 3, 4, 6, 4, 5, 6, 2, 6, 7, 84, 3, 6]
let array2
(function () {
  array2 = [...array1]
  array2.push(2, 3, 45, 6, 7)
  console.log(array2)
  array2.copyWithin(1, 5)
  console.log(array2)
})()



const object1 = { a: 1, b: 9, c: 19 }

const a = object1.a
const b = object1.b
const c = object1.c

const { a: x1, b: y1, c: z1 } = object1
console.log({ x1, y1, z1 })



const names = {
  girl: 'Jany',
  boy: 'John'
}
const names2 = {
  girl: 'Helene',
  boy: 'Harry'
}

function getNames(obj) {
  const { boy: nameOfBoy } = obj

  return nameOfBoy
}
console.log(getNames(names))
console.log(getNames(names2))



const ages = {
  girl: { min: 20, max: 50 },
  boy: { min: 15, max: 50 }
}
const ages2 = {
  girl: { min: 25, max: 55 },
  boy: { min: 20, max: 55 }
}

function getAges(obj) {
  const { girl: { max: ageOfGirl } } = obj

  return ageOfGirl
}
console.log(getAges(ages))
console.log(getAges(ages2))

const [num1, num2] = [1, 2, 3, 45, 6, 7, 8]
console.log(num1, num2)        //1,2


const source = [1, 2, 3, 45, 6, 7, 8]
function removeOneTwo(a) {
  const [, , , ...arr] = a

  return arr
}

const number1 = removeOneTwo(source)
console.log(number1)                      //[45, 6, 7, 8]
console.log(source)                       //[1, 2, 3, 45, 6, 7, 8]



const years = {
  year1: 1970,
  year2: 1980,
  year3: 1990,
  year4: 2000,
  year5: 2010
}

const mid = (function () {
  return function ({ year5, year1 }) {
    return (year5 - year1) / 2
  }
})()
console.log(mid(years))

const mid1 = function ({ year1, year2 }) {

  return year2 - year1
}

console.log(mid1(years))



const bio = {
  name: 'Tatev',
  lastname: 'Avalyan',
  age: 20
}
const bio1 = {
  name: 'Lilit',
  lastname: 'Avalyan',
  age: 22
}


const aboutMe = function (obj) {

  return `Hi, my name is ${obj.name} ${obj.lastname} , and I am ${obj.age} years old.`
}

console.log(aboutMe(bio))
console.log(aboutMe(bio1))


const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['id-blacklist', 'no-dup-keys']
}
function makeList(arr) {
  const resultDisplayArray = []
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return resultDisplayArray
}
const resultDisplayArray = makeList(result.failure)
console.log(resultDisplayArray)


const createBio = (name, age, gender) => ({ name, age, gender })
console.log(createBio('Karen', 12, 'male'))


function makeBook() {
  class Book {
    constructor(author) {
      this._author = author
    }

    get writer() {
     return this._author 
    }

    set writer(updateAuthor) {
      this._author = updateAuthor
    }
  }
  return Book
}
const Book = makeBook()
const book = new Book('Tatev')
console.log(book)
book.writer="Lilit"
console.log(book)



function trees() {
  class Tree {
    constructor(name) {
      this._name = name
    }
    // get _treeName() {            //imasty
    //   return this._name
    // }
    set _treeName(value) {
      this._name = value
    }
  }
  return Tree
}
 

const Tree = trees()
const tree = new Tree('Sochi')
console.log(tree)
tree._treeName = 'uri'
console.log(tree)

//import * as functionName from 'filename'      import everything
// import className from 'filename'            import default class
