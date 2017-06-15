/**
 * Created by DucLe on 6/13/17.
 */
var sx = document.getElementById("sx");
var sy = document.getElementById("sy");
var px = document.getElementById("px");
var py = document.getElementById("py");
var cx = document.getElementById("cx");
var cy = document.getElementById("cy");

function updatePosition(e) {
    sx.value = e.screenX;
    sy.value = e.screenY;
    px.value = e.pageX;
    py.value = e.pageY;
    cx.value = e.clientX;
    cy.value = e.clientY;
}

var body = document.querySelector("body");
body.addEventListener("mousemove", updatePosition, false);
