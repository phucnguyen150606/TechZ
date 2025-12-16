const btnOpen = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".close-menu");
const sidebar = document.querySelector(".category-menu");

btnOpen.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
btnClose.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});