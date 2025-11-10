    document.addEventListener('DOMContentLoaded', () => {
    const cardList = document.querySelector('.card-list');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (!cardList || !nextBtn || !prevBtn) return;

    const SCROLL_STEP = Number(cardList.dataset.step) || 250;
    const AUTO_SLIDE_INTERVAL = 3000; // waktu jeda (ms) antar slide, misalnya 3 detik

    // Deteksi posisi ujung
    const isAtEnd = () =>
        cardList.scrollLeft + cardList.clientWidth >= cardList.scrollWidth - 1;
    const isAtStart = () => cardList.scrollLeft <= 0;

    const scrollByStep = (dir) => {
        if (dir === 1 && isAtEnd()) {
        cardList.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (dir === -1 && isAtStart()) {
        cardList.scrollTo({ left: cardList.scrollWidth, behavior: 'smooth' });
        } else {
        cardList.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
        }
    };

    // Tombol manual
    nextBtn.addEventListener('click', () => scrollByStep(1));
    prevBtn.addEventListener('click', () => scrollByStep(-1));

    // Auto-slide
    let autoSlide = setInterval(() => scrollByStep(1), AUTO_SLIDE_INTERVAL);

    // Pause auto-slide saat mouse hover
    cardList.addEventListener('mouseenter', () => clearInterval(autoSlide));
    cardList.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => scrollByStep(1), AUTO_SLIDE_INTERVAL);
    });
    });
        