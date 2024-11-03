import React, { useEffect, useState } from 'react';
import { fetchAlbum } from '../api/spotifyApi';
import './Album.css'; // Import file CSS cho Album

const Album = ({ albumID, currentTrack, setCurrentTrack }) => {
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null); // Để theo dõi track đang phát trong album này

  useEffect(() => {
    const getAlbumData = async () => {
      try {
        const data = await fetchAlbum(albumID);
        setAlbum(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getAlbumData();
  }, [albumID]);

  useEffect(() => {
    if (currentTrack !== playingTrack && playingTrack) {
      // Nếu có bản nhạc khác đang phát, dừng track hiện tại
      playingTrack.pause();
      setPlayingTrack(null);
    }
  }, [currentTrack, playingTrack]);

  const playTrack = (track) => {
    if (currentTrack) {
      currentTrack.pause(); // Dừng track đang phát ở album khác nếu có
    }

    if (playingTrack && playingTrack.src === track.preview_url) {
      // Nếu track hiện tại đang phát, dừng nó
      playingTrack.pause();
      setPlayingTrack(null);
      setCurrentTrack(null); // Reset track toàn cục
    } else {
      // Nếu track mới được chọn, phát nó
      const newAudio = new Audio(track.preview_url);
      newAudio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
      setPlayingTrack(newAudio); // Lưu đối tượng audio hiện tại
      setCurrentTrack(newAudio); // Cập nhật track toàn cục
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching album: {error.message}</div>;
  }

  return (
    <div className="album-container">
      <div className="album-header">
        <img src={album.images[0].url} alt={album.name} className="album-image" />
        <div className="album-info">
          <h2>{album.name}</h2>
          <p>Artist: {album.artists.map(artist => artist.name).join(', ')}</p>
          <p>Release Date: {album.release_date}</p>
          <p>Total Tracks: {album.total_tracks}</p>
        </div>
      </div>
      <h3>Tracks:</h3>
      <ul className="track-list">
        {album.tracks.items.map(track => (
          <li key={track.id} className="track-item">
            {track.name}
            <button onClick={() => playTrack(track)}>
              {playingTrack && playingTrack.src === track.preview_url ? 'Pause' : 'Preview'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Album;