function showContent(year) {
    var arrayOfYears = ["2020", "2021", "2022"];
    let showhide;
  
    // hide all years' content
    for (let i = 0; i < arrayOfYears.length; i++) {
      showhide = document.getElementById(arrayOfYears[i]);
      showhide.style.display = "none";
    }      
  
    // show requested content
    var element = document.getElementById(year);
    element.style.display = "block";
}