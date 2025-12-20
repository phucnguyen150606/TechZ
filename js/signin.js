function signin(event) {
    event.preventDefault();

    const pass = document.getElementById("password").value;

    if (pass.length < 6) {
        alert("mật khầu cần ít nhất 6 ký tự");
    } else window.location.href = "../index.html";
}