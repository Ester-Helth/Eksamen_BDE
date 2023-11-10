"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
console.log("TS code works");
var numCalc = 1.609; //The number that is used to calculate the numbers in the input fields
//Functions
exports.calculator = {
    calcToKm: function (numbers) {
        return numbers.numMiles * numCalc;
    },
    calcToMiles: function (numbers) {
        return numbers.numKm / numCalc;
    },
};
//Variables
var milesInput = document.getElementById('milesInput');
var kmInput = document.getElementById('kmInput');
var toKmButton = document.getElementById('toKmButton');
var toMilesButton = document.getElementById('toMilesButton');
var resultInKm = document.getElementById("resultInKm");
var resultInMiles = document.getElementById("resultInMiles");
//Buttons
toKmButton.addEventListener('click', function () {
    var numMiles = Number(milesInput.value); // Value of input field is set to a variable
    var numKm = Number(kmInput.value);
    resultInKm.innerHTML = String(exports.calculator.calcToKm({ numMiles: numMiles, numKm: numKm, numCalc: numCalc })); //The result 
});
toMilesButton.addEventListener('click', function () {
    var numKm = Number(kmInput.value); // Value of input field is set to a variable
    var numMiles = Number(milesInput.value);
    resultInMiles.innerHTML = String(exports.calculator.calcToMiles({ numMiles: numMiles, numKm: numKm, numCalc: numCalc })); //The result 
});
