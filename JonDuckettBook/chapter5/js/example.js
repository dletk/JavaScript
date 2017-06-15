/**
 * Created by DucLe on 6/6/17.
 */
var theList = document.querySelectorAll("li");

function changeMode() {
    for (var i = 0; i < theList.length; i++) {
        if (theList[i].className === "cool") {
            theList[i].className = "hot";
        } else {
            theList[i].className = "cool";
        }
    }
}

var newItem = document.createElement("li");

newItem.className = "cool";
newItem.textContent = "This is new item";

listItems = document.querySelectorAll("ul")[0];
listItems.appendChild(newItem);

listItems = document.querySelectorAll("li");
var heading = document.querySelector("h2");
var headingContent = heading.textContent;

var newHeadingContent = headingContent + "<span>" + listItems.length + "</span>";

heading.innerHTML = newHeadingContent;

function changeItemName(e, newName) {
    if (e.target === theList[0]) {
        e.target.textContent = newName;
    } else if (e.target === theList[2]) {
        e.target.textContent = newName;
    } else if (e.target === theList[3]) {
        e.target.textContent = newName;
    }
}

function itemDone(e) {
    var parent = e.target.parentNode;
    if (e.target === theList[0] || e.target === theList[1] || e.target === theList[2]) {
        parent.removeChild(e.target);
    }
}

var listParents = document.querySelector("ul");
listParents.addEventListener("click", function (e) {
    // changeItemName(e, "Duc Le");
    itemDone(e);
}, false);

