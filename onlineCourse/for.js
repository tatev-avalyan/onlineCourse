let browsers = ['Chrome', 'FireFox', 'Edge', 'Opera','Safari']

for (let i in browsers) {
    console.log(browsers[i])
}
console.log(browsers)

for(let i of browsers){
    console.log(i)
}


let numbers=[2,4,6,8,9,0,5,43,2,5,7]
for(let i of numbers){
    console.log(i%2===0)
}