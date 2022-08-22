    //    step:1 ----add click event handlar-----//
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('submit button clicked');
    // step:2---get the email address---//
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    // step:3----get the password---//
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    if (email === 'alamgir@gmail.com' && password === '20202022') {
        window.Location.href = 'bank.html';
    }
    else {
        alert('wrong password!!!')
    }
})