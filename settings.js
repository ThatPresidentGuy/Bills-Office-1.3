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