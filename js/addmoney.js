document.getElementById('addmoneybtn').addEventListener('click', function(event) { // Prevent the default form 
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;
    // console.log(amount, pin);
    const oldamountdiv = document.getElementById('oldamount');
    const oldamount = oldamountdiv.innerText;
    // console.log(oldamount);
    const newamount = parseFloat(oldamount) + parseFloat(amount);
    if (pin === '1234') {
        oldamountdiv.innerText = newamount;
        document.getElementById('amount').value = '';
        const pin = document.getElementById('pin').value = '';
        alert('Money added successfully!');

        
    }
    else {
        alert('Wrong pin!');
    }

})



document.getElementById('cashoutbtn').addEventListener('click', function(event) { // Prevent the default form 
    // console.log('Cash out button clicked');
    event.preventDefault();
    const amount = document.getElementById('cashamount').value;
    const pin = document.getElementById('cashpin').value;
    // console.log(amount, pin);
    const oldamountdiv = document.getElementById('oldamount');
    const oldamount = oldamountdiv.innerText;
    // console.log(oldamount);
    const newamount = parseFloat(oldamount) - parseFloat(amount);
    if (pin === '1234') {
        oldamountdiv.innerText = newamount;
        document.getElementById('cashamount').value = '';
        const pin = document.getElementById('cashpin').value = '';
        alert('Cash out successful!');

        
    }
    else {
        alert('Wrong pin!');
    }

})