// Product
// get the product as a random numbers

url = '';

const Product = (function () {

    const data = [
        [1],
        [8, 4],
        [2, 6, 9],
        [8, 5, 9, 3]
    ]
    return {
        getInitialData: function () {
            return data;
        },
    }
})();


// UI
const UI = (function () {

})()


// APP
// get the data from product

const APP = (function (Product, UI) {
    const product = Product.getInitialData()
    var path = [];
    let allPaths = [];
    let previous = 0;
    const button = document.getElementById('button')
    const loadEventListeners = function () {
        button.addEventListener('click', showPath)
    }

    // finds all the paths in the pyramid

    const Path2 = function () {
        length = product.length
        getTotal()
        for (j = 0; j < total; j++) {
            i = 0;
            previous = 0;
            path = []

            for (i = 0; i < length; i++) {
                if (i == 0) {

                    path.push(0)
                }
                else {

                    if (previous == 0) {
                        next = [0, 1]
                    } else {
                        next = [-1, 0, 1]
                    }
                    random = Math.floor(Math.random() * next.length)
                    previous = previous + next[random]
                    path.push(previous)

                }
                if (i == length - 1) {

                    var newPath = [];
                    path.forEach(e => {
                        newPath.push(e)
                    });
                    console.log(path)
                    console.log(Boolean(check(newPath)))
                    if (check(newPath) != true) {
                        console.log('false')
                        allPaths.push(newPath)
                        console.log(allPaths)
                    }

                    if (allPaths.length == 0) {
                        allPaths.push(newPath)
                    }


                }
            }
        }
        console.log(allPaths)
    }
    const getPath = function () {
        let x = product.length;
        for (j = 0; j < 4; j++) {
            previous = 0;
            let next = 0;
            i = 0;

            var path = [];
            for (p = 0; p < x; p++) {

                if (i == 0) {
                    path.push(product[0][0])
                }
                else if (i < x - 1) {
                    console.log(i, previous)
                    console.log(product)
                    console.log(product[i][previous])
                    if (Prime(product[i][previous - 1])) {
                        next = previous - 1;
                        path.push(product[i][next])
                    } else if (Prime(product[i][previous])) {
                        next = previous
                        path.push(product[i][next])
                    } else if (Prime(product[i][previous + 1])) {
                        next = previous + 1;
                        path.push(product[i][next])
                    } else {
                        console.log('else')
                        console.log(product[i - 1][previous])
                        product[i - 1][previous] = 2;
                        i = i - 2;
                        console.log(i)
                    }
                    console.log(next)
                }
                if (i == x - 1) {
                    console.log(next)

                    if (Prime(product[i][next - 1])) {
                        path.push(product[i][next - 1])
                        var newPath = [];
                        path.forEach(e => {
                            newPath.push(e)
                        })
                        allPaths.push(newPath)
                        path.pop()
                    } if (Prime(product[i][next])) {
                        path.push(product[i][next])
                        var newPath = [];
                        path.forEach(e => {
                            newPath.push(e)
                        })
                        allPaths.push(newPath)
                        path.pop()
                    } if (Prime(product[i][next + 1])) {
                        path.push(product[i][next + 1])
                        var newPath = [];
                        path.forEach(e => {
                            newPath.push(e)
                        })
                        allPaths.push(newPath)
                        path.pop()
                    }
                    console.log(path)
                    console.log(product[i - 1])
                    i = i - 1;

                    console.log(product[i][next] = 2)

                    console.log(next)

                    console.log(allPaths)

                }
                i = i + 1;
            }
        }

    }
    const check = function (newPath) {
        var checkArrays = [];
        allPaths.forEach(p => {
            console.log(p)
            checkArrays = []
            p.forEach(e => {
                checkArrays.push(e)
            })
            console.log(newPath)
            console.log(checkArrays)
            if (checkArrays.join() == newPath.join()) {
                console.log('true')
                return true;
            }
        })
    }
    const Prime = function (number) {

        sqrt = Math.floor(Math.sqrt(number));

        for (k = 2; k < sqrt + 1; k++) {
            if (number % k == 0) {
                return true;
            }
        }
        if (number == 1) {
            return true;
        }
    }

    const getTotal = function (e) {
        console.log(product.length)
        if (product.length - 2 > 4) {

        } else {
            total = 13;
        }
        return total;
    }
    const showPath = function (e) {
        e.preventDefault();

    }
    return {
        init: function () {
            //getPath()
            Path2()
            loadEventListeners()
        }
    }
})(Product, UI)

APP.init()