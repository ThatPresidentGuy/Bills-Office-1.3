function boldText() {
  document.getElementById('textarea').style = 'font-weight: bold;';
}
function italicText() {
  document.getElementById('textarea').style = 'font-style: italic;';
}function underlineText() {
  document.getElementById('textarea').style = 'text-decoration: underline;';
}
function redText() {
  document.getElementById('textarea').style = 'color: red;';
  var col='red';
}
function orangeText() {
  document.getElementById('textarea').style = 'color: orange;';
  var col='orange';
}
function yellowText() {
  document.getElementById('textarea').style = 'color: yellow;';
  var col='yellow';
}
function greenText() {
  document.getElementById('textarea').style = 'color: green;';
  var col='green';
}
function blueText() {
  document.getElementById('textarea').style = 'color: blue;';
  var col='blue';
}
function purpleText() {
  document.getElementById('textarea').style = 'color: purple;';
  var col='purple';
}
function blackText() {
  document.getElementById('textarea').style = 'color: black;';
  var col='black';
}

function arialFont() {
  document.getElementById('textarea').style = "font-family: 'Arial';";
}
function newromanFont() {
  document.getElementById('textarea').style = "font-family: Times New Roman, serif;";
}
function garamondFont() {
  document.getElementById('textarea').style = "font-family: Garamond, serif;";
}
function courierFont() {
  document.getElementById('textarea').style = "font-family: Courier New, serif;";
}

function Magic() {
  document.getElementById('bill').src = "abraham-lincoln-but-hes-weird.jpg";
}

function fontsizeEight() {
  document.getElementById('textarea').style = "font-size: 8px;";
}
function fontsizeTwelve() {
  document.getElementById('textarea').style = "font-size: 12px;";
}
function fontsizeSixteen() {
  document.getElementById('textarea').style = "font-size: 16px;";
}
function fontsizeTwenty() {
  document.getElementById('textarea').style = "font-size: 20px;";
}
function settings() {
  var x = document.getElementById("settings");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  function spellcheckTrue() {
	document.getElementById('textarea').spellcheck = "true";
}
  function spellcheckFalse() {
	document.getElementById('textarea').spellcheck = "false";
}