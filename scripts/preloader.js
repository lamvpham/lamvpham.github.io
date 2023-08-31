var loading;

function preloader() {
    loading = setTimeout(showPage, 1915);
    // loading = setTimeout(transition, 2000);
}

// function transition() {
//     // document.getElementById("preloader").style.backgroundImage="url(assets/static.gif)"; 
//     document.getElementById("vcr-text-1").style.display = "none";
//     document.getElementById("vcr-text-2").style.display = "none";
// }

function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("wrap").style.display = "flex";
}