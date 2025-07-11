document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('counter');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Инициализация слайдера
    updateCounter();
    slides[currentSlide].classList.add('active');
    
    // Функция для обновления счетчика
    function updateCounter() {
        counter.textContent = `${currentSlide + 1} из ${totalSlides}`;
    }
    
    // Функция для переключения слайдов
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
        updateCounter();
    }
    
    // Обработчики событий для кнопок
    nextBtn.addEventListener('click', function() {
        goToSlide(currentSlide + 1);
    });
    
    prevBtn.addEventListener('click', function() {
        goToSlide(currentSlide - 1);
    });
    
    // Добавляем обработчики клавиатуры
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        }
    });
});