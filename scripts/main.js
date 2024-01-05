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
// let tarotImages = ["assets/img/AceCoups1760.jpeg", "assets/img/06BolonaisAllaTorre.jpeg", "assets/img/AceCupsVSf.jpeg", "assets/img/09CupsVsf.jpeg", "assets/img/Sola_Busca_Cups10.jpeg", "assets/img/KingCupsPiedmontese.jpg", "assets/img/AceOfCupsFlickr.jpg", "assets/img/ThreeCupsRWS.jpg", "assets/img/TarokkKartya_Barely_09Cup.jpg", "assets/img/Bembo-Visconti-KnaveOfCups.jpg", "assets/img/Sola_Busca_Cups06.jpeg", "assets/img/ChaosOracleDuDames.jpg", "assets/img/Sola_Busca_Cups02.jpg", "assets/img/MinchiateCups04.jpg", "assets/img/Etteilla-QueenCups.jpeg", "assets/img/FiveCupsRWS.jpg", "assets/img/FrenchTarotWedding.jpeg", "assets/img/Cups02.jpg", "assets/img/Minchiate03Cups.jpeg"];
let tarotImages = [
  {src: "assets/img/AceCoups1760.jpeg", alt: "Ace de Coups, an 18th century tarot card", cardNumberValue: "1", suit: "Cups", modal: "modal-1" },
  {src: "assets/img/AceOfCupsFlickr.jpg", alt: "Ace of Cups from Rider-Waite-Smith tarot deck, two interlocking standing figures hold cups to the sky", cardNumberValue: "1", suit: "Cups", modal: "modal2" },
  {src: "assets/img/06BolonaisAllaTorre.jpeg", alt: "Six of Cups, from the Bolonais Alla Torre tarot deck" },
  {src: "assets/img/AceCupsVSf.jpeg", alt: "Ace of Cups from the Vincenti-Sforza tarot deck, one gold cup filled with a gold baton with an angel figure at the top" },
  {src: "assets/img/09CupsVsf.jpeg", alt:  "Nine of Cups from the Vincenti-Sforza tarot deck"}, 
  {src: "assets/img/Sola_Busca_Cups10.jpeg", alt: "Ten of Cups from the Sola Busca tarot deck"},
  {src: "assets/img/KingCupsPiedmontese.jpg", alt: "King of Cups from the Piedmontese tarot deck"}, 
  {src: "assets/img/AceOfCupsFlickr.jpg", alt: "Ace of Cups from Rider-Waite-Smith tarot deck, with one large cup overflowing with golden substance"}, 
  {src: "assets/img/ThreeCupsRWS.jpg", alt: "Three of Cups from the Rider-Waite-Smith tarot deck, with three robed figures holding cups up to the sky facing each other"}, 
  {src: "assets/img/TarokkKartya_Barely_09Cup.jpg", alt: "Nine of Cups from the Tarokk Kartya card deck, with a reflected figure of a couple dancing outside, and on the reflection a couple in a field with an animal, one person drinking from a cup and the other selecting items from a fruit cart"}, 
  {src: "assets/img/Bembo-Visconti-KnaveOfCups.jpg", alt: "Page of Cups from the 15th century Bembo-Visconti tarot deck, with a figure of a young person in regal dress standing and holding a cup with arm outstretched" }, 
  {src: "assets/img/Sola_Busca_Cups06.jpeg", alt: "Six of Cups from the Sola Busca tarot deck" },
  {src: "assets/img/ChaosOracleDuDames.jpg", alt: "Chaos Major Arcana card from the Oracle Du Dames tarot deck, with abstract circles in red, blue, green, and yellow"}, 
  {src: "assets/img/Sola_Busca_Cups02.jpg", alt: "Two of cups from the Sola Busca tarot deck" }, 
  {src: "assets/img/MinchiateCups04.jpg", alt: "Four of Cups from the Minchiate tarot deck" }, 
  {src: "assets/img/Etteilla-QueenCups.jpeg", alt: "Queen of Cups from Eitteilla's Tarot du Thot (Thoth)"}, 
  {src: "assets/img/FiveCupsRWS.jpg", alt: "Five of Cups from the Rider-Waite-Smith tarot deck" },
  {src: "assets/img/FrenchTarotWedding.jpeg", alt: "Page of Cups from the French Wedding tarot deck"}, 
  {src: "assets/img/Cups02.jpg", alt: "Two of Cups from the Rider-Waite-Smith tarot deck" },
  {src: "assets/img/Minchiate03Cups.jpeg", alt: "Three of Cups from the Minchiate tarot deck, with three illustrated cups in a triangle pattern and a sitting monkey holding their hand outstretched in the center" }
];
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
    cardImages.src= randomImage.src;
    cardImages.alt= randomImage.alt;
    // set modal id to relative card image
    // button.setAttribute('data-micromodal-trigger', randomImage.modal);
  }); 
  });
}

console.log("shuffle button");
// create array of tarot objects


  // alt:
  // 
  // card number:
  // suit:
  // modal: 
// ]