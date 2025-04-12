document.addEventListener("DOMContentLoaded", function () {
    let carouselIndex = 0;
    const carouselImages = document.querySelectorAll(".carousel-container img");

    function showNextImage() {
        carouselImages[carouselIndex].style.display = "none";
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        carouselImages[carouselIndex].style.display = "block";
    }

    setInterval(showNextImage, 3000);

    // Función para seleccionar un corte o bebida
    function selectImage(event) {
        let images = event.target.parentNode.querySelectorAll("img");
        images.forEach(img => img.classList.remove("selected"));
        event.target.classList.add("selected");
    }

    document.querySelectorAll(".carousel-wrapper img").forEach(img => {
        img.addEventListener("click", selectImage);
    });
});
