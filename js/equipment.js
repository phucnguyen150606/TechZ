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

    window.location.href = 'cart.html';
}

// Search function
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');
    let found = false;
    if (!searchText) {
        productCards.forEach(card => card.style.display = '');
        return;
    }
    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').innerText.toLowerCase().trim();

        if (productName.includes(searchText)) {
            card.style.display = '';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert('Không tìm thấy sản phẩm: ' + searchText);
    }
}
//search event Enter
function Enter(event) {
    if (event.key === 'Enter') searchProducts();
}