const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cart-items');
const cloneItem = cartItems.querySelector('tr');
let totalQty = 0;
let totalPrice = 0;
cart.forEach(item => {
    const qty = item.qty;
    const price = item.price;
    const total = qty * price;

    totalQty += qty;
    totalPrice += total;

    const clone = cloneItem.cloneNode(true);
    clone.style.display = 'table-row';
    clone.querySelector("img").src = item.image;
    clone.querySelector(".cart-name").innerText = item.name;
    clone.querySelector(".cart-price").innerText = price.toLocaleString('vi-VN') + ' đ';
    clone.querySelector(".cart-qty").innerText = qty;
    clone.querySelector(".cart-total").innerText = total.toLocaleString('vi-VN') + ' đ';

    cartItems.appendChild(clone);
});
document.getElementById('total-items').innerText = totalQty;
document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN') + ' đ';

function payment() {
    const btn = document.getElementsByClassName('payment-btn');
    if (btn) {
        alert("Thanh toán thành công.");
        localStorage.removeItem('cart');

        window.location.href = '../index.html';
    }
}