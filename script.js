const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = carouselWrapper.children.length - 1;
	}
	updateCarousel();
});

nextButton.addEventListener('click', () => {
	currentSlide++;
	if (currentSlide >= carouselWrapper.children.length) {
		currentSlide = 0;
	}
	updateCarousel();
});

function updateCarousel() {
	carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}
