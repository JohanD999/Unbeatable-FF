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
