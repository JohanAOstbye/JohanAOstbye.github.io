/**
 * Created by johan on 12/11/2017.
 */
var small = document.getElementById("smallWeather");
var big = document.getElementById("bigWeather");
small.style.display = "none";

function checkYr() {
    console.log(window.innerWidth);
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth >= 860) {
        console.log("over");
        small.style.display = "none";
        big.style.display = "initial";
    }
    else {
        console.log("under");
        big.style.display = "none";
        small.style.display = "initial";
    }
}
checkYr();