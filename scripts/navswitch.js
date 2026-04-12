var workNav = document.getElementById('work');
var workContent = document.getElementById('workcontent');
// var aboutNav = document.getElementById('about');
// var aboutContent = document.getElementById('aboutcontent');
var archiveNav = document.getElementById('archive');
var archiveContent = document.getElementById('archivecontent');

// script for url hash changes
function hideAllContent() {
    workContent.style.display = 'none';
    // aboutContent.style.display = 'none';
    archiveContent.style.display = 'none';
}

function handleHashChange() {
    var hash = window.location.hash;

    hideAllContent();

    // if (hash === '#about') {
    //     showAbout();
    // } else
    if (hash === '#archive') {
        showArchive();
    } else {
        showWork();
    }
}

window.addEventListener('hashchange', handleHashChange);
handleHashChange();


// showing and hiding content
workNav.addEventListener("click", showWork);
// aboutNav.addEventListener("click", showAbout);
archiveNav.addEventListener("click", showArchive);


function showArchive() {
    workContent.style.display = 'none';
    // aboutContent.style.display = 'none';
    archiveContent.style.display = 'block';

    // if (window.location.hash === '#about') {
    //     history.pushState({}, document.title, window.location.pathname);
    // }

    archiveNav.classList.add("italics");
    archiveNav.classList.add("underline");
    archiveNav.classList.remove("highlight");
    archiveNav.classList.remove("texthover");
    archiveNav.classList.add("glowing");

    // aboutNav.classList.add("highlight");
    // aboutNav.classList.add("texthover");
    // aboutNav.classList.remove("italics");
    // aboutNav.classList.remove("underline");
    // aboutNav.classList.remove("glowing");

    workNav.classList.add("highlight");
    workNav.classList.add("texthover");
    workNav.classList.remove("italics");
    workNav.classList.remove("underline");
    workNav.classList.remove("glowing");
}

// function showAbout() {
//     workContent.style.display = 'none';
//     aboutContent.style.display = 'block';
//     archiveContent.style.display = 'none';
//
//     if (window.location.hash === '#archive') {
//         history.pushState({}, document.title, window.location.pathname);
//     }
//
//     aboutNav.classList.add("italics");
//     aboutNav.classList.add("underline");
//     aboutNav.classList.remove("highlight");
//     aboutNav.classList.remove("texthover");
//     aboutNav.classList.add("glowing");
//
//     workNav.classList.add("highlight");
//     workNav.classList.add("texthover");
//     workNav.classList.remove("italics");
//     workNav.classList.remove("underline");
//     workNav.classList.remove("glowing");
//
//     archiveNav.classList.add("highlight");
//     archiveNav.classList.add("texthover");
//     archiveNav.classList.remove("italics");
//     archiveNav.classList.remove("underline");
//     archiveNav.classList.remove("glowing");
// }

function showWork() {
    workContent.style.display = 'block';
    // aboutContent.style.display = 'none';
    archiveContent.style.display = 'none'

    // if (window.location.hash === '#about') {
    //     history.pushState({}, document.title, window.location.pathname);
    // }

    if (window.location.hash === '#archive') {
        history.pushState({}, document.title, window.location.pathname);
    }

    workNav.classList.add("italics");
    workNav.classList.add("underline");
    workNav.classList.remove("highlight");
    workNav.classList.remove("texthover");
    workNav.classList.add("glowing");

    // aboutNav.classList.add("highlight");
    // aboutNav.classList.add("texthover");
    // aboutNav.classList.remove("italics");
    // aboutNav.classList.remove("underline");
    // aboutNav.classList.remove("glowing");

    archiveNav.classList.add("highlight");
    archiveNav.classList.add("texthover");
    archiveNav.classList.remove("italics");
    archiveNav.classList.remove("underline");
    archiveNav.classList.remove("glowing");
}
