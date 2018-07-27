/*button press sends button text to the input field and to the application. Enter submits the math in the input field and returns the product*/

const numberArray = [];

$(".button").click(function(e){
    let userClick = this.innerHTML;
    $("#outcome-field").html(userClick);
    numberArray.push(userClick);
    console.log(numberArray);
});

function allClear(){
    $("#outcome-field").html("");
}

function clearArray(){

    for (let i = 0; i < numberArray.length; i = i){
        numberArray.pop();
    }

}

function enter(){
    const outcome = numberArray.join("");
    $("#outcome-field").html(outcome);
}

$(".AC-button").click(function(e){

    allClear();
    clearArray();

});

$(".Enter-button").click(function(e){

    outcome = enter();

});