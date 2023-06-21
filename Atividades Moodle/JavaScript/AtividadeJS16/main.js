const slider = document.querySelector('.slider');
let currentSlide = 0;

function goToSlide(slide) {
    slider.style.transform = `translateX(-${slide * 33.33}%)`;
    currentSlide = slide;
}

function goToNextSlide() {
    currentSlide++;
    if (currentSlide >= slider.children.length) {
        currentSlide = 0;
    }
    goToSlide(currentSlide);
}

setInterval(goToNextSlide, 5000); // Auto-scroll a cada 5 segundos (ajuste conforme necessário)

// Eventos para os botões
next.addEventListener('click', (e) => {
    nextSlide(); // Invoca a função próximo slide
    // Executa a transição entre slides
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', (e) => {
    prevSlide(); // Invoca a função slide anterior
    // Executa a transição entre slides
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Caso a transição automática entre slides esteja habilitada
if (auto) {
    // Mostra o próximo slide automaticamente depois de um tempo
    slideInterval = setInterval(nextSlide, intervalTime);
}
