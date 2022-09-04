var initialPrice = document.querySelector("#input-price");
var quantityOfStock = document.querySelector("#quantity-of-stock");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#outputEl");


button.addEventListener("click", clickHandler);

function clickHandler(){

    var inp = Number(initialPrice.value);
    var quan = Number(quantityOfStock.value);
    var curr = Number(currentPrice.value);

    calculate(inp, quan, curr);
}

function calculate(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`The loss is ${loss} and percentage is ${lossPercentage}%`)
    }
    else if(current > initial ){
        var gain = (current - initial) * quantity;
        var gainPercentage = (gain / initial) * 100;

        showOutput(`The profit is ${gain} and percentage is ${gainPercentage}`);
    }
    else{
        console.log(`no pain, no gain and no gain, no pain`)
    }
}



function showOutput(message){
    outputBox.innerHTML = message;
}