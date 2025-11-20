function validateLogin(){
    let uN = document.forms['loginform']['username'].value;
    let pW = document.forms['loginform']['password'].value;
    if(uN === 'ABC' && pW === 'ABC')
        return true;
    else {
        document.querySelector('#errormsg').innerHTML = 'Invalid Username/password.';
        return false; 
    }
}

