let cardEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let showEl = document.getElementById("sum-el")
var x = prompt("Enter between 2 to 11 including these 2 intergers","0")
var y = prompt("Enter between 2 to 11 including these 2 intergers","0")
var firstCard = parseInt(x)
var secondCard = parseInt(y) 
let sum = firstCard + secondCard
let cards = [firstCard, secondCard] 
console.log(sum)
let msg = ""

function startGame(){
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for ( let i = 0; i< cards.length; i++){
        cardEl.textContent += cards[i]+ " "}
        showEl.textContent = "Sum:" + sum
    if (sum <= 20){
    msg = ("Wanna draw another card bro ?")
}else if (sum === 21){
    msg = ("You won bruh")
}
else{
    msg = ("you are out bro")
}
messageEl.textContent = msg

console.log(msg)}
function newCard(){
    var l= prompt("Enter between 2 to 11 including these 2 intergers","0")
    var latest = parseInt(l)
    console.log("A new card is drawn from the deck")
    sum += latest
    cards.push(latest)
    console.log(cards)
    renderGame()

}
