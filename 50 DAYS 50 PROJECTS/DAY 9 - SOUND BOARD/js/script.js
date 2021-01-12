// create array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// Add button for each sound and add evenlistener to them
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })
    // Adding sound buttons inside buttons container
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}