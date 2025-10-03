let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")
let one = num1.value 
let two = num2.value
function add() {
    let sumEl = document.getElementById("sum-el")
    
    let sum = one + two
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}
function subtract() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = one - two
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}
function multiply() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = one * two
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}
function divide() {
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = ""
    let sum = one / two
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
}