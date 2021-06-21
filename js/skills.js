function onClick(clicked_id){
    if (clicked_id=="index") {
        setTimeout(()=> { location.href = "../index.html"},1000);    
    }
    else {
        setTimeout(()=> { location.href = clicked_id+".html"},1000);
    }
}