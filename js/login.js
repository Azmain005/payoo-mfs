// document.getElementById('loginbtn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     // console.log('Login button clicked');
//     const phoneNumber = document.getElementById('mobile').value;
//     const password = document.getElementById('pin').value;
//     if (phoneNumber === '01718' && password === '123456') {
//         console.log('Login successful!');
//     } else {
//         alert('Wrong mobile number or pin!');
//     }

// });

document.getElementById('loginbtn').addEventListener('click', function(event) { 
    event.preventDefault();
    const phoneNumber = document.getElementById('mobile').value;
    const password = document.getElementById('pin').value;
    if (phoneNumber === '01718' && password === '123456') {
        window.location.href = 'home.html'; // Redirect to home.html on successful login
    } else {
        alert('Wrong mobile number or pin!');
    }
})