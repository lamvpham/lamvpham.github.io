var workNav = document.getElementById('work');
var workContent = document.getElementById('workcontent');
var aboutNav = document.getElementById('about');
var aboutContent = document.getElementById('aboutcontent');
var proseNav = document.getElementById('prose');
var proseContent = document.getElementById('prosecontent');

// script for url hash changes
function hideAllContent() {
    workContent.style.display = 'none';
    aboutContent.style.display = 'none';
    proseContent.style.display = 'none';
}

function handleHashChange() {
    var hash = window.location.hash;

    hideAllContent();

    if (hash === '#about') {
        showAbout();
    } else if (hash === '#prose') {
        showProse();
    } else {
        showWork();
    }
}

window.addEventListener('hashchange', handleHashChange);
handleHashChange();


// showing and hiding content
workNav.addEventListener("click", showWork);
aboutNav.addEventListener("click", showAbout);
proseNav.addEventListener("click", showProse);


function showProse() {
    workContent.style.display = 'none';
    aboutContent.style.display = 'none';
    proseContent.style.display = 'block';

    if (window.location.hash === '#about') {
        history.pushState({}, document.title, window.location.pathname);
    }

    proseNav.classList.add("italics");
    proseNav.classList.add("underline");
    proseNav.classList.remove("highlight");
    proseNav.classList.remove("texthover");
    proseNav.classList.add("glowing");

    aboutNav.classList.add("highlight");
    aboutNav.classList.add("texthover");
    aboutNav.classList.remove("italics");
    aboutNav.classList.remove("underline");
    aboutNav.classList.remove("glowing");

    workNav.classList.add("highlight");
    workNav.classList.add("texthover");
    workNav.classList.remove("italics");
    workNav.classList.remove("underline");
    workNav.classList.remove("glowing");
}

function showAbout() {
    workContent.style.display = 'none';
    aboutContent.style.display = 'block';
    proseContent.style.display = 'none';

    if (window.location.hash === '#prose') {
        history.pushState({}, document.title, window.location.pathname);
    }

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

    proseNav.classList.add("highlight");
    proseNav.classList.add("texthover");
    proseNav.classList.remove("italics");
    proseNav.classList.remove("underline");
    proseNav.classList.remove("glowing");
}

function showWork() {
    workContent.style.display = 'block';
    aboutContent.style.display = 'none';
    proseContent.style.display = 'none'

    if (window.location.hash === '#about') {
        history.pushState({}, document.title, window.location.pathname);
    }

    else if (window.location.hash === '#prose') {
        history.pushState({}, document.title, window.location.pathname);
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

    proseNav.classList.add("highlight");
    proseNav.classList.add("texthover");
    proseNav.classList.remove("italics");
    proseNav.classList.remove("underline");
    proseNav.classList.remove("glowing");
}
