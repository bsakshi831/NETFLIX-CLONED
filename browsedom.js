var video = document.getElementById('video1');
var overlay = document.getElementById('over');

// console.log(video);
// console.log(overlay);

var vid_list =document.getElementsByClassName('vplay');

// console.log(vid_list);

for(var i=0;i<vid_list.length;i++){
    vid_list[i].addEventListener('click',playVideo);
}

function playVideo(e){
    

    video.style.display="block";
    overlay.style.display="block";

    overlay.addEventListener('click',endVideo);
}

function endVideo(e){
    video.style.display="none";
    overlay.style.display="none";
}