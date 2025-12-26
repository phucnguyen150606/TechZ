function signup(event) {
    event.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const identifier = document.getElementById('identifier').value.trim();
    const pass = document.getElementById('password').value.trim();
    const confirm = document.getElementById('confirm_password').value;
    const agree = document.getElementById('agree').checked;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!agree) {
        alert('Vui lòng đồng ý với điều khoản.');
        return;
    }

    if (pass !== confirm) {
        alert('Mật khẩu không khớp.');
        return;
    } else if (pass.length < 6) {
        alert('Mật khầu cần ít nhất 6 ký tự');
        return;
    }

    // Kiểm tra trùng email / số điện thoại
    const existed = users.find(u => u.identifier === identifier);
    if (existed) {
        alert('Tài khoản đã tồn tại!');
        return;
    }

    // Lưu tài khoản mới
    users.push({ name, identifier, pass });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
    window.location.href = 'signin.html';
}