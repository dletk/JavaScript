var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

btn.addEventListener("click", buttonClicked);
thumbBar.addEventListener("click", changePictureDisplayed);

/* Looping through images */
for (var i = 1; i<=5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

function buttonClicked(e) {
    var title = e.target.textContent;
    if (title === "Darken") {
        e.target.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        e.target.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

function changePictureDisplayed(e) {
    displayedImage.setAttribute("src", Object(e.target).getAttribute("src"));
}