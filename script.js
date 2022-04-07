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
    const getProduct = function(){
        product = Product.getInitialData()
        
        subProduct = [];
        product.forEach(element => {
            findPrimes(element)
            newProduct.push(subProduct)
            subProduct = [];
        });
        
    }
    const findPrimes = function(e){
        e.forEach(number =>{
            number = number*2;
            subProduct.push(number)
        });
    }

    return {
        init: function(){
            getProduct()
        }
    }
})(Product, UI)

APP.init()