//show cashout form
document.getElementById('showcashOut').addEventListener('click', function() {
    document.getElementById('cashoutform').classList.remove('hidden');
    document.getElementById('addmoneyform').classList.add('hidden');
})

//show addmoney form
document.getElementById('showaddMoney').addEventListener('click', function() {
    document.getElementById('addmoneyform').classList.remove('hidden');
    document.getElementById('cashoutform').classList.add('hidden');
})