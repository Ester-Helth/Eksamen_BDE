import './style.css'

console.log("TS code works")

//Interfaces
interface InputNumbers{ //The numbers in the input fields should be read as numbers and not as stings
  numMiles: number;
  numKm: number;
  numCalc: number;
}

interface Converter { // The output should be a number and not a string
  calcToKm(numbers: InputNumbers): number; 
  calcToMiles(numbers: InputNumbers): number;
}

let numCalc = 1.609; //The number that is used to calculate the numbers in the input fields

//Functions
export const calculator: Converter = {
  calcToKm(numbers: InputNumbers): number {
    return numbers.numMiles * numCalc;
  },
  calcToMiles(numbers: InputNumbers): number { 
    return numbers.numKm / numCalc;
  },
}

//Variables
const milesInput = document.getElementById('milesInput') as HTMLInputElement; 
const kmInput = document.getElementById('kmInput') as HTMLInputElement;

const toKmButton = document.getElementById('toKmButton') as HTMLButtonElement;
const toMilesButton = document.getElementById('toMilesButton') as HTMLButtonElement;

const resultInKm = document.getElementById("resultInKm") as HTMLOutputElement
const resultInMiles = document.getElementById("resultInMiles") as HTMLOutputElement


//Buttons
toKmButton.addEventListener('click', () => { // When user clicks on the button, the function will run.
  const numMiles = Number(milesInput.value); // Value of input field is set to a variable
  const numKm = Number(kmInput.value);
  resultInKm.innerHTML = String(calculator.calcToKm({ numMiles, numKm, numCalc })); //The result 
});

toMilesButton.addEventListener('click', () => { // When user clicks on the button, the function will run.
  const numKm = Number(kmInput.value); // Value of input field is set to a variable
  const numMiles = Number(milesInput.value);
  resultInMiles.innerHTML = String(calculator.calcToMiles({ numMiles, numKm, numCalc })); //The result 
});





