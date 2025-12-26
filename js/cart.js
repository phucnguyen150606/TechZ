const cart = JSON.parse(localStorage.getItem('cart'));

const item = cart[0];
const cartItems = document.getElementById('cart-items');

const qty = item.qty;
const price = item.price;
const total = qty * price;

cartItems.querySelector("img").src = item.image;
cartItems.querySelector(".cart-name").innerText = item.name;
cartItems.querySelector(".cart-price").innerText = price.toLocaleString('vi-VN') + ' đ';
cartItems.querySelector(".cart-qty").innerText = qty;
cartItems.querySelector(".cart-total").innerText = total.toLocaleString('vi-VN') + ' đ';

document.getElementById('total-items').innerText = qty;
document.getElementById('total-price').innerText = total.toLocaleString('vi-VN') + ' đ';

function payment() {
    const btn = document.getElementsByClassName('checkout-btn');
    if (btn) {
        alert("Thanh toán thành công.");
        localStorage.removeItem('cart');

        window.location.href = '../index.html';
    }
}