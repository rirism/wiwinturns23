document.addEventListener("DOMContentLoaded", function() {
    const imageCount = 5;  // Set this number according to how many images you expect (e.g., 5 images: pic1.jpg to pic5.jpg)
    const imageFolder = 'assets/'; // Folder path
    const imagePrefix = 'pic';  // Prefix of image names
    const imageExtension = '.jpg'; // Image file extension
    const carouselSlide = document.getElementById('carouselSlide');

    // Load Images Dynamically
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}${imagePrefix}${i}${imageExtension}`;
        img.classList.add('carousel-img');
        img.alt = `Birthday photo ${i}`;
        carouselSlide.appendChild(img);
    }

    // Carousel functionality
    let counter = 0;
    const size = document.querySelector('.carousel-img').clientWidth;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    nextBtn.addEventListener('click', () => {
        if (counter >= imageCount - 1) counter = -1; // Reset to start if at the end
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) counter = imageCount; // Go to last image if at the start
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});
