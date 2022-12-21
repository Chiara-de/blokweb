// JavaScript Document
console.log("hi");






// COPY PASTE CODE FROM DLO>JS-3STAP-OPDRACHT2
/******************************/
/* menu openen de MENU button */
/******************************/

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}








// REFFRENCE CODE VOOR EEN AUTOMATISCHE ANIMATIE
/********************************************/
/* mini logo animatie op de services-pagina */
/********************************************/


// stap 1: maak een lijst met de animatie foto's en sla die op in een variabele
var images = ['images-servicesPage/Animate-Service/apple-services-animate01.png', 
              'images-servicesPage/Animate-Service/apple-services-animate02.png', 
              'images-servicesPage/Animate-Service/apple-services-animate03.png',
              'images-servicesPage/Animate-Service/apple-services-animate04.png', 
              'images-servicesPage/Animate-Service/apple-services-animate05.png',
              'images-servicesPage/Animate-Service/apple-services-animate06.png'];
// stap 2: zoek de foto en sla die op in een variabele
var imageElement = document.querySelector('main.services section:nth-child(2) > img');

// stap 3: maak variabele aan voor een counter die de 
let currentImageIndex = 0;
let loopCount = 0;

// stap 4: maak een functie die de lijst met fotos 1 voor 1 afloopt, doe dit 2 keer
function updateImage() {
  setTimeout(() => {
    imageElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // tel de loops
    loopCount++;
    // stopt de loop na
    if (loopCount <= 12) {
        updateImage();
      }
    }, 1100);
}

// BORROWED
// var intervalID = setInterval(updateImage, 1100);

// stap 5: begin de animatie op het moment dat de pagina word geladen
window.addEventListener('load', () => {
  updateImage();
});


// function showImage(index) {
//   slider.src = images[index];
//   currentIndex = index;
// }

// stap 5: voeg in de functie een loop toe stopt na 2 iteraties
// function startLoop() {
//   setTimeout(() => {
//     showImage((currentIndex + 1) % images.length);
//     loopCount++;
//     if (loopCount < 10) {
//       startLoop();
//     }
//   }, 2000);
// }

// setInterval(() => {
//   showImage((currentIndex + 1) % images.length);
// }, 2000);

// // stap : laat de foto's wachten tot de pagina is geladen en voer dan de functie uit
// slider.addEventListener('load', () => {
//   slider.style.opacity = 1;
//   startLoop();
// });


// Start the loop when the page is loaded
// window.addEventListener('load', () => {
//   slider.style.opacity = 1;
//   startLoop();
// });
