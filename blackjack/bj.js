
let cards = []
let sum = 0
let msg = ""
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-text")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

player = {
    name: "Ellis",
    chips: 190
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() { 
    let randomCard = Math.floor( Math.random() * 13) + 1
    if ( randomCard === 1 ) {
        return 11
    } else if ( randomCard >= 11 ) {
        return 10
    } else {
        return randomCard
    }
    
}
function startGame() {
    if ( sum === 0) {
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i ++) { 
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        msg = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        msg = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        msg = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(msg)
    messageEl.textContent = msg
}
function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }

}
function restartGame() {
    cards = []
    sum = 0
    renderGame()
}