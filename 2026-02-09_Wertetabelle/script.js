const startbutton = document.getElementById("startbutton");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const stepInput = document.getElementById("step");
const tableBody = document.getElementById("table-body");
const customFunctionInput = document.getElementById("newFunction");
const addButton = document.getElementById("addButton");
const headerRow = document.getElementById("first");
const cellCount = headerRow.cells.length;

console.log(cellCount);
function f(x) {
  return x * x;
}
function g(x) {
  return (x * x) / 4;
}
function h(x) {
  return x * x - 4;
}
function i(x) {
  return (x * x) / 4 - 4;
}
let myFunction;

addButton.addEventListener("click", () => {
  try {
    myFunction = new Function("x", `return ${customFunctionInput.value}`);
    myFunction(1);
  } catch (error) {
    alert("Ungültige Funktion: " + error.message);
    return;
  }
  headerRow.innerHTML = "";
  tableBody.innerHTML = "";
  myFunction = new Function("x", `return ${customFunctionInput.value}`);
  headerRow.innerHTML = `
    <td>X</td>
    <td>f(x)</td>
    <td>g(x)</td>
    <td>h(x)</td>
    <td>i(x)</td>
    <td>${customFunctionInput.value}</td>
    `;
});

startbutton.addEventListener("click", () => {
  tableBody.innerHTML = "";
  for (
    let x = parseFloat(startInput.value);
    x <= parseFloat(endInput.value);
    x += parseFloat(stepInput.value)
  ) {
    const row = document.createElement("tr");
    if (customFunctionInput.value !== "") {
      row.innerHTML = `
            <td>${x}</td>
            <td>${f(x)}</td>
            <td>${g(x)}</td>
            <td>${h(x)}</td>
            <td>${i(x)}</td>
            <td>${myFunction(x)}</td>
            `;
    } else {
      row.innerHTML = `
            <td>${x}</td>
            <td>${f(x)}</td>
            <td>${g(x)}</td>
            <td>${h(x)}</td>
            <td>${i(x)}</td>
            `;
    }
    tableBody.appendChild(row);
  }
});
