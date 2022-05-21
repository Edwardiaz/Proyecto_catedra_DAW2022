//Control de Login

function go(){
    if (document.form.password.value=='1234' && document.form.login.value=='Ash Ketchum'||document.form.password.value=='4321' && document.form.login.value=='Eduardo Matias'){
        document.form.submit();
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'acceso'
        })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'oops!!!',
            text: 'Usuario o Contraseña Incorrectos'
        })
    }
}