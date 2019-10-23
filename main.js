const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
}

const convertButton = document.getElementById('convertButton');
const resetButton = document.getElementById('resetButton');
let convertedTemp = document.getElementById('convertedTempHolder');

const toFahrenheit =  () => {
  let inputVal = document.getElementById('temperature').value;
  let toFahr = ((inputVal * 9/5) + 32).toFixed(1);
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
  let toCels = ((inputVal - 32) * 5/9).toFixed(1);
  let domString = `<p>${toCels}° Celcius</p>`;
  printToDom('convertedTempHolder', domString);
  if (toCels < 32 && toCels > 0) {
    convertedTemp.classList.add('green');
  } else if (toCels >= 32) {
    convertedTemp.classList.add('red');
  } else if (toCels <= 0) {
    convertedTemp.classList.add('blue');
  }
}

const determineConverter = () => {
  if (fahrenheitRadio.checked === true) {
    toFahrenheit();
  } else if (celciusRadio.checked === true) {
    toCelsius();
  }
}

const hitEnter = () => {
  const tempInput = document.getElementById('temperature');
  tempInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      determineConverter();
    }
  })
}

const clearField = () => {
  const reset = document.getElementById('temperature').value = '';
  document.getElementById('fahrenheitRadio').checked = false;
  document.getElementById('celciusRadio').checked = false;
  printToDom('convertedTempHolder', reset)
}

const init = () => {
  hitEnter();
  convertButton.addEventListener('click', determineConverter);
  resetButton.addEventListener('click', clearField);
}

init();
