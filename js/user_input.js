function verify_user_inputs(){
    const data = document.getElementById('register-form');

    const emailCheckFormula = new RegExp('^[a-z1-9.]+@[A-Za-z]+\.com$');

    if(!emailCheckFormula.test(data[0].value))
        console.log('bad email');
    else
        console.log('good email');
}