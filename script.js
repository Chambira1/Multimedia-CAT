document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("wildlife-video");
    const actionBtn = document.getElementById("video-action-btn");

    actionBtn.addEventListener("click", () => {
        if (video.paused) {
            
            video.play();
            video.style.display = "block"; 
        } else {
            video.pause();
            video.style.display = "none";
        }
    });
});