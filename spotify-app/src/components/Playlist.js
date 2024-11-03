// src/components/Playlist.js
import React, { useEffect, useState } from 'react';
import { fetchPlaylist } from '../api/spotifyApi'; // Cập nhật tên hàm thành fetchPlaylist

const Playlist = ({ playlistID }) => {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const data = await fetchPlaylist(playlistID); // Lấy dữ liệu playlist
        setPlaylist(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPlaylistData();
  }, [playlistID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching playlist: {error.message}</div>;
  }

  return (
    <div>
      <h2>{playlist.name}</h2>
      <img src={playlist.images[0].url} alt={playlist.name} style={{ width: '200px' }} />
      <p>Description: {playlist.description}</p>
      <h3>Tracks:</h3>
      <ul>
        {playlist.tracks.items.map((track) => (
          <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;