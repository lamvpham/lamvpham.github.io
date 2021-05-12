// $(window).scroll(function() {
//     if ($(this).scrollTop() > 2075 && $(this).scrollTop() < 3900) {
//         $(".photography").css({ "font-weight": "600" })
//     } else {
//         $(".photography").css({ "font-weight": "400" })
//     }
// })
// })

window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("section-art");

    if (window.scrollY > (elementTarget.offsetTop)) {
        $("#art").css({ "font-weight": "600" })
    } else if (window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        $("#art").css({ "font-weight": "400" })
    }
});