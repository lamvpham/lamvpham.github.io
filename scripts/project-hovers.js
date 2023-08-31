// main project hover components
var textHover1 = document.querySelector('#project-text-1');
var textHover2 = document.querySelector('#project-text-2');
var imageHover = document.querySelector('#project-image');
var projectHover = document.getElementById('pj-hovers');

// text content to disappear on hover
var header = document.querySelector('.header');
var topbar = document.querySelector('.top-bar');
var bottombar = document.querySelector('.bot');
var bodycontent = document.getElementById('workcontent');
var pjtitle1 = document.getElementById('proj-text-1');
var pjtitle2 = document.getElementById('proj-text-2');


pjtitle1.style.opacity = "0";
pjtitle2.style.opacity = "0";

// hovers
textHover1.addEventListener('mouseover', showImage1);
textHover1.addEventListener('mouseout', hideImage1);
textHover2.addEventListener('mouseover', showImage2);
textHover2.addEventListener('mouseout', hideImage2);

function showImage1() {
    projectHover.classList.add("proj-img-1")
    projectHover.classList.remove("proj-img-2")
    imageHover.style.opacity = '0.8';
    header.style.opacity = '0';
    topbar.style.opacity = '0.16';
    bottombar.style.opacity = '0.16';
    bodycontent.style.opacity = '0.16';
    pjtitle1.style.opacity = "1";
    pjtitle2.style.opacity = "0";
}

function hideImage1() {
    imageHover.style.opacity = '0';
    header.style.opacity = '0.14';
    topbar.style.opacity = '1';
    bottombar.style.opacity = '1';
    bodycontent.style.opacity = '1';
    pjtitle1.style.opacity = "0";
}

function showImage2() {
    projectHover.classList.add("proj-img-2")
    projectHover.classList.remove("proj-img-1")
    imageHover.style.opacity = '0.8';
    header.style.opacity = '0';
    topbar.style.opacity = '0.16';
    bottombar.style.opacity = '0.16';
    bodycontent.style.opacity = '0.16';
    pjtitle2.style.opacity = "1";
    pjtitle1.style.opacity = "0";
}

function hideImage2() {
    imageHover.style.opacity = '0';
    header.style.opacity = '0.14';
    topbar.style.opacity = '1';
    bottombar.style.opacity = '1';
    bodycontent.style.opacity = '1';
    pjtitle2.style.opacity = "0";
}