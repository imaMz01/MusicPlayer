let progress = document.getElementById("progress")
let song = document.getElementById("song")
let controlIcon = document.getElementById("controlIcon")
song.onloadedmetadata=function(){
    progress.max=song.duration
    progress.value=song.currentTime
}
function playPause() {
    if(controlIcon.classList.contains("bi-pause-fill")){
        song.pause()
        controlIcon.classList.remove("bi-pause-fill")
        controlIcon.classList.add("bi-play-fill")
    }else{
        song.play()
        controlIcon.classList.add("bi-pause-fill")
        controlIcon.classList.remove("bi-play-fill")
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500)
}
progress.onchange=function () {
    song.play()
    song.currentTime = progress.value
    controlIcon.classList.add("bi-pause-fill")
        controlIcon.classList.remove("bi-play-fill")
}