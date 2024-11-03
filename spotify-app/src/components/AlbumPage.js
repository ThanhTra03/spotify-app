import React, { useEffect, useState } from 'react';
import { fetchAlbum } from '../api/spotifyApi'; // Đảm bảo đường dẫn đúng
import AlbumDetails from './AlbumDetails';

const AlbumPage = () => {
  const [album, setAlbum] = useState(null);
  const albumID = '4faMbTZifuYsBllYHZsFKJ'; // ID album bạn muốn lấy

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const albumData = await fetchAlbum(albumID);
        setAlbum(albumData);
      } catch (error) {
        console.error('Error fetching album:', error);
      }
    };
    getAlbum();
  }, [albumID]);

  return (
    <div>
      {album ? <AlbumDetails album={album} /> : <p>Loading...</p>}
    </div>
  );
};

export default AlbumPage;