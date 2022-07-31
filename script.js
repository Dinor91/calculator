//define the output display
const EL_outputsContainer = document.getElementById("outputs-container");

//calculator function
function calculator() {
  const num1 = parseFloat(document.getElementById("first-num").value);
  const num2 = parseFloat(document.getElementById("sec-num").value);
  const selectors = document.getElementById("selector");
  if (selectors.value === "+") {
    EL_outputsContainer.innerHTML = num1 + num2;
  } else if (selectors.value === "-") {
    EL_outputsContainer.innerHTML = num1 - num2;
  } else if (selectors.value === "*") {
    EL_outputsContainer.innerHTML = num1 * num2;
  } else if (selectors.value === "/" && num2 === 0) {
    EL_outputsContainer.innerHTML = num1 / num2;
    alert("Impossible to divide by 0");
  } else {
    EL_outputsContainer.innerHTML = num1 ** num2;
  }
}

//active the function by click in HTML
calculator();
