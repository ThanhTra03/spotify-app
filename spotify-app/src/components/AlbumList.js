import React, { useState } from 'react';
import Album from './Album';

const AlbumList = () => {
  const albumIDs = ['4faMbTZifuYsBllYHZsFKJ', '03ZYR4zwCrkSsXTROnK2d0', '3pprs1r3mH3UhU23TUHBWJ', '1vi1WySkgPGkbR8NnQzlXu','40Z8f0FLhVboUdBqnlHiJp']; // Thêm album ID ở đây
  const [currentTrack, setCurrentTrack] = useState(null); // Lưu bài hát hiện tại để dừng khi cần

  return (
    <div>
      <h1 style={{
            textAlign: 'center', // Căn giữa tiêu đề
            fontSize: '3rem', // Kích thước chữ
            background: 'linear-gradient(to right, #6a11cb, #2575fc, #cc2b5e, #753a88)', // Màu gradient galaxy
            color: 'white', // Làm cho màu nền không hiển thị
            margin: '20px 0' // Thêm khoảng cách trên và dưới tiêu đề
            }}>
            Spotify Preview
        </h1>

      {albumIDs.map(albumID => (
        <Album key={albumID} albumID={albumID} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
      ))}
    </div>
  );
};

export default AlbumList;