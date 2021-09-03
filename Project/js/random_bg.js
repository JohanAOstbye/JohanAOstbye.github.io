/*
FILE NAME: random_bg.js
WRITTEN BY: Simen Vevik
WHEN: October 2017
PURPOSE: Changing the background image for homepage.html every 4 seconds
*/

let list = ["homeBody1", "homeBody2", "homeBody3","homeBody4"];
var i = 1;

function ChangeBackground1 () {
  document.getElementById('homeBody').className = list[i];
  i = (i+1) % (list.length);
}

window.setInterval(ChangeBackground1, 4000);
