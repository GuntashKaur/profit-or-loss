var initialtPrice = document.querySelector("#input-price");
var quantityOfStock = document.querySelector("#quantity-of-stock");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#outputEl");

function calculate(initial, quantity, current){
    if(initial > current){
        //Loss
    }
    else if(current > initial ){
        //gain
    }
    else{
        console.log(`no pain, no gain and no gain, no pain`)
    }
}

calculate(10, 10, 10)