const music = document.getElementById("bgMusic");
let musicPlaying = false;
let scale = 1;

function hideAll() {
    document.getElementById("layer1").classList.add("hidden");
    document.getElementById("layer2").classList.add("hidden");
    document.getElementById("layer3").classList.add("hidden");
}

function toLayer2() {
    playMusic();
    hideAll();
    document.getElementById("layer2").classList.remove("hidden");
}

function toLayer3() {
    hideAll();
    document.getElementById("layer3").classList.remove("hidden");
}

function backToLayer1() {
    hideAll();
    document.getElementById("layer1").classList.remove("hidden");
}

function backToLayer2() {
    hideAll();
    document.getElementById("layer2").classList.remove("hidden");
}

function growLove() {
    scale += 0.2;
    document.querySelector(".love").style.transform = `scale(${scale})`;
}

/* MUSIC */
function playMusic() {
    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    }
}

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
