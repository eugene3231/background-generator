//select h3
var css = document.querySelector("h3");
var colorleft = document.querySelector(".colorleft");
var colorright = document.querySelector(".colorright");
var body = document.getElementById("gradient");


function changeGrad() {
    body.style.background = "linear-gradient(to right," + colorleft.value + ", " + colorright.value + ")";

    css.textContent = body.style.background + ";";
}

// colorleft.addEventListener("input", changeGrad);

// colorright.addEventListener("input", changeGrad);



