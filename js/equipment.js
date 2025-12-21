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

function add(button) {
    const card = button.closest('.product-card');
    const image = card.querySelector('img').src;
    const name = card.querySelector('.product-name').innerText;
    const price = Number(card.querySelector('.new-price').innerText.replace(/\D/g, ''));


    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ image, name, price, qty: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Đã thêm " + name + " vào giỏ hàng");

    window.location.href = 'cart.html';

}

// Search function
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === '') {
        alert('Vui lòng nhập từ khóa tìm kiếm');
        return;
    }

    const productCards = document.querySelectorAll('.product-card');
    const productList = document.querySelector('.products-list');
    let found = false;

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').innerText.toLowerCase();

        if (productName.includes(searchText)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert('Không tìm thấy sản phẩm: ' + searchText);
    }
}

// Search button event
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', searchProducts);
    }

    // Tìm kiếm khi nhấn Enter
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
})