var text = document.querySelector('.child');
var videoOverlay = document.querySelector('.video-overlay');

var header1Container = document.querySelector('.line-1');
var header2Container = document.querySelector('.line-2');
var header3Container = document.querySelector('.anti-mark');

var topbarContainer = document.querySelector('.top-bar');
var bottombarContainer = document.querySelector('.bot');
var contentContainer = document.querySelector('.body-content');
var mark1Container = document.querySelector('.mark1');
var mark2Container = document.querySelector('.mark2');


text.addEventListener('mouseenter', function() {
    fadeIn(videoOverlay)
});

text.addEventListener('mouseleave', function() {
    fadeOut(videoOverlay)
});

// header1Container.style.opacity = '0.14';
// header2Container.style.opacity = '0.14';
// header3Container.style.opacity = '0.14';
// mark1Container.style.opacity = '0.14';
// mark2Container.style.opacity = '0.14';
// text.style.opacity = '0.14';

function fadeIn(element) {
    element.style.opacity = 1;
    topbarContainer.style.opacity = '0.14';
    bottombarContainer.style.opacity = '0.14';
    contentContainer.style.opacity = '0.14';

    mark1Container.style.opacity = '1';
    mark2Container.style.opacity = '1';
    text.style.opacity = '1';
}

function fadeOut(element) {
    element.style.opacity = 0;
    topbarContainer.style.opacity = '1';
    bottombarContainer.style.opacity = '1';
    contentContainer.style.opacity = '1';

    mark1Container.style.opacity = '1';
    mark2Container.style.opacity = '1';
    text.style.opacity = '1';
}