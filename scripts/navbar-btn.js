const toggleBtn = document.getElementById('toggle');
const navbarLinks = document.getElementById('links');

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


$(document).ready(function() {
    $("toggle").click(function() {
        $("links").slideToggle();
    });
});