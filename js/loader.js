//Loader
var myvar;
function loader() {
    myvar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("spinner-wrapper").style.display = "none";
    document.getElementById("spinner").style.display = "none";
}