const audio = document.getElementById("MAINSONG");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const seekBar = document.getElementById("SEEKBAR");

// Hide default controls
audio.controls = false;

// Toggle play / pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Swap icons on play/pause
audio.addEventListener("play", () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
});

audio.addEventListener("pause", () => {
  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

// Allow scrubbing
seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});
