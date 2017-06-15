/**
 * Created by DucLe on 4/10/17.
 */
var today = new Date();
var hourNow = today.getHours();
var messageGreeting;

if (hourNow > 18) {
    messageGreeting = "Good evening, sir!";
} else if (hourNow > 12) {
    messageGreeting = "Good afternoon, sir!";
} else if (hourNow > 0) {
    messageGreeting = "Good morning, sir!";
} else {
    messageGreeting = "Welcome, sir!"
}

document.write("<h3>" + messageGreeting + "</h3>");