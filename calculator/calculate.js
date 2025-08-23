let num1 = 8
let num2 = 12
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = num1 + num2
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}
function subtract() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = num1 - num2
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}
function multiply() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = num1 * num2
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}
function divide() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = num1 / num2
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}