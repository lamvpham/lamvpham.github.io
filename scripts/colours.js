let root = document.documentElement;
var randomNumber;

$(window).on("load", function() {
    set_colors();
});

var bglist = ["#161616", "#CCB8D6", "#A65D4D"];
var textlist = ["#FFF4E9", "#35472D", "#DDBAD0"];

function set_colors() {
    randomNumber = Math.floor(Math.random() * bglist.length);
    bg_color = bglist[randomNumber].toString();
    text_color = textlist[randomNumber].toString();
    console.log(bg_color);
    console.log(text_color);
    root.style.setProperty("--bgcolours", bg_color);
    root.style.setProperty("--textcolours", text_color);
}