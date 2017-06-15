/**
 * Created by DucLe on 3/19/17.
 */
function createParagraph() {
    var para = document.createElement("p");
    para.textContent = "You have just clicked the button!";
    document.body.appendChild(para);
}

var buttonsOnScreen = document.querySelectorAll("button");

for (var i = 0; i < buttonsOnScreen.length; i++) {
    buttonsOnScreen[i].addEventListener("click", createParagraph);
}