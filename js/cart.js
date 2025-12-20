// Render cart page from localStorage 'cart'
function loadCart() {
    try { return JSON.parse(localStorage.getItem('cart')) || []; }
    catch(e) { return []; }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function formatCurrency(num) {
    if (isNaN(num)) return '0 đ';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
}

function renderCart() {
    const cart = loadCart();
    const tbody = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-cart-message');
    tbody.innerHTML = '';
    if (!cart || cart.length === 0) {
        emptyMessage.style.display = 'block';
        document.getElementById('total-items').textContent = '0';
        document.getElementById('subtotal').textContent = '0 đ';
        document.getElementById('total-price').textContent = '0 đ';
        return;
    }
    emptyMessage.style.display = 'none';

    cart.forEach((item, idx) => {
        const tr = document.createElement('tr');

        const tdProduct = document.createElement('td');
        tdProduct.innerHTML = `
            <div style="display:flex;gap:10px;align-items:center;">
                <img src="${item.img || ''}" style="width:80px;height:60px;object-fit:contain;"/>
                <div>${item.name}</div>
            </div>`;

        const tdPrice = document.createElement('td');
        tdPrice.textContent = formatCurrency(item.price || 0);

        const tdQty = document.createElement('td');
        tdQty.innerHTML = `<button class="qty-decrease">-</button>
            <span class="qty-count">${item.qty || 1}</span>
            <button class="qty-increase">+</button>
            <button class="remove-item" style="margin-left:8px;color:#c00">Xóa</button>`;

        const tdTotal = document.createElement('td');
        tdTotal.textContent = formatCurrency((item.price || 0) * (item.qty || 1));

        tr.appendChild(tdProduct);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQty);
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);

        // events
        tdQty.querySelector('.qty-increase').addEventListener('click', () => {
            cart[idx].qty = (cart[idx].qty || 1) + 1;
            saveCart(cart); renderCart();
        });
        tdQty.querySelector('.qty-decrease').addEventListener('click', () => {
            cart[idx].qty = Math.max(1, (cart[idx].qty || 1) - 1);
            saveCart(cart); renderCart();
        });
        tdQty.querySelector('.remove-item').addEventListener('click', () => {
            cart.splice(idx,1); saveCart(cart); renderCart();
        });
    });

    updateTotals();
}

function updateTotals() {
    const cart = loadCart();
    const totalItems = cart.reduce((s,i) => s + (i.qty || 0), 0);
    const subtotal = cart.reduce((s,i) => s + ((i.price || 0) * (i.qty || 0)), 0);
    const shipping = 0;
    const total = subtotal + shipping;

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('shipping').textContent = formatCurrency(shipping);
    document.getElementById('total-price').textContent = formatCurrency(total);

    // also update header cart count if present
    if (window.parent) {
        try { parent.updateCartCount && parent.updateCartCount(); } catch(e) {}
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
