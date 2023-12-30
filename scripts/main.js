// load DOM before running script
document.addEventListener("DOMContentLoaded", function(){console.log('DOMloaded') });

// initialize modals
MicroModal.init({
    disableScroll: true
  });
console.log("modalsLoaded");

// declare card containers and card image variables 
let cardImages = document.querySelectorAll(".card_img");
// create array of tarot images for the cards to shuffle through
let tarotImages = ["./assets/img/Cups02.jpg", "./assets/img/TarokkKartya_Barely_09Cup.jpg", "./assets/img/Three_of_Cups\,_Waite-Smith_Tarot_Deck\,_Yale_University.jpg", "../assets/img/ChaosOracleDuDames.jpg", "./assets/img/Sola_Busca_Cups02.jpg", "./assets/img/MinchiateCups04.jpg", "./assets/img/Etteilla-QueenCups.jpeg", "", "./assets/img/Bembo-Visconti-KnaveOfCups.jpg"];

// find element for click event to be on and assign click handler
window.onload = function(){
  // select shuffle action button
  let shuffleButton = document.querySelector(".shuffle-button");
  // add event listener to button
  shuffleButton.addEventListener('click', function() {
  // select all card containers
  let cardContainers = document.querySelectorAll('.card');
  // loop through card containers
  cardContainers.forEach(function(card){
    // Inside the loop, generate a random index based on the length of the image array.
    const randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
    // Inside the loop, create an image element
    let cardImages = card.querySelector('.card_img');
    // set the src attribute of image to random image
    cardImages.src= randomImage;
  }); 
  });
}


// card.forEach(function(card){
//   shuffle-button.addEventListener('click', function(){
//     // Inside the loop, generate a random index based on the length of the image array.
//     const randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
//     // Inside the loop, create an image element
//     let cardImages = document.querySelectorAll('.card_img') [0];
//     // Inside the loop use the random index to grab the image src from the image array
//     cardImages.src= `url(${randomImage})`;
//   }); 
// }

console.log("shuffle button");
// shuffle algo math random loop through card container
// function shuffleDeck() {
//   card.addEventListener('click', function() {
//     // Inside the loop, generate a random index based on the length of the image array.
//    const randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
//    let cardImages = document.querySelectorAll('.card_img') [0];
//     cardImages.src= `url(${randomImage})`;
// });  
// };
// console.log("shuffleDeck");

// const randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];

// add random card algo to match random image algo


// function shuffleDeck(tarotImages) {
//   for (let i = tarotImages.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [tarotImages[i], tarotImages[j]] = [tarotImages[j], tarotImages[i]];
//   }
// }

// find elements for random image to be on

// function shuffleDeck() {
  
// shuffleDeck = function() {
  // var randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
  // card_img.style.src= `url(${randomImage})`;
//  }
// }
//  card.innerHTML = randomImage;

// var controller = {

// }

const tarotCardSet = [
  { title: "ace de coups", Image: ".assets/img/AceCoups1760.jpeg", alt: "Ace de Coups", cardNumberValue: "1", suit: "Cups", modal: "modal1" },
  { title: "Ace of Cups (Rider-Waite)", img: ".assets/img/AceOfCupsFlickr.jpg", alt: "Ace of Cups (Rider-Waite)", cardNumberValue: "1", suit: "Cups", modal: "modal2" }
  // img:
  // alt:
  // 
  // card number:
  // suit:
  // modal: 
]


// function to go through array
//  target cards add images inner.HTML maybe with function 
//  add event listener to button click