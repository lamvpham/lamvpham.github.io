// main project hover components
var textHover1 = document.querySelector('#project-text-1');
var textHover2 = document.querySelector('#project-text-2');
var textHover3 = document.querySelector('#project-text-3');
var textHover4 = document.querySelector('#project-text-4');
var imageHover = document.querySelector('#project-image');
var projectHover = document.getElementById('pj-hovers');

// text content to disappear on hover
var header = document.querySelector('.header');
var topbar = document.querySelector('.top-bar');
var bottombar = document.querySelector('.bot');
var bodycontent = document.getElementById('copy');
var pjtitle1 = document.getElementById('proj-text-1');
var pjtitle2 = document.getElementById('proj-text-2');
var pjtitle3 = document.getElementById('proj-text-3');
var pjtitle4 = document.getElementById('proj-text-4');
var stars1 = document.getElementById('stars-1');
var stars2 = document.getElementById('stars-2');
var stars3 = document.getElementById('stars-3');
var stars4 = document.getElementById('stars-4');
var stars5 = document.getElementById('stars-5');
var stars6 = document.getElementById('stars-6');
var stars7 = document.getElementById('stars-7');
var stars8 = document.getElementById('stars-8');

// pjtitle1.style.opacity = "0";
// pjtitle2.style.opacity = "0";

// hovers
textHover1.addEventListener('mouseover', showImage1);
textHover1.addEventListener('mouseout', hideImage1);
textHover2.addEventListener('mouseover', showImage2);
textHover2.addEventListener('mouseout', hideImage2);
textHover3.addEventListener('mouseover', showImage3);
textHover3.addEventListener('mouseout', hideImage3);
textHover4.addEventListener('mouseover', showImage4);
textHover4.addEventListener('mouseout', hideImage4);

function showImage1() {
    projectHover.classList.add("proj-img-1")
    projectHover.classList.remove("proj-img-2")
    projectHover.classList.remove("proj-img-3")
    projectHover.classList.remove("proj-img-4")
    imageHover.style.opacity = '0.75';
    bodycontent.style.opacity = '0';
    pjtitle1.style.opacity = "1";
    pjtitle2.style.opacity = "0";
    pjtitle3.style.opacity = "0";
    pjtitle4.style.opacity = "0";
    header.style.opacity = '0';
    topbar.style.opacity = '0.18';
    bottombar.style.opacity = '0.18';
    stars1.style.color = '#202020';
    stars2.style.color = '#202020';
    // textHover2.style.opacity = '0.85';
}

function hideImage1() {
    imageHover.style.opacity = '0';
    header.style.opacity = '0.065';
    topbar.style.opacity = '1';
    bottombar.style.opacity = '1';
    bodycontent.style.opacity = '1';
    pjtitle1.style.opacity = "0";
    stars1.style.color = '#8a8dea';
    stars2.style.color = '#8a8dea';
    // textHover2.style.opacity = '1';
}

function showImage2() {
    projectHover.classList.add("proj-img-2")
    projectHover.classList.remove("proj-img-1")
    projectHover.classList.remove("proj-img-3")
    projectHover.classList.remove("proj-img-4")
    imageHover.style.opacity = '0.75';
    bodycontent.style.opacity = '0';
    pjtitle2.style.opacity = "1";
    pjtitle1.style.opacity = "0";
    pjtitle3.style.opacity = "0";
    pjtitle4.style.opacity = "0";
    header.style.opacity = '0';
    topbar.style.opacity = '0.18';
    bottombar.style.opacity = '0.18';
    stars3.style.color = '#202020';
    stars4.style.color = '#202020';
    // textHover2.style.opacity = '0.85';
}

function hideImage2() {
    imageHover.style.opacity = '0';
    header.style.opacity = '0.065';
    topbar.style.opacity = '1';
    bottombar.style.opacity = '1';
    bodycontent.style.opacity = '1';
    pjtitle2.style.opacity = "0";
    stars3.style.color = '#8a8dea';
    stars4.style.color = '#8a8dea';
    // textHover2.style.opacity = '1';
}

function showImage3() {
    projectHover.classList.add("proj-img-3")
    projectHover.classList.remove("proj-img-1")
    projectHover.classList.remove("proj-img-2")
    projectHover.classList.remove("proj-img-4")
    imageHover.style.opacity = '0.75';
    bodycontent.style.opacity = '0';
    pjtitle3.style.opacity = "1";
    pjtitle4.style.opacity = "0";
    pjtitle2.style.opacity = "0";
    pjtitle1.style.opacity = "0";
    header.style.opacity = '0';
    topbar.style.opacity = '0.18';
    bottombar.style.opacity = '0.18';
    stars5.style.color = '#202020';
    stars6.style.color = '#202020';
    // textHover3.style.opacity = '0.85';
}

function hideImage3() {
    imageHover.style.opacity = '0';
    header.style.opacity = '0.065';
    topbar.style.opacity = '1';
    bottombar.style.opacity = '1';
    bodycontent.style.opacity = '1';
    pjtitle3.style.opacity = "0";
    stars5.style.color = '#8a8dea';
    stars6.style.color = '#8a8dea';
    // textHover3.style.opacity = '1';
}

function showImage4() {
    projectHover.classList.add("proj-img-4")
    projectHover.classList.remove("proj-img-1")
    projectHover.classList.remove("proj-img-2")
    projectHover.classList.remove("proj-img-3")
    imageHover.style.opacity = '0.75';
    bodycontent.style.opacity = '0';
    pjtitle4.style.opacity = "1";
    pjtitle3.style.opacity = "0";
    pjtitle2.style.opacity = "0";
    pjtitle1.style.opacity = "0";
    header.style.opacity = '0';
    topbar.style.opacity = '0.18';
    bottombar.style.opacity = '0.18';
    stars7.style.color = '#202020';
    stars8.style.color = '#202020';
    // textHover4.style.opacity = '0.85';
}

function hideImage4() {
    imageHover.style.opacity = '0';
    header.style.opacity = '0.065';
    topbar.style.opacity = '1';
    bottombar.style.opacity = '1';
    bodycontent.style.opacity = '1';
    pjtitle4.style.opacity = "0";
    stars7.style.color = '#8a8dea';
    stars8.style.color = '#8a8dea';
    // textHover4.style.opacity = '1';
}