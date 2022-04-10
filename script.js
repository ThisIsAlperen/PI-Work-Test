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
    let previous;
    const button = document.getElementById('button')
    const loadEventListeners = function () {
        button.addEventListener('click', showPath)
    }

    // finds all the paths in the pyramid
    const getPath = function () {
        let x = product.length;
        for (j = 0; j < 4; j++) {
            previous = 0;
            let next = 0;
            i = 0;
            path = [];
            for (i = 0; i < x; i++) {
                if (i == 0) {
                    path.push(product[0][0])
                }
                else if (i < x - 1) {
                    console.log(i,previous)
                    console.log(product)
                    console.log(product[i-1][previous])
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
                        
                    }
                    console.log(next)
                }
                if (i == x - 1) {
                    console.log(next)
                    check(i, next)
                    console.log(path)
                    allPaths.push(path);
                    console.log(previous)
                    console.log(i)
                    console.log(product[i - 2][previous])
                    console.log(product[i - 1][next] =2)
                    p = i-2 
                    if(p>0){
                        console.log(p,'  p')
                    }
                    console.log(next)

                    console.log(allPaths)
                }

            }
        }

    }
    const check = function (i, previous) {
        console.log(previous)
        if (Prime(product[i][previous - 1])) {
            next = previous - 1;
            path.push(product[i][next])
            console.log(path)
            allPaths.push(path);
        }
        if (Prime(product[i][previous])) {
            next = previous
            path.push(product[i][next])
            console.log(path)
            allPaths.push(path);
        }
        console.log()
        console.log(product[i][previous + 1])
        console.log(Boolean(Prime(product[i][previous + 1])))
        if (Prime(product[i][previous + 1])) {
            next = previous + 1;
            path[3]=(product[i][next]);
            console.log(path)
            allPaths.push(path);
        }

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

    }
    const showPath = function (e) {
        e.preventDefault();

    }
    return {
        init: function () {
            getPath()
            loadEventListeners()
        }
    }
})(Product, UI)

APP.init()