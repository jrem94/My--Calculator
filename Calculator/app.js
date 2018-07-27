/*button press sends button text to the input field and to the application. Enter submits the math in the input field and returns the product*/

const numberArray = [];

$(".button").click(function(e){
    let userClick = this.innerHTML;
    $("#outcome-field").html(userClick);
    numberArray.push(userClick);
    console.log(numberArray);
});

function clearProduct(){
    $("#outcome-field").html("");
}

function clearArray(){

    for (let i = 0; i < numberArray.length; i = i){
        numberArray.pop();
    }
}

function getOutcome(){
    let product = numberArray.join("");
    product = product.toString();
    product = eval(product);
    $("#outcome-field").html(product);
}

function getFieldOutcome(){

    let fieldProduct = document.getElementById("input-field").value;
    fieldProduct = eval(fieldProduct);
    $("#outcome-field").html(fieldProduct);
    console.log(fieldProduct);

}

function clearField(){

    document.getElementById("input-field").value = "";

}

$(".AC-button").click(function(){

    clearProduct();
    clearField();
    clearArray();

});

$(".Enter-button").click(function(){

    getOutcome();
    getFieldOutcome();

});

$('input').on('keypress', function(e) {
    const code = e.keyCode || e.which;
    if(code==13){
        getOutcome();
        getFieldOutcome();

        clearField();
    }
});