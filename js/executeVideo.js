//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('Video Played');

    //Video area products
    setTimeout(function(){
        video.style.opacity = '100%';
    }, 1000);

    setTimeout(function(){
        var video = document.getElementById('video');
        video.disableRemotePlayback = true;
        video.autoplay = true;
        video.muted = true;
        video.play();
    }, 1200);
});