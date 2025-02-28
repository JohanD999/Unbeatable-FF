let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    
    index += step;

    if (index < 0) {
        index = totalSlides - 1; // Wrap around to the last image
    } else if (index >= totalSlides) {
        index = 0; // Wrap around to the first image
    }

    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
}

function openFullscreen(img) {
    document.getElementById("fullscreen-img").src = img.src;
    document.getElementById("fullscreen-view").style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("fullscreen-view").style.display = "none";
}
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Touch Swipe Support (For Mobile)
let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".carousel-container").addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

document.querySelector(".carousel-container").addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        moveSlide(1); // Swipe Left
    } else if (touchStartX - touchEndX < -50) {
        moveSlide(-1); // Swipe Right
    }
});

// Fullscreen View
function openFullscreen(img) {
    document.getElementById("fullscreen-view").style.display = "flex";
    document.getElementById("fullscreen-img").src = img.src;
}

function closeFullscreen() {
    document.getElementById("fullscreen-view").style.display = "none";
}
