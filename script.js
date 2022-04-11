// Product
// get the product as a random numbers

url = '';

const Product = (function () {

    const data1 = [
        [1],
        [8, 4],
        [2, 6, 9],
        [8, 5, 9, 3],
        [4, 7, 8, 1, 6],
        [4, 2, 2, 2, 2, 2],
        [4, 2, 2, 2, 2, 2, 2]
    ]
    const data2 = [
        [215],
        [193, 124],
        [117, 237, 442],
        [218, 935, 347, 235],
        [320, 804, 522, 417, 345],
        [229, 601, 723, 835, 133, 124],
        [248, 202, 277, 433, 207, 263, 257],
        [359, 464, 504, 528, 516, 716, 871, 182],
        [461, 441, 426, 656, 863, 560, 380, 171, 923],
        [381, 348, 573, 533, 447, 632, 387, 176, 975, 449],
        [223, 711, 445, 645, 245, 543, 931, 532, 937, 541, 444],
        [330, 131, 333, 928, 377, 733, 017, 778, 839, 168, 197, 197],
        [131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928],
        [223, 626, 034, 683, 839, 053, 627, 310, 713, 999, 629, 817, 410, 121],
        [924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233]
    ]
    return {
        getInitialData: function () {
            return data1;
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

        //while (allPaths.length <= total - 1) {
        for(j=0;j<5000;j++){
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

                }
            }
        }
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
        totalPaths.forEach(function (path, index) {
            path.forEach(e => {
                notPrime = true;
                Prime(e)
                if (notPrime) {
                    path.push('prime')
                }
            })
            if (path.length < product.length + 1) {
                console.log(index)
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
            for (i = 1; i <= x; i++) {
                var num = 1;
                if (i < 2) {
                    num = i;
                }
                if (i >= 2) {
                    num = i * (i - 1)
                }
                total = total + num * (2 + 3 + (i * 3))
                console.log(num * (2 + 3 + (i * 3)))
                console.log(total)
            }
        }
        console.log(total)
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
    const factorialize = function (num) { 
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
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
            console.log(allPaths)
            console.log(totalPaths)
            console.log(realPaths)
        }
    }
})(Product, UI)

APP.init()