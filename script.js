// Product
// get the product as a random numbers

url = '';

const Product = (function () {

    const data = [
        [1],
        [8, 4],
        [2, 6, 9],
        [8, 5, 9, 3],
        [4, 7, 8, 1, 6]
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
    let totalPaths = [];
    let realPaths = [];
    let Sums = [];
    let total = 0;
    let largest = 0;
    let previous = 0;
    let exist = false;
    let notPrime = true;
    const button = document.getElementById('button')
    const loadEventListeners = function () {
        button.addEventListener('click', showPath)
    }

    // finds all the paths in the pyramid

    const Path2 = function () {
        console.log(total)
        length = product.length
        
        for (j = 0; j < total * 4; j++) {
            console.log(allPaths.length)
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
                    exist = false
                    check(newPath)

                    if (allPaths.length == 0) {
                        allPaths.push(newPath)
                    } else {
                        if (exist != true) {
                            allPaths.push(newPath)
                        }
                    }
                    if (allPaths.length == total) {
                        j = total * 4;
                    }
                }
            }
        }
        console.log(allPaths)
    }
    const getPath = function () {

        allPaths.forEach(path => {
            var newPath = [];
            path.forEach(function (e, index) {
                newPath.push(product[index][e])
            })
            totalPaths.push(newPath)
        })
        console.log(totalPaths)
    }
    const findRealPaths = function () {
        totalPaths.forEach(path => {
            path.forEach(e => {
                notPrime = true;
                Prime(e)
                if (notPrime) {
                    path.push('prime')
                }
            })
            if (path.length < product.length+1) {
                realPaths.push(path)
            }
        })
    }
    const check = function (newPath) {
        var checkArrays = [];
        allPaths.forEach(p => {
            checkArrays = []
            p.forEach(e => {
                checkArrays.push(e)
            })

            if (checkArrays.join() == newPath.join()) {
                console.log(true)
                exist = true;
            }
            return exist;
        })
    }
    const Prime = function (number) {

        sqrt = Math.floor(Math.sqrt(number));

        for (k = 2; k < sqrt + 1; k++) {
            if (number % k == 0) {
                notPrime = false;
            }
        }
        if (number == 1) {
            notPrime = false;
        }
        return notPrime;
    }
    const getTotal = function () {
        total = 5;
        if (product.length > 3) {
            x = product.length - 3
            console.log(x)
            for (i = 1; i <= x; i++) {
                total = total + i * (2 + 3 + (i * 3))
                console.log(total)
            }
        }
        return total;
    }
    const allSums = function () {
        realPaths.forEach(function (path, index) {
            var pathSum = 0
            path.forEach(e => {
                pathSum = pathSum + e;
            })
            Sums.push(pathSum)
        })
    }
    const largestSum = function () {
        i = 0;
        console.log(Sums)
        Sums.forEach(function (e, index) {
            if (e >= largest) {
                largest = e;
                i = index
            }
        })
        console.log(largest)
        console.log(realPaths[i])
    }
    const showPath = function (e) {
        e.preventDefault();

    }
    return {
        init: function () {
            getTotal()
            Path2()
            getPath()
            findRealPaths()
            allSums()
            largestSum()
            loadEventListeners()
        }
    }
})(Product, UI)

APP.init()