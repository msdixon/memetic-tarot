
document.addEventListener("DOMContentLoaded", function(){console.log('loaded') });


console.log(5 + 6);

MicroModal.init({
    disableScroll: true
  });
    
// console.log("yo");
// // find element for event to be on
var cardsBackground = document.querySelector(".cards");
var cards = document.querySelectorAll(".card");
var backgroundImages = ["/memetic-tarot/assets/img/Cups02.jpg", "../assets/img/TarokkKartya_Barely_09Cup.jpg", "../assets/img/Three_of_Cups\,_Waite-Smith_Tarot_Deck\,_Yale_University.jpg", "../assets/img/ChaosOracleDuDames.jpg", "../assets/img/Sola_Busca_Cups02.jpg", "../assets/img/MinchiateCups04.jpg", "../assets/img/Etteilla-QueenCups.jpeg", "", "../assets/img/Bembo-Visconti-KnaveOfCups.jpg"];

// // add event listener with Math random loop
cards.forEach(card => {
  card.addEventListener('click', function() {
    var randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    cardsBackground.style.backgroundImage = `url(${randomImage})`;
    
  console.log("6+9") ;
  });
});
