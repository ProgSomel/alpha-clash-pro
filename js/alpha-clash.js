// function playNow() {
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyBoardButtonPressed(event) {
  const playerPressedKey = event.key;

//!   stop the game if Player Press Escape 
if(playerPressedKey === 'Escape') {
    gameOver();
}

  //   get The Expected Key to Press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  //?  check if Alphabet Matched or Not
  if (playerPressedKey === expectedAlphabet) {
    const currentScore = getTextElementvaluebyId("score");
    const newScore = currentScore + 1;

    setElementvalueById("score", newScore);
    removeBackgroundColor(expectedAlphabet);
    continueGame();



  } else {
    const currentLife = getTextElementvaluebyId('life');
    const newLife = currentLife - 1;
    setElementvalueById("life", newLife);

    if(newLife === 0) {
        gameOver();

    }
  }
}


//?cdftthyjykkyuk capture Keyboard Key Pressed
document.addEventListener("keyup", handleKeyBoardButtonPressed);

function continueGame() {
  //! Generate Random Alphabet
  const alphabet = getARandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //! Set background Color
  setBackgroundColor(alphabet);
}

function playNow() {
  hideElementById("home");
  hideElementById('score-screen');
  showElementById("play-ground");

  setElementvalueById('life', 5);
  setElementvalueById('score', 0);

  continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score-screen');

    //! update Final Score 
    const finalScore = document.getElementById('score').innerText;
    document.getElementById('final-score').innerText = finalScore;
    
    const currentAlphabet = getTextElementTextvaluebyId('current-alphabet');
    removeBackgroundColor(currentAlphabet);




}