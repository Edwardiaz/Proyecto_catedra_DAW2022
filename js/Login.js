//Control de Login

function go(){
    if (document.form.password.value=='1234' && document.form.login.value=='Ash Ketchum'){
        document.form.submit();
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'oops!!!',
            text: 'Usuario o Contraseña Incorrectos'
        })
    }
}