let cardHome = document.getElementById("card-home")
let cardGuest = document.getElementById("card-guest")

let count = 0
let nums = 0

function addOne() {
    count += 1
    cardHome.textContent = count
    console.log("sum when added by 1")
}

function addTwo() {
    count += 2
    cardHome.textContent = count
    console.log("sum when added by 2")
}

function addThree() {
    count += 3
    cardHome.textContent = count
    console.log("sum when added by 3")
}

function addFour() {
    nums += 1
    cardGuest.textContent = nums
    console.log("sum when added by 4")
}

function addFive() {
    nums += 2
    cardGuest.textContent = nums
    console.log("sum when added by 5")
}

function addSix() {
    nums += 3
    cardGuest.textContent = nums
    console.log("sum when added by 6")
}

function reset() {
    cardHome.textContent = 0
    count = 0
    cardGuest.textContent = 0
    nums = 0
    console.log("set values to zero")
}