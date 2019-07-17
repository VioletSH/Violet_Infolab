var marker = document.querySelector('a-marker')
var model = marker.lastElementChild
var audio = document.querySelector('audio')
audio.addEventListener('loadedmetadata', function () {
    model.setAttribute('duration', audio.duration);
    console.log('Audio Duration', audio.duration)
}, false);

audio.pause()
marker.addEventListener('markerFound', () => {
    model.play()
    audio.play()
})

marker.addEventListener('markerLost', () => {
    model.pause()
    audio.pause()
})

model.addEventListener('animation-loop', (e) => {
    audio.currentTime = 0
})