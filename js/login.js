document.getElementById('loginbtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Login button clicked');
    const phoneNumber = document.getElementById('mobile').value;
    const password = document.getElementById('pin').value;
    
});