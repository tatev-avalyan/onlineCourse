// function createCar(property, value){
//     var car=[]
//     car[property]=value
//   return car
// }
// console.log(createCar('vin',1))

let firsName = 'Tatev',
    lastName = 'Avalyan',
    email = 'tat.avalyan1999@gmail.com'


let person = {
    firsName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${firsName} ${lastName}`)
    }
}
window.person = person

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firsName + ' ' + this.lastName
    },
    set: function(value){
        this.firsName=value
    }
})
console.log(person.fullName)







// person.sayHello()


// function createCar(property, value) {
//     return {
//         [property]: value,
//         ['_' + property]: value,
//         [property.toUpperCase()]: value,
//         ['get' + property]() {
//             return this[property]
//         }
//     }
// }
// console.log(createCar('vin', 1))
