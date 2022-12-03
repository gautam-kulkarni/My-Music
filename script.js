// console.log("My Album")


// Intitialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
// let subplay = document.getElementById('subplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let masterSong = document.getElementById('masterSong')
let songItem = Array.from(document.getElementsByClassName('songItem'))


// audioElement.play()')
//List , path & cover path name
let songs = [
    { songName: " Mood", filePath: "songs/1.mp3", coverPath: "covers/1.png" },
    { songName: " Ahzee King", filePath: "songs/2.mp3", coverPath: "covers/2.png" },
    { songName: " Eastside", filePath: "songs/3.mp3", coverPath: "covers/3.png" },
    { songName: " Love Nwantiti", filePath: "songs/4.mp3", coverPath: "covers/4.png" },
    { songName: " Dandelions", filePath: "songs/5.mp3", coverPath: "covers/5.png" },
    { songName: " Someone that i use to know", filePath: "songs/6.mp3", coverPath: "covers/6.png" },
    { songName: " Perfect", filePath: "songs/7.mp3", coverPath: "covers/7.png" },
    { songName: " Heat Waves", filePath: "songs/8.mp3", coverPath: "covers/8.png" },
    { songName: " Snow man", filePath: "songs/9.mp3", coverPath: "covers/9.png" },
    { songName: " Believer", filePath: "songs/10.mp3", coverPath: "covers/10.png" },
    { songName: " Let Me Love You", filePath: "songs/11.mp3", coverPath: "covers/11.png" },
    { songName: " So Far Away", filePath: "songs/12.mp3", coverPath: "covers/12.png" },
    { songName: " Falling", filePath: "songs/13.mp3", coverPath: "covers/13.png" },
    { songName: " Silence ", filePath: "songs/14.mp3", coverPath: "covers/14.png" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// let audioElement = new Audio('American Authors Best Day Of My Life.mp3');
// audioElement.play()

// Handle play/Pause masterplay Click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterSong.innerText = songs[songIndex].songName
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause()
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }

})

//Listen Event
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')

    //update seekbar
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlays()
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play')
            e.target.classList.add('fa-pause')
            audioElement.src = `songs/${songIndex}.mp3`
            masterSong.innerText = songs[(songIndex-1)].songName
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }
        else {
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            audioElement.pause();
            gif.style.opacity = 0;
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
        }
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 14) {
        songIndex = 0
    }
    else {
        songIndex++
    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSong.innerText = songs[(songIndex-1)].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 14
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSong.innerText = songs[(songIndex-1)].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})


