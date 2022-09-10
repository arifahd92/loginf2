function valid(e){
    // e.preventDefault();
    let unm=document.getElementById("uname").value;
    let pswd=document.getElementById("psd").value
    if(unm=="arif"&&pswd=="12345" ){
       return 
     
    }
    else if(unm=="" && pswd == "") {
        e.preventDefault();
  
        alert("Error:please enter user name and password")
        return
        
    }
    else if(unm!="" && pswd == "") {
        e.preventDefault();
  
        alert("Error:please enter  password")
        return
        
    }
    else if(unm=="" && pswd !== "") {
        e.preventDefault();
  
        alert("Error:please enter user name")
        return
        
    }
    else{
        e.preventDefault();
  
        alert("Error:either user name or password")
        return
        
    }
}


