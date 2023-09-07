var randomNumber;

$(window).on("load", function() {
    set_image();
});

var imglist = ["assets/allpjs-images/rand/1.jpg", "assets/allpjs-images/rand/2.jpg", "assets/allpjs-images/rand/3.JPEG", "assets/allpjs-images/rand/4.jpg", "assets/allpjs-images/rand/5.png", "assets/allpjs-images/rand/6.jpg"];
var imgpath = "assets/allpjs-images/rand/1.png";

function set_image() {
    randomNumber = Math.floor(Math.random() * imglist.length);
    imgpath = imglist[randomNumber];
    console.log(imgpath);
    document.getElementById("rand-image").src = imgpath;
}