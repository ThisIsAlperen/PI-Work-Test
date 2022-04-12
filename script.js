const Product = (function() {
    const data1 = [
      [1],
      [8, 4],
      [2, 6, 9],
      [8, 5, 9, 3],
      [4, 6, 9, 2, 7],
      [9, 7, 5, 8, 4, 6]
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
      [330, 131, 333, 928, 377, 733, 17, 778, 839, 168, 197, 197],
      [131, 171, 522, 137, 217, 224, 291, 413, 528, 520, 227, 229, 928],
      [223, 626, 34, 683, 839, 53, 627, 310, 713, 999, 629, 817, 410, 121],
      [924, 622, 911, 233, 325, 139, 721, 218, 253, 223, 107, 233, 230, 124, 233]
    ]
      
    // the calculation for data two has been made without UI & in local server, if you change data1 to data2 (line31) and run in local server, it will calculate. It might be slow in here
    return {
      getInitialData: function() {
          console.log(data2)
        return data1;
      },
    }
  })();
  
  
  // UI
  const UI = (function() {
    main = document.getElementById('main')
    realPaths = document.getElementById('realPaths')
    sum = document.getElementById('sum')
    return {
      createPyramid: function(product) {
        length = product.length
        for (i = 0; i < length; i++) {
          row = document.createElement('div');
          row.classList.add('row')
          for (k = 0; k <= i; k++) {
            col = document.createElement('div')
            col.classList.add('colum')
            col.innerText = product[i][k]
            row.appendChild(col)
          }
          main.appendChild(row)
  
        }
      },
      createPath: function(paths) {
        length = paths[0].length
        paths.forEach(function(path,index) {
          row = document.createElement('div')
          row.classList.add('row')
          row.innerHTML = `<span>${index}</span>`
          path.forEach(e => {
            col = document.createElement('div')
            col.classList.add('colum')
            col.innerText = e
            row.appendChild(col)
          })
          realPaths.appendChild(row)
        })
      },
      showTotal: function(path, largest) {
        row = document.createElement('div')
        row.classList.add('row')
        let html = ''
        path.forEach(function(e, index) {
          html += `${e}`
          if (index < path.length - 1) {
            html += ' + '
          } else {
            html += ` = ${largest}`
          }
        })
  
        row.innerHTML = html;
        sum.appendChild(row)
      }
    }
  })()
  
  
  // APP
  
  const APP = (function(Product, UI) {
    const product = Product.getInitialData()
    const length = product.length
    const firstPath = [] // first [0,0,0,...] path
    let allPaths = []; // all path options as index numbers
    let totalPaths = []; // all path options as real values of numbers
    let realPaths = []; // paths without prime numbers
    let Sums = []; // summations of the real paths
    let total = 0;
    let largest = 0; // largest number in summation 
    let largestPath = 0; // largest path in real path array
    let notPrime = true;
  
    // total path number 
    const getTotal = function() {
      total = Math.pow(2, product.length - 1)
      return total;
    }
  
    //first path as [0,0,0....] 
    const firstArray = function() {
      for (i = 0; i < length; i++) {
        firstPath.push(0)
      }
    }
    // all the paths 
    const Path2 = function() {
      for (j = 0; j < total; j++) {
        var newPath = []
        //clone first path to new path
        firstPath.forEach(e => {
          newPath.push(e)
        });
        allPaths.push(newPath)
        // change the values of the first path to obtain the next path
        for (i = length - 1; i >= 0; i--) {
          var x;
          if (firstPath[i] == firstPath[i - 1]) { //
            x = firstPath[i] + 1
            firstPath[i] = firstPath[i] + 1
            for (k = i; k < length; k++) {
              firstPath[k] = x;
            }
            break;
          }
        }
      }
      console.log(allPaths)
    }
    // obtain the real values of the paths by using allPaths as index numbers
    const getPath = function() {
      allPaths.forEach(path => {
        var newPath = [];
        path.forEach(function(e, index) {
          newPath.push(product[index][e])
        })
        totalPaths.push(newPath)
      })
    }
    // finds the paths without any prime number
    const findRealPaths = function() {
      totalPaths.forEach(path => {
        path.forEach(e => {
          // checks every number in a path seperately, if there is a prime number, adds 'prime' so the length of the array increased
          notPrime = true;
          Prime(e)
          if (notPrime) {
            path.push('prime')
          }
        })
        // if the array length did not increase, adds the path to the real path array
        if (path.length < product.length + 1) {
          realPaths.push(path)
        }
      })
    }
    // total values of every path in real path array
    const allSums = function() {
      realPaths.forEach(path => {
        var pathSum = 0
        path.forEach(e => {
          pathSum = pathSum + e;
        })
        Sums.push(pathSum)
      })
    }
    // finds the largest value in sum array
    const largestSum = function() {
      i = 0;
      Sums.forEach(function(e, index) {
        if (e >= largest) {
          largest = e;
          i = index
        }
      })
      largestPath = realPaths[i]
    }
    // checks if the number is prime
    const Prime = function(number) {
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
    const ui = function() {
      UI.createPyramid(product)
      UI.createPath(realPaths)
      UI.showTotal(largestPath, largest)
  
    }
    return {
      init: function() {
        firstArray()
        getTotal()
        Path2()
        getPath()
        findRealPaths()
        allSums()
        largestSum()
        ui()
        console.log('All possible paths as index')
        console.log(allPaths)
        console.log('All possible paths as real values')
        console.log(totalPaths)
        console.log('All paths without prime numbers')
        console.log(realPaths)
        console.log('Summation of the real Paths')
        console.log(Sums)
        console.log('Largest summation value')
        console.log(largest)
      },
      getLargestPath: function() {
        return largest;
      },
      getLargestValue: function() {
        return largestPath;
      }
    }
  })(Product, UI)
  
  APP.init()
  