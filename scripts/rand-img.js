var randomNumber;

$(window).on("load", function() {
    set_image();
});

var imglist = ["assets/allpjs-images/rand/1.png", "assets/allpjs-images/rand/2.jpg", "assets/allpjs-images/rand/3.jpg", "assets/allpjs-images/rand/4.png", "assets/allpjs-images/rand/5.jpeg", "assets/allpjs-images/rand/6.jpeg", "assets/allpjs-images/rand/7.jpg", "assets/allpjs-images/rand/8.jpg", "assets/allpjs-images/rand/9.jpg"];
var imgpath = "assets/allpjs-images/rand/1.png";

function set_image() {
    randomNumber = Math.floor(Math.random() * imglist.length);
    imgpath = imglist[randomNumber];
    console.log(imgpath);
    document.getElementById("rand-image").src = imgpath;
}