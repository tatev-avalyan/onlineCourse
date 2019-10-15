function sum(...values) {
    console.log(values.reduce(function (x, y) {
        return x*y
    }))
}

sum(3, 4, 5, 7, 4, 2, 4, 6)