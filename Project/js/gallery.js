/**
 * Created by johan on 09/11/2017.
 */
var imgGallery = document.getElementById("img_gallery");
var imgIndex = 0;
var year = "alle";

function updateYear(evt) {
    year = evt;
}


images = [
    ["img/seil2.jpg", "2017", "En annen seilbåt i røft hav"],
    ["img/seil3.jpg", "2017", "Seilbåt som sailer inn i solnedgangen"],
    ["img/seil4.jpg", "2016", "En regatta med flere seilbåter"],
    ["img/seil5.jpg", "2016", "Liten seilbåt som seiler i motvind"],
    ["img/seil6.jpg", "2016", "Seilbåt i røft hav"],
    ["img/seil7.jpg", "2015", "Noen som lærer seg å seile"],
    ["img/seil8.jpg", "2015", "Seilbåt i motvind"],
    ["img/seil9.jpg", "2015", "Regatta med kraftig side vind"]
];

function nextImg(value) {
    imgIndex += value;
    if (imgIndex == -1) {
        imgIndex = images.length - 1
    }
    imgIndex = imgIndex % images.length;

    while (images[imgIndex][1] != year && year != "alle") {
        imgIndex += value;
        if (imgIndex == -1) {
            imgIndex = images.length - 1
        }
        imgIndex = imgIndex % images.length;
    }
    displayImg(images[imgIndex][0], images[imgIndex][2]);
}

function displayImg(src, alt) {
    imgGallery.src = src;
    imgGallery.alt = alt;
}