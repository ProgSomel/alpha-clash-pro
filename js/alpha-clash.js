// function playNow() {
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function playNow() {
    hideElementById('home');
    showElementById('play-ground');

}