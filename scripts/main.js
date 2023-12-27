// load DOM before running script
document.addEventListener("DOMContentLoaded", function(){console.log('DOMloaded') });

console.log(5 + 6);
// initialize modals
MicroModal.init({
    disableScroll: true
  });

console.log("modalsLoaded");
// find element for target to be on
let card = document.querySelectorAll(".card_img");

// find element for click event to be on and assign click handler
window.onload = init;
function init() {
  let shuffle = document.getElementsByClassName(".shuffle-button");
  shuffle.onclick = shuffleDeck;
}

// find elements for random image to be on
let reading = document.getElementsByClassName(".card");

// create array of tarot images for the cards to shuffle through
let tarotImages = ["../assets/img/Cups02.jpg", "../assets/img/TarokkKartya_Barely_09Cup.jpg", "../assets/img/Three_of_Cups\,_Waite-Smith_Tarot_Deck\,_Yale_University.jpg", "../assets/img/ChaosOracleDuDames.jpg", "../assets/img/Sola_Busca_Cups02.jpg", "../assets/img/MinchiateCups04.jpg", "../assets/img/Etteilla-QueenCups.jpeg", "", "../assets/img/Bembo-Visconti-KnaveOfCups.jpg"];


// function shuffleDeck() {
// add event listener with Math random loop - changed card to reading ln 26
  card.forEach(shuffle => {
  shuffle.addEventListener('click', function() {
    const randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
    card_img.style.src= `url(${randomImage})`;
  });  
 });

// const onclick = function() {
  // var randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
  // card_img.style.src= `url(${randomImage})`;
//  }
// }
//  card.innerHTML = randomImage;

// var controller = {

// }

//  shuffle.onclick = function() {}

  console.log("event listener") ;

// try shuffle on card "deck" rather than background images
// function shuffleDeck(deck) {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//   }
// }