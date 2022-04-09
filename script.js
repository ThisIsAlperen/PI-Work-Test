// Product
// get the product as a random numbers

url = '';

const Product = (function(){

    const data = [
        [1],
        [8,4],
        [2,6,9],
        [8,5,9,3]
    ]
    return {
        getInitialData: function(){
            return data;
        },
    }
})();


// UI
const UI = (function(){
   
})()


// APP
// get the data from product

const APP = (function(Product ,UI){
    const newProduct = [];
    const product = Product.getInitialData()
    const path = [];
    const button = document.getElementById('button')
    const loadEventListeners = function(){
        button.addEventListener('click',getPath)
    }
    
    // get the number list from the Product and send to the findPrimes function
    const getProduct = function(){  
        subProduct = [];
        product.forEach(element => {
            findPrimes(element)
            newProduct.push(subProduct)
            subProduct = [];
        });
        console.log(newProduct)
        getTotal()
    }
    // get the numbers, returns the not primes
    const findPrimes = function(e){
        e.forEach(number =>{
            sqrt = Math.floor(Math.sqrt(number));
            for(i = 2; i<sqrt+1;i++){
                if(number % i == 0){
                    subProduct.push(number)
                }
            }
            if(number == 1){
                subProduct.push(number)
            }
        });
    }
    // finds a random way in the not prime pyramid
    const getPath = function(e){
        e.preventDefault();
        var previous = 0;
        for(i=0;i<product.length-1;i++){
           

            if(previous == 0){
                next = [0,1]
            }else{
                next = [-1,0,1]
            }
            
            for(j=0;j<next.length;j++){
                
                console.log(product[i+1][previous + next[j]])
            }

            
    

        }
    }
    const Prime = function(e){
        sqrt = Math.floor(Math.sqrt(number));
            for(i = 2; i<sqrt+1;i++){
                if(number % i == 0){
                    return true;
                }
            }
            if(number == 1){
                return true;
            }
    }
    const getTotal = function(e){

    }
    return {
        init: function(){
            getProduct()
            loadEventListeners()
        }
    }
})(Product, UI)

APP.init()