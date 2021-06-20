function onClick(clicked_id){
    var elements = document.getElementsByClassName('p-dark');
    var nav_elements = document.getElementsByClassName('nav-link');
    console.log(nav_elements);
    for (var i=0; i<elements.length; i=i+1) {
        elements[i].classList.add('text-dark');
    }
    for (var i=1; i<nav_elements.length; i=i+1) {
        nav_elements[i].classList.add('text-dark');
    }
    document.getElementById('iamblob').classList.add("blob-explode");
    setTimeout(()=> {document.getElementById('iamblob').classList.remove("blob-explode"); },3050);
    setTimeout(()=> { location.href = "pages/"+clicked_id+".html"},1000);
}