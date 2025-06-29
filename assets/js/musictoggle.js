window.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById('musicBtn');
  const backgroundMusic = document.getElementById('backgroundMusic');

  // Kiểm tra tồn tại
  if (!musicBtn || !backgroundMusic || typeof backgroundMusic.play !== 'function') {
    console.error('Không tìm thấy nút hoặc phần tử audio hợp lệ!');
    return;
  }

  let musicPlaying = true;
  backgroundMusic.volume = 0.2;

  // Cố gắng tự động phát
  backgroundMusic.play().catch(err => {
    console.warn('Autoplay bị chặn:', err.message);
  });

  // Toggle bằng nút
  musicBtn.addEventListener('click', () => {
    if (musicPlaying) {
      backgroundMusic.pause();
      musicPlaying = false;
      musicBtn.textContent = 'Play Music';
    } else {
      backgroundMusic.play().catch(err => {
        console.error('Không thể phát nhạc:', err.message);
      });
      musicPlaying = true;
      musicBtn.textContent = 'Stop Music';
    }
  });
});
