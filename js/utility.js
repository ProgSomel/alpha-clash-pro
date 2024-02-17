function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getTextElementvaluebyId(elementId) {
  const element = document.getElementById(elementId);
  const valueText = element.innerText;
  const value = parseInt(valueText);
  return value;
}

function setElementvalueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const randomAlphabet = alphabets[index];
  return randomAlphabet;
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementTextvaluebyId(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
