// load DOM before running script
document.addEventListener("DOMContentLoaded", function(){console.log('DOMloaded') });

console.log(5 + 6);
// initialize modals
MicroModal.init({
    disableScroll: true
  });


  console.log("modalsLoaded");
// find element for event to be on
var card = document.querySelectorAll(".card");
var shuffle = document.querySelector(".shuffle-button");
var tarotImages = ["/memetic-tarot/assets/img/Cups02.jpg", "../assets/img/TarokkKartya_Barely_09Cup.jpg", "../assets/img/Three_of_Cups\,_Waite-Smith_Tarot_Deck\,_Yale_University.jpg", "../assets/img/ChaosOracleDuDames.jpg", "../assets/img/Sola_Busca_Cups02.jpg", "../assets/img/MinchiateCups04.jpg", "../assets/img/Etteilla-QueenCups.jpeg", "", "../assets/img/Bembo-Visconti-KnaveOfCups.jpg"];

// add event listener with Math random loop
card.forEach(shuffle => {
  shuffle.addEventListener('click', function() {
    var randomImage = tarotImages[Math.floor(Math.random() * tarotImages.length)];
    tarotImages.style.card = `url(${randomImage})`;
  });  
 });
  console.log("event listener") ;

// try shuffle on card "deck" rather than background images
// function shuffleDeck(deck) {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//   }
// }