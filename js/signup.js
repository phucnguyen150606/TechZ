function signup(event) {
    event.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const identifier = document.getElementById('identifier').value.trim();
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirm_password').value;
    const agree = document.getElementById('agree').checked;

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

    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
    window.location.href = 'signin.html';
}