function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    document.getElementById("fecha").innerHTML = mes + ' ' + anio;
}

var total = 0;

//metodo funcional con localStorage para Desposito, falta añadir esto para el PDF
function agregar() {

    var montoString = document.getElementById("monto").value;
    var monto = parseFloat(montoString);
    var montoArray = [];
    //monto tiene que ser una variable normal, hay que crear un array donde se guarde monto para usarla en historial y monto para sumarla con total
    window.localStorage.setItem('monto', monto);

    total = window.localStorage.getItem('total');

    if(total == null || total == 0) {
        total = monto;
    } else {

        total = parseFloat(total) + monto;
    }
    
    window.localStorage.setItem('total', total);
    
    montoArray = JSON.parse("[" + window.localStorage.getItem('montoArray') + "]");

    if(montoArray[0] == null && montoArray.length == 1){
        montoArray[0] = monto;
        window.localStorage.setItem('montoArray', montoArray);
    } else {
        montoArray.push(monto);
        window.localStorage.setItem('montoArray', montoArray);
        console.log(montoArray);
    }

}

//Falta probar este metodo en la seccion de retiros
function retiro() {

    var montoString = document.getElementById("monto").value;
    var monto = parseFloat(montoString);
    var montoArray = [];
    //monto tiene que ser una variable normal, hay que crear un array donde se guarde monto para usarla en historial y monto para sumarla con total
    window.localStorage.setItem('monto', monto);

    total = window.localStorage.getItem('total');

    if(total == null || total == 0) {
        total = monto;
    } else {

        total = parseFloat(total) - monto;
    }
    
    window.localStorage.setItem('total', total);
    
    montoArray = JSON.parse("[" + window.localStorage.getItem('montoArray') + "]");

    if(montoArray[0] == null && montoArray.length == 1){
        /*
        montoArray[0] = monto;
        window.localStorage.setItem('montoArray', montoArray);
        */
        alert('No tiene suficientes fondos para harec un retiro'); // AQUI TIENES QUE APLICAR LO DE LA LIBRERIA DE SWEETALERT Eduardo
    } else {
        montoArray.push(-1*monto);
        window.localStorage.setItem('montoArray', montoArray);
        console.log(montoArray);
    }

}