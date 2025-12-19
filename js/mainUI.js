// Slider function
function slidePrev(button) {
    const container = button.closest('.product-container');
    const content = container.querySelector('.section-content');
    const cardWidth = content.querySelector('.product-card').offsetWidth + 20; // 20px là gap
    content.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
}

function slideNext(button) {
    const container = button.closest('.product-container');
    const content = container.querySelector('.section-content');
    const cardWidth = content.querySelector('.product-card').offsetWidth + 20; // 20px là gap
    content.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
}