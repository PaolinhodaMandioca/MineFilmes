document.addEventListener("DOMContentLoaded", function () {
    const player = videojs("my-video");
    const cinemaBtn = document.getElementById("cinema-btn");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
  
    // Modo Cinema
    cinemaBtn.addEventListener("click", () => {
      document.body.classList.toggle("cinema-mode");
    });
  
    // Tela Cheia
    fullscreenBtn.addEventListener("click", () => {
      player.requestFullscreen();
    });
  
    // Atalho: Tecla F ativa fullscreen
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "f") {
        player.requestFullscreen();
      }
    });
  });
  