function showPromotion() {
  const promotions = [
    "20% discount on gaming headsets during this week.",
    "Buy a wireless controller and get a discount on your next game.",
    "Free delivery on purchases over Q500.00.",
    "Special promotion: selected games starting at Q250.00."
  ];

  const randomNumber = Math.floor(Math.random() * promotions.length);
  document.getElementById("promotion").textContent = promotions[randomNumber];
}

function filterProducts(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(function(product) {
    if (category === "all") {
      product.classList.remove("hidden");
    } else if (product.classList.contains(category)) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
}

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please complete all the fields in the form.");
  } else {
    alert("Thank you for contacting us, " + name + ". Your message has been sent successfully.");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}

/* Image gallery */
const sliderImages = [
  "images/banner1.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg"
];

let currentImage = 0;

function showImage() {
  const sliderImage = document.getElementById("slider-image");

  if (sliderImage) {
    sliderImage.src = sliderImages[currentImage];
  }
}

function nextImage() {
  currentImage++;

  if (currentImage >= sliderImages.length) {
    currentImage = 0;
  }

  showImage();
}

function previousImage() {
  currentImage--;

  if (currentImage < 0) {
    currentImage = sliderImages.length - 1;
  }

  showImage();
}

setInterval(nextImage, 3000);

/* Background music */
function toggleMusic() {
  const music = document.getElementById("background-music");

  if (music.paused) {
    music.volume = 0.2;
    music.play();
  } else {
    music.pause();
  }
}

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();