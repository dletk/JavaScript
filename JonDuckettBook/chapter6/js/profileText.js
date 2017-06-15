/**
 * Created by DucLe on 6/15/17.
 */
var profileTextarea = document.getElementById("profile");
var wordCount = document.getElementById("wordCount");
var keyCode = document.getElementById("keyCode");

function countWord(e) {
    if (profileTextarea.value.length >= 180) {
        alert("Max 180 characters.");
    } else {
        wordCount.textContent = 180 - profileTextarea.value.length;
    }
}

function displayKeyCode(e) {
    keyCode.textContent = "Last key in ASCII code: "+e.keyCode;
}

profileTextarea.addEventListener("keyup", countWord, false);
profileTextarea.addEventListener("keyup", displayKeyCode, false);