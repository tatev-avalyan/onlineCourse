//Array Methods

console.log(Array.isArray([1, 2, 3, 4, 5, 6]))                                  // true
console.log(Array.isArray({ a: 1, b: 2 }))                                      // false

console.log(Array.of(3, 4, 5, 6, 7, 8))                                         //  creates an array of these arguments 

console.log(Array(5))                                                           // creates an empty array , length = 5

console.log(Array.from('foo'));                                                 //Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x * x))                                  //Array [1, 4, 9]

console.log(Int8Array.of('Tatev', 2, 3, 'Lilit', true, [1, 2, 3]))              //[0, 2, 3, 0, 1, 0]

console.log([1, 2, 3, 4, 5, 6].concat([1, 2, 3]))                               //[1, 2, 3, 4, 5, 6, 1, 2, 3]

const arr = [1, 2, 3, 4, 67]
let eArr = arr.entries()
console.log(eArr.next().value)                                                  //[0, 1]
console.log(eArr.next().value)                                                  //[1, 2]
console.log(eArr.next().value)                                                  //[2, 3]
console.log(eArr.next().value)                                                  //[3, 4]
console.log(eArr.next().value)                                                  //[4, 67]
console.log(eArr.next().value)                                                  // undefined


const func = x => x < 10
console.log([1, 2, 3, 4, 5].every(func))                                        //true
console.log([1, 2, 3, 4, 18].every(func))                                       //false
console.log([1, 2, 3, 4, 5, 6, 7, 8, 5, 3, 2, 2].every((a, b) => a < b))        // false

console.log(arr.fill(0, 2, 5))                                                  // [1, 2, 0, 0, 0]
console.log(arr.fill(arr, 3, 4))                                                // [1, 2, 0, Array(5), 0] or [1, 2, 0, [1, 2, 3, 4, 67], 0] 

arr1 = [0, 1, 2, 3, 67, 4, 67]

console.log(arr1.filter(x => x > 3))                                             //[4, 67]

console.log(arr1.find(a => a < 2))                                               // returns first element <=> function

console.log(arr1.findIndex(a => a < 2))                                          //0

let getMax = (() => Math.max.apply(null, arr1))()                                //67
console.log(arr1.filter(x => x === getMax).length)

const Arr = [1, [2, 3, 4, [4, 6]]]
console.log(Arr.flat())                                                          // [1, 2, 3, 4, [4, 6]]
console.log(Arr.flat(2))                                                         // [1, 2, 3, 4, 4, 6]

const Arr1 = [1, 2, , 3, 2]
console.log(Arr1.flat())                                                         // [1, 2, 3, 2]

console.log(arr1.map(x => [x * 3]))                                              //[[0], [3], [6], [9], [201], [12], [201]]
console.log(arr1.flatMap(x => [x * 3]))                                          //[0, 3, 6, 9, 201, 12, 201]
console.log(arr1.flatMap(x => [[x * 3]]))                                        //[[0], [3], [6], [9], [201], [12], [201]]

let arr2 = ['Tatev', 'Avalyan', 'January']                                       //["T", "a", "t", "e", "v"], ["A", "v", "a", "l", "y", "a", "n"],  ["J", "a", "n", "u", "a", "r", "y"]
console.log(arr2.map(x => x.split('')))

const arr3 = ['a', 'b', 'c', 'd']
arr3.forEach(function (el) {                                                       // a b c d
  console.log(el)
})

console.log(arr3.includes('a'))                                                  // true
console.log(Arr.includes(1))                                                     // true
console.log(Arr.includes([4, 6]))                                                // false
console.log(Arr.includes(-1))                                                    // false

console.log(arr1.indexOf(3))                                                     // 3
console.log(arr1.indexOf(15))                                                    // -1

console.log(arr2.join(''))                                                       // TatevAvalyanJanuary
console.log(arr2.join(' '))                                                      // Tatev Avalyan January
console.log(arr2.join('*'))                                                      // Tatev*Avalyan*January

console.log([...arr1.keys()])                                                    // [0, 1, 2, 3, 4, 5, 6]
console.log(Object.keys(arr1))                                                   // ["0", "1", "2", "3", "4", "5", "6"] 

console.log(arr1.lastIndexOf(67))                                                // 6

const nums = [1, 4, 9, 16, 25]
console.log(nums.map(Math.sqrt))                                                 // [1, 2, 3, 4, 5]
console.log(nums.map(Math.abs))                                                  // [1, 4, 9, 16, 25]
console.log(nums.map(x => x * 5))                                                // [5, 20, 45, 80, 125]

console.log(nums.pop())                                                          // 25
console.log(nums)                                                                // [1, 4, 9, 16]
console.log(nums.pop())                                                          // 16      

nums.push(5)
console.log(nums)                                                                // [1, 4, 9, 5]
nums.push(arr1)
console.log(nums)                                                                // [1, 4, 9, 5, [0, 1, 2, 3, 67, 4, 67]]

const numbers = [1, 2, 4, 5, 67, 8, 4, 2, 1]
console.log(numbers.reduce((num1, num2) => num1 + num2))                         // 94
console.log(numbers.reduce((p, q) => p / q))                                     // 0.000005830223880597015

let person = [
  { name: ['Tatev'], age: 15 },
  { name: ['Lilit'], age: 20 },
  { name: ['Maria'], age: 34 }
]
let names = person.reduce(function (a, b) {
  return [...a, ...b.name]
}, [])

console.log(names)                                                               // ["Tatev", "Lilit", "Maria"]

let person1 = [
  { name: 'Tatev', age: 15 },
  { name: 'Lilit', age: 20 },
  { name: 'Maria', age: 34 }
]
let names1 = person1.reduce(function (a, b) {
  return [...a, ...b.name]
}, [])

console.log(names1)                                                               // ["T", "a", "t", "e", "v", "L", "i", "l", "i", "t", "M", "a", "r", "i", "a"]

let person2 = [
  { name: 'Tatev', age: 15 },
  { name: 'Lilit', age: 20 }
]
let names2 = person2.reduce(function (a, b) {
  return a.name + b.name
})

console.log(names2)                                                               // TatevLilit

const number = [1, 2, 4, 5, 67, 8, 4, 2, 1]
console.log(number.reduceRight((num1, num2) => num1 - num2))                      // -92
console.log(number.reduceRight((p, q) => p / q))                                  // 0.000005830223880597015
const op = [[1, 3], [2, 4], [5, 6]]
console.log(op.reduceRight((a, b) => a.concat(b)))                                // [5, 6, 2, 4, 1, 3]

const myArr = [1, 3, 6, 7, 5]
console.log(myArr.reverse())                                                      // [5, 7, 6, 3, 1]

myArr.shift(5)
console.log(myArr)                                                                // [7, 6, 3, 1]

myArr.unshift(3)
console.log(myArr)                                                                // [3, 7, 6, 3, 1]   

console.log(myArr.slice(0, 2))                                                    // [3, 7]
console.log(myArr)                                                                // [3, 7, 6, 3, 1]
console.log(myArr.slice(3))                                                       // [3, 1]


const some = myArr.some(x => x % 2 === 0)
console.log(some)                                                                 // true
const some1 = myArr.some(x => x % 4 === 0)
console.log(some1)                                                                // false

console.log(myArr.sort((a, b) => a - b))                                          // [1, 3, 3, 6, 7]
console.log(myArr.sort((a, b) => b - a))                                          // [7, 6, 3, 3, 1]
console.log(arr2.sort())                                                          // ["Avalyan", "January", "Tatev"]


let person3 = [
  { name: 'Tatev', age: 15 },
  { name: 'Lia', age: 20 },
  { name: 'Mariam', age: 34 },
  { name: 'Margarita', age: 18 }
]

let sortedMaxToMin = person3.sort(function (a, b) {
  if (a.name.length > b.name.length) {
    return 1
  } else if (a.name.length < b.name.length) {
    return -1
  }
  return 0
})

console.log(sortedMaxToMin)                                                       // 0: {name: "Lia", age: 20} 1: {name: "Tatev", age: 15} 2: {name: "Mariam", age: 34} 3: {name: "Margarita", age: 18}

let myArray = ['apple', 'banana', 'orange', 'greyfruit']
let add = myArray.splice(3, 0, 'kiwi')
console.log(add)                                                                  // [] nothing was deleted
console.log(myArray)                                                              // ["apple", "banana", "orange", "kiwi", "greyfruit"]
let remove = myArray.splice(3, 2)
console.log(myArray)                                                              // ["apple", "banana", "orange"]

const personName = 'Ann',
  personLastName = 'Smith',
  personAge = 20;
let personBio = [personName, personLastName, personAge]
console.log(personBio.toLocaleString())                                           // Ann,Smith,20

let task = ['alpha', 'beta', 'gamma']
let source = task.toString()
console.log(source)                                                               // alpha,beta,gamma


let eArray = task.values()
for (let i of eArray) {
  console.log(i)                                                                  // alpha beta gamma
}

let eArray1 = task[Symbol.iterator]();
console.log(eArray1.next().value);                                                // alpha
console.log(eArray1.next().value);                                                // beta 
console.log(eArray1.next().value);                                                // gamma
console.log(eArray1.next().value);                                                // undefined