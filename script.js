//select h3
// var _ = require('lodash');
// var array = [1,2,3,4,5,6];
// console.log('answer:', _.without(array,3));

var button1 = document.getElementById("profile1");
var button2 = document.getElementById("profile2");

var css = document.querySelector("h3");
var colorleft = document.querySelector(".colorleft");
var colorright = document.querySelector(".colorright");
var body = document.getElementById("gradient");


function changeGrad() {
    body.style.background = "linear-gradient(to right," + colorleft.value + ", " + colorright.value + ")";

    css.textContent = body.style.background + ";";
}

function changeGradSaved1() {
    console.log("click is working");
    colorleft.value = "#0011ff";
    colorright.value = "#ff0000";
    changeGrad();
}

function changeGradSaved2() {
    console.log("click is working");
    colorleft.value = "#002AFF";
    colorright.value = "#11FF00";
    changeGrad();
}



button1.addEventListener("click", changeGradSaved1);

button2.addEventListener("click", changeGradSaved2);


// colorleft.addEventListener("input", changeGrad);

// colorright.addEventListener("input", changeGrad);



