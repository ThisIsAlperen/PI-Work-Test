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
        console.log(newProduct)
        getTotal()
    }
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
    const getTotal = function(){
        const total = 0;
        for(i=0;i<newProduct.length;i++){
            initial = 0;

            previous = initial;
           
        }
    }
    return {
        init: function(){
            getProduct()
        }
    }
})(Product, UI)

APP.init()