// newdiv = document.createElement('div');
// document.querySelector('body').appendChild(newdiv);
// console.log('HI IM WORKING');

const obj = { name: 'DIXON' };
document.addEventListener("DOMContentLoaded", function(){console.log('loaded') });

console.log(5 + 6);

MicroModal.init({
    disableScroll: true
  });
    
console.log("yo");
// find element for event to be on
var cardsBackground = document.querySelector(".cards");
var cards = document.querySelectorAll(".card");
//var backgroundImages = ["/false-idols/runeroom/assets/img/bg2.jpg", "/false-idols/runeroom/assets/img/bg3.jpg", "/false-idols/runeroom/assets/img/bg4.jpg", "/false-idols/runeroom/assets/img/bg5.jpg", "/false-idols/runeroom/assets/img/bg8.jpg", "/false-idols/runeroom/assets/img/bg6.jpg", "/false-idols/runeroom/assets/img/bg7.jpg", "/false-idols/runeroom/assets/img/bg9.jpg", "/false-idols/runeroom/assets/img/bg10.jpg"];
// add event listener with Math random loop
cards.forEach(card => {
  card.addEventListener('click', function() {
    var randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    cardsBackground.style.backgroundImage = `url(${randomImage})`;
    
  console.log("6+9") ;
  });
});
