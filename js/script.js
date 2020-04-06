function revealMessage(){
    document.getElementById("hiddenMessage").style.display='block';
} 


function checkForm(){
    var email =document.getElementById("email");
    var password = document.getElementById(password);

    if (email.value=='' || !isNaN(emeail)|| !email.matches(/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/));{
        emeailCanSubmit = false;
        alert('Enter your enail');
        
    };
   return true; 
    
}



