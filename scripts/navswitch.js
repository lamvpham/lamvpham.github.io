
var workNav = document.getElementById('work');
var workContent = document.getElementById('workcontent');
var aboutNav = document.getElementById('about');
var aboutContent = document.getElementById('aboutcontent');

if (window.location.hash === '#about') {
    showAbout();
} else {
    aboutContent.style.display = 'none';
}

workNav.addEventListener("click", showWork);
aboutNav.addEventListener("click", showAbout);


function showAbout() {
    workContent.style.display = 'none';
    aboutContent.style.display = 'block';

    aboutNav.classList.add("italics");
    aboutNav.classList.add("underline");
    aboutNav.classList.remove("highlight");
    aboutNav.classList.remove("texthover");
    aboutNav.classList.add("glowing");

    workNav.classList.add("highlight");
    workNav.classList.add("texthover");
    workNav.classList.remove("italics");
    workNav.classList.remove("underline");
    workNav.classList.remove("glowing");
}

function showWork() {
    workContent.style.display = 'block';
    aboutContent.style.display = 'none';

    if (window.location.hash === '#about') {
        history.replaceState({}, document.title, window.location.pathname);
    }

    workNav.classList.add("italics");
    workNav.classList.add("underline");
    workNav.classList.remove("highlight");
    workNav.classList.remove("texthover");
    workNav.classList.add("glowing");

    aboutNav.classList.add("highlight");
    aboutNav.classList.add("texthover");
    aboutNav.classList.remove("italics");
    aboutNav.classList.remove("underline");
    aboutNav.classList.remove("glowing");
}
