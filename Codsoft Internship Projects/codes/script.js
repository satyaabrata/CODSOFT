

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    sidemenu.style.right = "0px";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Preloader
window.addEventListener('load', function () {
    setTimeout(function () {
        var preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        preloader.style.transition = "loader 1s"
    }, 3000); // 3 seconds
});
