function reloadStream() {
    const img = document.getElementById("videoStream");
    img.src = "/video?" + new Date().getTime();
}

function fullscreen() {
    const img = document.getElementById("videoStream");
    if (img.requestFullscreen) {
        img.requestFullscreen();
    }
}