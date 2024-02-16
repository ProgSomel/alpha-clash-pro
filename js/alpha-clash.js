// function playNow() {
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continueGame() {
    // Generate Random Alphabet 
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
}

function playNow() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();

}