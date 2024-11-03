import { createPlaylist } from '../api/spotifyApi';

// Ví dụ về cách sử dụng
const handleCreatePlaylist = async () => {
  const token = await getToken(); // Lấy token
  const userId = 'your_user_id'; // Thay thế bằng user ID của bạn
  const newPlaylist = await createPlaylist(userId, token);
  console.log('Created Playlist:', newPlaylist);
};