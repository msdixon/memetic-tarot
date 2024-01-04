// load DOM before running script
"use strict";

document.addEventListener("DOMContentLoaded", function(){console.log('DOMloaded') });

// initialize modals
MicroModal.init({
    disableScroll: true
  });
console.log("modalsLoaded");

// declare card containers and card image variables 
let cardImages = document.querySelectorAll(".card_img");
// create array of tarot images for the cards to shuffle through
let tarotImages = ["assets/img/AceCoups1760.jpeg", "assets/img/Sola_Busca_Cups10.jpeg", "assets/img/KingCupsPiedmontese.jpg", "assets/img/AceOfCupsFlickr.jpg", "assets/img/ThreeCupsRWS.jpg", "assets/img/TarokkKartya_Barely_09Cup.jpg", "assets/img/Bembo-Visconti-KnaveOfCups.jpg", "assets/img/Sola_Busca_Cups06.jpeg", "assets/img/ChaosOracleDuDames.jpg", "assets/img/Sola_Busca_Cups02.jpg", "assets/img/MinchiateCups04.jpg", "assets/img/Etteilla-QueenCups.jpeg", "assets/img/FiveCupsRWS.jpg", "assets/img/FrenchTarotWedding.jpeg", "assets/img/Cups02.jpg", "assets/img/Minchiate03Cups.jpeg"];

// find element for click event to be on and assign click handler
window.onload = function(){
  // select shuffle action button
  let shuffleButton = document.querySelector(".shuffle-button");
  // add event listener to button
  shuffleButton.addEventListener('click', function() {
  // select all card containers
    let cardContainers = document.querySelectorAll('.card');
  // create copy of tarot images array here instead
    let tarotImagesCopy = [...tarotImages];
  // loop through card containers
    cardContainers.forEach(function(card){
       // If tarotImagesCopy is exhausted, refill it
    if (tarotImagesCopy.length <= 6) {
      tarotImagesCopy = [...tarotImages];
    }
    // Inside the loop, generate a random index based on the length of the image array.
    const randomIndex = Math.floor(Math.random() * tarotImagesCopy.length);
    const randomImage = tarotImagesCopy[randomIndex];
    // remove the image from the array
    tarotImagesCopy.splice(randomIndex, 1);
    // Inside the loop, create an image element
    let cardImages = card.querySelector('.card_img');
    // set the src attribute of image to random image
    cardImages.src= randomImage;
    
  }); 
  });
}

console.log("shuffle button");
// create array of tarot objects
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