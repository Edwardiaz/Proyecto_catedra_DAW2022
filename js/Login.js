//Control de Login

function go(){
    if (document.form.password.value=='1234' && document.form.login.value=='Ash Ketchum'){
        document.form.submit();
    }
    else{
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}