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
    const path = [];
    const allPaths = [];
    let totalPath = 1;
    const button = document.getElementById('button')
    const loadEventListeners = function () {
        button.addEventListener('click', showPath)
    }

    // finds all the paths in the pyramid
    const getPath = function () {
        x = product.length
        for (i = 0; i < product.length; i++) {
            path.push(0)
        }
        for (j = 1; j <= x; j++) {
            for (i = 0; i < totalPath; i++) {
                console.log(totalPath / j)
            }

        }
    }
    const pathCount = function () {
        for (i = product.length; i > 0; i--) {
            totalPath = totalPath * i
        }
    }
    pathCount()
    const Prime = function (number) {
        sqrt = Math.floor(Math.sqrt(number));
        for (i = 2; i < sqrt + 1; i++) {
            if (number % i == 0) {
                return true;
            }
        }
        if (number == 1) {
            return true;
        }
        // path.forEach(function(number,index){
        //     if(Boolean(Prime(number)) == false){
        //         console.log(number,index)
        //     }
        // }) 
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