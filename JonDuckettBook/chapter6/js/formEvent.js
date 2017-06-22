/**
 * Created by DucLe on 6/15/17.
 */
var packages = document.getElementById("listPackage");
var feedbackPackage = document.getElementById("feedbackPackage");
var feedbackTerm = document.getElementById("feedbackTerm");
var termAgree = document.getElementById("termAgree");
var elForm = document.querySelector("form");

function changePackage(event) {
    if (packages.value === "5") {
        feedbackPackage.textContent = "Choose 1 year package to save";
    } else if (packages.value === "50") {
        feedbackPackage.textContent = "Wise choice.";
    }
}

function clickedSubmit(event) {
    if (!termAgree.checked) {
        feedbackTerm.textContent = "You must agree with term and condition.";
        event.preventDefault();
    }
}

packages.addEventListener("change", changePackage, false);
elForm.addEventListener("submit", clickedSubmit, false);