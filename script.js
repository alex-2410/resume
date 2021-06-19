console.log("I am here");
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function onClick(clicked_id){
    document.getElementById('iamblob').classList.add("blob-explode");
    setTimeout(()=> {document.getElementById('iamblob').classList.remove("blob-explode"); },3050);
    setTimeout(()=> { location.href = "pages/"+clicked_id+".html"},1000);
}