(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//select h3
// var _ = require('lodash');
// var array = [1,2,3,4,5,6];
// console.log('answer:', _.without(array,3));

var button = document.getElementById("enter");

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



button.addEventListener("click", changeGradSaved1);

// colorleft.addEventListener("input", changeGrad);

// colorright.addEventListener("input", changeGrad);




},{}]},{},[1]);
