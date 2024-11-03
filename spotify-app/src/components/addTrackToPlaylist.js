const handleAddTracks = async () => {
    const token = await getToken(); // Lấy token
    const playlistId = 'your_playlist_id'; // ID của playlist mà bạn muốn thêm track vào
    const trackUris = ['spotify:track:your_track_id']; // Thay thế bằng URIs của track bạn muốn thêm
    await addTracksToPlaylist(playlistId, trackUris, token);
    console.log('Tracks added to playlist');
  };