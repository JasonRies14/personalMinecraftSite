const audio = document.getElementById("MAINSONG");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const seekBar = document.getElementById("SEEKBAR");
const header1 = document.getElementById("HEADER1");

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

// Swap icons on play/pause + toggle animation
audio.addEventListener("play", () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
  header1.classList.add("animate-border"); // Start animation
});

audio.addEventListener("pause", () => {
  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
  header1.classList.remove("animate-border"); // Stop animation
});
