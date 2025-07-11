document.getElementById('addmoney').addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyammount = document.getElementById('input-amount').value;
console.log(addMoneyammount);
 const pinNumber = document.getElementById('pin-number').value;
 console.log(pinNumber);

if(pinNumber=== '0177'){
    console.log('adding money to your account');
    const totalBalance = document.getElementById('total-balance').innerText;
    console.log(totalBalance);
    const addMoneynumber =  parseFloat(addMoneyammount);
    const balanceNumber = parseFloat(totalBalance);
    const newBalance =  balanceNumber - addMoneynumber  ;
    console.log(newBalance);

    document.getElementById('total-balance').innerText = newBalance;
}
else{
    alert('faild your money');
}


})


