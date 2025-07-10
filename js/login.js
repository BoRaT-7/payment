document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault(); 
    const phoneNumber = document.getElementById('phonenumber').value ;
   
    const loginPin = document.getElementById ('loginpin').value;
 
    if(phoneNumber === '01774102889' && loginPin === '0177'){
        console.log('you are log in');
       window.location.href = 'package.html';
    }
    else{
        console.log('wrong phone number');
    }
})

