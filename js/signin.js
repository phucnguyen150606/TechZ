function signin(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const identifier = document.getElementById('identifier').value.trim();
    const password = document.getElementById('password').value.trim();
    const user = users.find(u => u.identifier === identifier);
    //kiểm tra tài khoản
    if (!user) {
        alert('Tài khoản không tồn tại!');
        return;
    }
    //kiểm tra mật khẩu
    if (password !== user.pass) {
        alert("Sai mật khẩu!");
        return;
    }
    // Đăng nhập thành công
    alert("Đăng nhập thành công!");
    alert("Chào mừng " + user.identifier + " đến với TechZ");
    window.location.href = "../index.html";
}