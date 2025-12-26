function signup(event) {
    event.preventDefault();
    const identifier = document.getElementById('identifier').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();
    const confirm = document.getElementById('confirm_password').value;
    const agree = document.getElementById('agree').checked;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const check = "@gmail.com";
    if (!agree) {
        alert('Vui lòng đồng ý với điều khoản.');
        return;
    }
    // Kiểm tra trùng email / số điện thoại
    const existed = users.find(u => u.identifier === identifier);
    if (existed) {
        alert('Email hoặc tài khoản đã tồn tại!');
        return;
    }
    if (!email.includes(check)) {
        alert("Email không hợp lệ!");
        return;
    }
    if (pass !== confirm) {
        alert('Mật khẩu không khớp.');
        return;
    } else if (pass.length < 6) {
        alert('Mật khầu cần ít nhất 6 ký tự');
        return;
    }

    // Lưu tài khoản mới
    users.push({ identifier, email, pass });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
    window.location.href = 'signin.html';
}