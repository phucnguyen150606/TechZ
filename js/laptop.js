function sort() {
    const input = document.getElementById("search").value.toLowerCase();;
    const items = document.querySelectorAll(".product-card");

    items.forEach(function(item) {
        const text = items.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}