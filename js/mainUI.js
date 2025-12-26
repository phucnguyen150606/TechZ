// Slider function
function slidePrev(button) {
    const container = button.closest('.product-container');
    const content = container.querySelector('.section-content');
    const cardWidth = content.querySelector('.product-card').offsetWidth + 20;
    content.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
}

function slideNext(button) {
    const container = button.closest('.product-container');
    const content = container.querySelector('.section-content');
    const cardWidth = content.querySelector('.product-card').offsetWidth + 20;
    content.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
}

function add(button) {
    const card = button.closest('.product-card');
    const image = card.querySelector('img').src;
    const name = card.querySelector('.product-name').innerText;
    const price = Number(card.querySelector('.new-price').innerText.replace(/\D/g, ''));
    const cart = [{ image, name, price, qty: 1 }];

    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Đã thêm " + name + " vào giỏ hàng");

    window.location.href = 'html/cart.html';
}