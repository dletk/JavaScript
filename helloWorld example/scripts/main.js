/**
 * Created by DucLe on 3/18/17.
 */

var myHeading = document.querySelector("h1");
// var myButton = document.querySelector("button");

myHeading.onclick = function () {
    alert("Hey are you clicking on the header?");
};

// myButton.onclick = function () {
//     setUserName();
// };

// var changeHeading = false;
//
// if (changeHeading) {
//     myHeading.textContent = "Hello, anh Duc";
// } else {
//     myHeading.textContent = "The heading is unchanged";
// }

function multiply(num1, num2) {
    var result = num1*num2;
    alert("Result is: "+result);
    return result;
}

var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

function setUserName() {
    var myName = prompt("Please enter your name:");
    localStorage.setItem("name", myName);
    alert(myName);
    myHeading.textContent = "Have a nice day, " + myName;
}

if (localStorage.getItem("name") === null) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Have a nice day, " + storedName;
}


    var locationButton = document.getElementById("loca");
    locationButton.onclick = function () {
        navigator.geolocation.getCurrentPosition(function (pos) {
            alert("Got location " + pos.latitude + " lat and " + pos.longitude +" long");
        });
    };

