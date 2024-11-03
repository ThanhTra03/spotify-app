// src/App.js
import React, { useState } from 'react';
import AlbumList from './components/AlbumList';
import LoginModal from './components/LoginModal'; // Component modal đăng nhập

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái để theo dõi người dùng đã đăng nhập hay chưa

  const handleLogin = () => {
    setIsLoggedIn(true); // Đặt trạng thái là đã đăng nhập sau khi người dùng login
  };
  
  return (
    <div>
      {/* Hiển thị modal đăng nhập nếu chưa đăng nhập */}
      {!isLoggedIn && <LoginModal onLogin={handleLogin} />}

      {/* Hiển thị nội dung chính khi người dùng đã đăng nhập */}
      {isLoggedIn && (
        <div>
          <AlbumList /> {/* Đây là component hiển thị danh sách album */}
        </div>
      )}
    </div>
  );
};

export default App;