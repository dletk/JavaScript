/**
 * Created by DucLe on 3/20/17.
 */
var customName = document.getElementById("customname");
var uk = document.getElementById("uk");
var randomButton = document.querySelector(".randomize");
var theHTML = document.querySelector("html");

theHTML.addEventListener("mouseenter", function () {
    alert("Mouse just entered the screen");
});

var paraStory = document.querySelector(".story");

var theStory = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var theXInsert = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var theYInsert = ["the soup kitchen", "Disneyland", "the White House"];
var theZInsert = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

var name = "";
randomButton.addEventListener("click", generateNewStory);


function checkForName() {
    if (customName.value !== "") {
        name = customName.value;
    }
}

function generateNewStory() {
    var newStory = theStory;
    checkForName();
    if (name !== "") {
        newStory = newStory.replace("Bob", name);
    }
    if (uk.checked) {
        newStory = newStory.replace("94 farenheit", "34 centigrade");
        newStory = newStory.replace("300 pounds", "21 stone");
    }
    newStory = newStory.replace(/:insertx:/g, randomValueFromArray(theXInsert));
    newStory = newStory.replace(/:inserty:/g, randomValueFromArray(theYInsert));
    newStory = newStory.replace(/:insertz:/g, randomValueFromArray(theZInsert));

    paraStory.textContent = newStory;
    paraStory.style.visibility = "visible";
}

function randomValueFromArray(anArray) {
    return anArray[Math.floor(Math.random()*anArray.length)];
}

