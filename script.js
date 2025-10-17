console.log("Site SYLV-EXCELLENCIA chargé avec succès !");

// Bannière dynamique
const heroSection = document.querySelector(".hero");
const heroImages = [
  "assets/images/hero4.jpg",
  "assets/images/hero5.jpg",
  "assets/images/hero6.jpg",
  "assets/images/hero7.jpg",
  "assets/images/hero.jpg",
  "assets/images/hero1.jpg",
  "assets/images/hero2.jpg"
];
let heroIndex = 0;
function changeHeroBackground() {
  heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,80,0.5), rgba(0,0,80,0.5)), url('${heroImages[heroIndex]}')`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}
setInterval(changeHeroBackground, 2500);
changeHeroBackground();

// À propos dynamique
const aboutSection = document.querySelector(".about");
const aboutImages = [
  "assets/images/about1.jpg",
  "assets/images/about2.jpg",
  "assets/images/about3.jpg",
  "assets/images/about4.jpg",
  "assets/images/about5.jpg",
  "assets/images/about6.jpg"
];
let aboutIndex = 0;
function changeAboutBackground() {
  aboutSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${aboutImages[aboutIndex]}')`;
  aboutIndex = (aboutIndex + 1) % aboutImages.length;
}
setInterval(changeAboutBackground, 3000);
changeAboutBackground();

// Diaporama à côté du formulaire
const galleryImages = [
  "assets/images/slide1.jpg",
  "assets/images/slide2.jpg",
  "assets/images/slide3.jpg",
"assets/images/slide4.jpg",
  "assets/images/slide5.jpg",
  "assets/images/slide6.jpg",
"assets/images/slide7.jpg",
  "assets/images/slide8.jpg",
  "assets/images/slide9.jpg"
];
let galleryIndex = 0;
const gallerySlide = document.getElementById("gallery-slide");
function changeGalleryImage() {
  gallerySlide.src = galleryImages[galleryIndex];
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
}
setInterval(changeGalleryImage, 2000);

// Menu responsive
function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("active");
}

