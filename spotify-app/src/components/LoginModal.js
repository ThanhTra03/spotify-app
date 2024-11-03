import React, { useState } from 'react';
import './LoginModal.css'; // Import file CSS cho modal

const LoginModal = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // Trạng thái để kiểm tra email hợp lệ
  const [isModalVisible, setIsModalVisible] = useState(true); // Trạng thái để điều khiển modal

  // Hàm kiểm tra tính hợp lệ của email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Kiểm tra email hợp lệ
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    // Nếu hợp lệ, gọi hàm onLogin từ prop để thông báo rằng người dùng đã đăng nhập
    onLogin();

    // Đóng modal với animation
    setIsModalVisible(false);
  };

  return (
    <div className={`overlay ${isModalVisible ? 'active' : ''}`}>
      <div className={`modal ${isModalVisible ? 'fade-in' : 'fade-out'}`}>
        <form onSubmit={handleLogin}>
          <h2 className='h2-login'>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(true); // Reset lại trạng thái khi người dùng gõ email mới
              }}
              required
              className={!isValidEmail ? 'invalid' : ''}
            />
            {!isValidEmail && <p className="error-text">Please enter a valid email.</p>}
          </div>
          <button className='buttonModal' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;