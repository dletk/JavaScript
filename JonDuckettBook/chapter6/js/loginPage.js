/**
 * Created by DucLe on 6/13/17.
 */

var userNameField = document.getElementById("userName");
var passWordField = document.getElementById("password");
var userNameFeedback = document.getElementById("feedback");
var passFeedback = document.getElementById("feedbackPassword");

function checkLength(e) {
    if (e.target === userNameField) {
        if (userNameField.value.length < 8) {
            userNameFeedback.className = "warning";
            userNameFeedback.textContent = "Not long enough yet...";
        }
    } else if (e.target === passWordField) {
    }
}

function tip(e) {
    if (e.target === userNameField) {
        userNameFeedback.className = "tip";
        userNameFeedback.textContent = "Username must be 8 or more characters long."
    }
}

//Check the length of username
userNameField.addEventListener("blur", checkLength, false);
// Bring up the tip for naming username
userNameField.addEventListener("focus", tip, false);
// Focus to the username field directly when the page is loaded
window.addEventListener("load", function (e) {
    userNameField.focus();
});