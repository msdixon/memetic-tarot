// load DOM before running script
"use strict";

document.addEventListener("DOMContentLoaded", function(){console.log('DOMloaded') });

// initialize modals
MicroModal.init({
  disableScroll: false,
  });

console.log("modalsLoaded");
// declare modal variables
// let tarotImageModal = document.querySelectorAll(".micromodal.id");

// declare card containers and card image variables 
let cardImages = document.querySelectorAll(".card_img");



// create array of tarot images for the cards to shuffle through
let tarotImages = [
  {index:1, title: "Ace of Cups", src: "assets/img/AceCoups1760.jpeg", alt: "Ace de Coups, an 18th century tarot card", cardNumberValue: "1", suit: "Cups", modalId: "aceCupsConver", modalContent: "<p>Suit  : Cups </p> <p> Value  : Ace (1)</p> <p> Plot : blessings, abundance, grit, auspices, small miracles</p> <p> Character : artistic, creative, dynamic leader</p> <p> Energy/setting : water</p> "},
  {index:2, title: "Ace of Cups", src: "assets/img/AceOfCupsFlickr.jpg", alt: "Ace of Cups from Rider-Waite-Smith tarot deck, with one large cup overflowing with golden substance", cardNumberValue: "1", suit: "Cups", modalId: "aceCupsRWS", modalContent: "<p>Suit  : Cups </p> <p> Value  : Ace (1)</p> <p> Plot : blessings, abundance, grit, auspices, small miracles</p> <p> Character : artistic, creative, dynamic leader</p> <p> Energy/setting : water</p> "},
  {index:3, title: "Ace of Cups", src: "assets/img/AceCupsVSf.jpeg", alt: "Ace of Cups from the Vincenti-Sforza tarot deck, one gold cup filled with a gold baton with an angel figure at the top", modalId: "aceCupsVSf", modalContent: "<p>Suit  : Cups </p> <p> Value  : Ace (1)</p> <p> Plot : blessings, abundance, grit, auspices, small miracles</p> <p> Character : artistic, creative, dynamic leader</p> <p> Energy/setting : water</p> "},
  {index:4, title: "Two of Cups", src: "assets/img/Cups02.jpg", alt: "Two of Cups from the Rider-Waite-Smith tarot deck", cardNumberValue: "2", suit: "Cups", modalId: "#Cups02RWS", modalContent: "<p>Suit  : Cups </p> <p> Value  : Two (2)</p> <p> Plot : partnership, union, love, friendship, harmony, balance</p> <p> Character : romantic, idealistic, diplomatic, sensitive</p> <p> Energy/setting : water</p> "},
  {index:5, title: "Two of Cups", src: "assets/img/Sola_Busca_Cups02.jpg", alt: "Two of cups from the Sola Busca tarot deck", modalId:"Cups02SB", modalContent: "<p>Suit  : Cups </p> <p> Value  : Two (2)</p> <p> Plot : partnership, union, love, friendship, harmony, balance</p> <p> Character : romantic, idealistic, diplomatic, sensitive</p> <p> Energy/setting : water</p> "}, 
  {index:6, title: "Three of Cups", src: "assets/img/ThreeCupsRWS.jpg", alt: "Three of Cups from the Rider-Waite-Smith tarot deck, with three robed figures holding cups up to the sky facing each other", modalId:"Cups03RWS", modalContent: "<p>Suit  : Cups </p> <p> Value  : Three (3) </p> <p> Plot :offerings, rewards, fruiting plants, gifts, sharing</p> <p> Character : gardener, community leader, one tender-of-spirit</p> <p> Energy/setting : water</p> "}, 
  {index:7, title: "Three of CUps", src: "assets/img/Minchiate03Cups.jpeg", alt: "Three of Cups from the Minchiate tarot deck, with three illustrated cups in a triangle pattern and a sitting monkey holding their hand outstretched in the center", modalId:"Cups03Min", modalContent: "<p>Suit  : Cups </p> <p> Value  : Three (3) </p> <p> Plot :offerings, rewards, fruiting plants, gifts, sharing</p> <p> Character : gardener, community leader, one tender-of-spirit</p> <p> Energy/setting : water "},
  {index:8, title: "Four of Cups", src: "assets/img/MinchiateCups04.jpg", alt: "Four of Cups from the Minchiate tarot deck", modalId:"Cups04RWS", modalContent: "<p>Suit  : Cups </p> <p> Value  : Four (4) </p> <p> Plot : imagination, satisfaction, intuition, relationships</p> <p> Character : friendliness, calm waters, love-struck, focused on balance, caring</p> <p> Energy/setting : water</p> "}, 
  {index:9, title: "Five of Cups", src: "assets/img/FiveCupsRWS.jpg", alt: "Five of Cups from the Rider-Waite-Smith tarot deck", modalId:"Cups05RWS", modalContent: "<p>Suit  : Cups </p> <p> Value  : Five (5) </p> <p> Plot : alienation, sadness, poor harvest </p> <p> Character : misanthrope, traumatized, low self-care</p> <p> Energy/setting : water </p> "},
  {index:10, title: "Six of Cups", src: "assets/img/06BolonaisAllaTorre.jpeg", alt: "Six of Cups, from the Bolonais Alla Torre tarot deck", modalId: "Cups06BaT", modalContent: "<p>Suit  : Cups </p> <p> Value  : Six (6)</p> <p> Plot : culmination, memories, healing, enjoying pleasure after a life trial </p> <p> Character : steeped in neediness, nostalgia</p> <p> Energy/setting : water</p> "},
  {index:11, title: "Six of Cups", src: "assets/img/Sola_Busca_Cups06.jpeg", alt: "Seven of Cups from the Sola Busca tarot deck", modalId: "Cups07SB", modalContent: "<p>Suit  : Cups </p> <p> Value  : Seven (7) </p> <p> Plot : illusions, fantasy worlds, routes to escape, disappointment </p> <p> Character : daydream believer, activist, sponsor/grantor </p> <p> Energy/setting : water</p> "},
  // TODO: clean up 8s and 9s in repo
  {index:12, title: "Nine of Cups", src: "assets/img/TarokkKartya_Barely_09Cup.jpg", alt: "Nine of Cups from the Tarokk Kartya card deck, with a reflected figure of a couple dancing outside, and on the reflection a couple in a field with an animal, one person drinking from a cup and the other selecting items from a fruit cart", modalId:"09CupsTK", modalContent: "<p>Suit  : Cups </p> <p> Value  : Nine (9) </p> <p> Plot :Success, winning awards, overcoming challenges</p> <p> Character : happy-go-lucky, optimistic, compassionate</p> <p> Energy/setting : water</p> " }, 
  {index:13, title: "Nine of Cups", src: "assets/img/09CupsVsf.jpeg", alt:  "Nine of Cups from the Vincenti-Sforza tarot deck", modalId: "09CupsVSf", modalContent: "<p>Suit  : Cups </p> <p> Value  : Nine (9) </p> <p> Plot :Success, winning awards, overcoming challenges</p> <p> Character : happy-go-lucky, optimistic, compassionate</p> <p> Energy/setting : water </p> " }, 
  {insex:14, title: "Ten of Cups", src: "assets/img/Sola_Busca_Cups10.jpeg", alt: "Ten of Cups from the Sola Busca tarot deck", modalId: "10CupsSB", modalContent: "<p>Suit  : Cups </p> <p> Value  : Ten (10) </p> <p> Plot : fulfillment, restoration, family abundance, connection to community </p> <p> Character : content, connected, fulfilled, satisfied</p> <p> Energy/setting : water </p> " },
  {index:15, title: "Page/Student of Cups", src: "assets/img/Bembo-Visconti-KnaveOfCups.jpg", alt: "Page of Cups from the 15th century Bembo-Visconti tarot deck, with a figure of a young person in regal dress standing and holding a cup with arm outstretched", modalId:"PageCupsBV", modalContent:"Suit : Cups </p> <p> Value  : Face|Page </p> <p> Plot : meditation activities, therapy, self-exploration</p> <p> Character : empathetic, emotion-driven, sweet, sensitive, </p> <p> Energy/setting : water</p> "}, 
  {index:16, title: "King/Steward of Cups", src: "assets/img/KingCupsPiedmontese.jpg", alt: "King of Cups from the Piedmontese tarot deck", modalId: "KingCupsP", modalContent: "<p>Suit  : Cups </p> <p> Value  : Face: King|Steward </p> <p> Plot : teaching maturity, running to support, labor leadership, care work, help in an emergency</p> <p> Character : reliable, resourceful, underrated hero, lionhearted, leader from the curtains </p> <p> Energy/setting : water </p> "}, 
  {index:17, title: "Chaos", src: "assets/img/ChaosOracleDuDames.jpg", alt: "Chaos Major Arcana card from the Oracle Du Dames tarot deck, with abstract circles in red, blue, green, and yellow", modalId:"ChaosEtt", modalContent: "<p>Suit  : Major Arcana </p> <p> Value  : CHAOS </p> <p> Plot : randomness, chaos, deconstruction, unexpected news</p> <p> Character : frenemy, foil, romantic rival, unmanageable leader</p> <p> Energy/setting : fire</p> "}, 
  {index:18, title: "Queen/Sage of Cups", src: "assets/img/Etteilla-QueenCups.jpeg", alt: "Queen of Cups from Eitteilla's Tarot du Thot (Thoth)", modalId:"QueenCupsEtt", modalContent: "<p>Suit  : Cups </p> <p> Value  : Face: Queen|Sage</p> <p> Plot : bearing witness, consultation, instinctive messages, relationship triage</p> <p> Character : empathy, understanding, compassion, listening</p> <p> Energy/setting : water</p> ",}, 
  {index:19, title: "Page/Student of Cups", src: "assets/img/FrenchTarotWedding.jpeg", alt: "Page of Cups from the French Wedding tarot deck", modalId:"PageCupsWedd", modalContent:"<p> Suit : Cups </p> <p> Value  : Face: Page|Student </p> <p> Plot : meditation activities, therapy, self-exploration</p> <p> Character : empathetic, emotion-driven, sweet, sensitive, </p> <p> Energy/setting : water</p> "}, 
  
];

// find element for click event to be on and assign click handler
window.onload = function(){
  // select shuffle action button
  let shuffleButton = document.querySelector('.shuffle-button');
  // add event listener to shuffle button
    shuffleButton.addEventListener('click', function shuffleImagesAndContent() {
      // create copy of tarot images array here instead
      let tarotImagesCopy = [...tarotImages];
    // select all card containers
      let cardContainers = document.querySelectorAll('.card');
      
    // loop through card containers
      cardContainers.forEach(function(card, index){
         // If tarotImagesCopy is exhausted, refill it
      if (tarotImagesCopy.length <= 4) {
        tarotImagesCopy = [...tarotImages];
      }
      // Inside the loop, generate a random index based on the length of the image array.
      const randomIndex = Math.floor(Math.random() * tarotImagesCopy.length);
      const randomImage = tarotImagesCopy[randomIndex];
      // remove the image from the array
      tarotImagesCopy.splice(randomIndex, 1);
      // Inside the loop, create an image element
      let cardImages = card.querySelector('.card_img');
      // set the src attribute & alt of image to random image
      cardImages.src= randomImage.src;
      cardImages.alt= randomImage.alt;

      // re-initialize Micromodal 
      MicroModal.init({
        disableScroll: true,
      });
  // set modal id to default relative card image
      let buttonTrigger = card.querySelectorAll('.open');
      if (buttonTrigger) {
        buttonTrigger.forEach((button) => {
        button.addEventListener('click', function() {
           // set modal id in DOM data to relative card image
      let modals = document.querySelectorAll('.micromodal');
      if (modals) {
        modals.forEach((modal) => {
          modal.setAttribute('id', randomImage.modalId);
          // update modal content
          let uniqueModalContent = randomImage.modalContent;
          let contentElement = modal.querySelector('.modal-content');
          if (contentElement) {
              contentElement.innerHTML = uniqueModalContent;
            }
        });
      }
      //  Check if a modal is open by checking if the body has the class 'is-open' and if so set aria-hidden to false
          let body = document.querySelector('body');
          if (body.classList.contains('is-open')) {
            body.setAttribute('aria-hidden', "false");
          } else {
            console.log("class list does not contain is-open");
          }
          if (MicroModal.activeModal) {
          // Close any open modals
            MicroModal.close();
          }
          // Open modal
          // MicroModal.show(randomImage.modalId);
        });
      });
      }
        // re-initialize Micromodal
        MicroModal.init({
          onShow: modal => console.info(`${modal.id} is shown`),
          disableScroll: true,
        });
        
      });
    // }) // Remove this line
  });

  console.log("shuffle button");
  }
