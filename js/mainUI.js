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
    // Lấy thẻ sản phẩm (nút "Thêm vào giỏ hàng" nằm trong .product-card)
    const card = button.closest('.product-card');
    const img = card.querySelector('img').src;
    const name = card.querySelector('.product-name').innerText.trim();
    const price = card.querySelector('.new-price').innerText.trim();

    // Lấy giỏ hàng từ localStorage (key: 'header-item-cart')
    const stored = localStorage.getItem('header-item-cart');
    const cart = [];
    if (stored) {
        try {
            cart = JSON.parse(stored);
            if (!Array.isArray(cart)) cart = [];
        } catch (e) {
            cart = [];
        }
    } else {
        cart = [];
    }

    // Tìm sản phẩm cùng tên trong giỏ (dùng vòng for để dễ hiểu)
    const foundIndex = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        // Nếu có rồi thì tăng số lượng
        cart[foundIndex].qty = cart[foundIndex].qty + 1;
    } else {
        // Nếu chưa có thì thêm mới
        cart.push({ img: img, name: name, price: price, qty: 1 });
    }

    // Lưu lại vào localStorage
    localStorage.setItem('header-item-cart', JSON.stringify(cart));

    // Thông báo đơn giản cho người dùng
    alert('Đã thêm "' + name + '" vào giỏ hàng.');
}