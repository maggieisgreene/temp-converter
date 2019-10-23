console.error('bite me');

const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
}

const convertButton = document.getElementById('convertButton');
const resetButton = document.getElementById('resetButton');
let convertedTemp = document.getElementById('convertedTempHolder');

const toFahrenheit =  () => {
  console.error('it works')
  let inputVal = document.getElementById('temperature').value;
  let toFahr = (inputVal * 9/5) + 32;
  let domString = `<p>${toFahr}° Fahrenheit</p>`;
  printToDom('convertedTempHolder', domString);
  if (toFahr < 90 && toFahr > 32) {
    convertedTemp.classList.add('green');
  } else if (toFahr >= 90) {
    convertedTemp.classList.add('red');
  } else if (toFahr <= 32) {
    convertedTemp.classList.add('blue');
  }
}

const toCelsius =  () => {
  let inputVal = document.getElementById('temperature').value;
  let toCels = (inputVal - 32) * 5/9;
  let domString = `<p>${toCels}° Celcius</p>`;
  printToDom('convertedTempHolder', domString);
}

const determineConverter = () => {
  if (fahrenheitRadio.checked === true) {
    console.log('hey')
    toFahrenheit();
  } else if (celciusRadio.checked === true) {
    toCelsius();
  }
}

const init = () => {
  convertButton.addEventListener('click', determineConverter);
  resetButton.addEventListener('cleck', clearField);
}

init();
