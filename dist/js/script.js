document.addEventListener('DOMContentLoaded', () => {
    const cardList = document.querySelector('.card-list');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    // Berhenti kalau elemen kunci tidak ada
    if (!cardList || !nextBtn || !prevBtn) return;

    // Bisa diatur lewat: <div class="card-list" data-step="300">
    const SCROLL_STEP = Number(cardList.dataset.step) || 250;

    const scrollByStep = (dir) => {
        cardList.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
    };

    nextBtn.addEventListener('click', () => scrollByStep(1));
    prevBtn.addEventListener('click', () => scrollByStep(-1));
});
