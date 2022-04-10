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
    let path = [];
    const allPaths = [];
    let previous;
    const button = document.getElementById('button')
    const loadEventListeners = function () {
        button.addEventListener('click', showPath)
    }

    // finds all the paths in the pyramid
    const getPath = function () {
        let x = product.length;
        for (j = 0; j < 3; j++) {
            previous = 0;
            i = 0;
            path = [];
            for (i = 0; i < x; i++) {

                if (i == 0) {
                   
                    path.push(product[0][0])
                }
                else if (i < x - 1) {
                    if (Prime(product[i][previous - 1])) {
                        previous = previous - 1;
                        path.push(product[i][previous])
                    } else if (Prime(product[i][previous])) {
                        path.push(product[i][previous])
                    } else if (Prime(product[i][previous + 1])) {
                        previous = previous + 1;
                        path.push(product[i][previous])
                    } else {
                        console.log(path[path.length - 1])
                    }
                }
                if (i == x-1) {
                    console.log(i)
                    console.log(previous)
                    console.log(product[i])
                    check(i,previous)
                    path.push(product[i][previous])
                    product[i][previous] = 2;
                    allPaths.push(path);
                    console.log(allPaths)
        
                    if (i == 1) {
                        i = i + 1;
                    }
                    
                }

            }
        }

    }
    const check = function (i,previous) {
        if (Prime(product[i][previous - 1])) {
            previous = previous - 1;    
        } else if (Prime(product[i][previous])) {    
        } else if (Prime(product[i][previous + 1])) {
            previous = previous + 1;   
        }else{
            
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