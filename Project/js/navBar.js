/*
FILE NAME: navBar.js
WRITTEN BY: Johan August Bye
WHEN: 29 October 2017
PURPOSE: Universal navbar for our webpages

Endringer: Added yr widget
*/

var navBar = document.getElementById("navBar");
navBar.innerHTML = "  <a href='homepage.html'>Hjem</a><a href='gallery.html'>Bilder</a><a href='weather.html'>Været</a><a href='events.html'>Arrangement</a><a href='reservations.html'>Reservasjoner</a><a href='about.html'>Om oss</a><a href='javascript:void(0);' style='font-size:15px;' class='icon' onclick='responsive()'>&#9776;</a>";
navBar.className = "topnav";

function responsive() {
    if (navBar.className === "topnav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "topnav";
    }
}