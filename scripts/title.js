$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 24) {
            $(".title-text").css({ "opacity": "0.03" })
        } else {
            $(".title-text").css({ "opacity": "1" })
        }
    })
})