function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let dia = date.getDate();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    //document.getElementById("fecha").innerHTML = dia + ' ' + mes + ' ' + anio;
    return dia + ' ' + mes + ' ' + anio;
}

var total = 0;

//metodo funcional con localStorage para Desposito, falta añadir esto para el PDF
//FALTA AÑADIR UNA DESCRIPCION DE LA TRANSACCION... posiblemente se haga en otro array...

// Ya descarga el pdf en Retiro y Deposito, falta añadirlo a los demas modulos, el historial 
// se puede sacar directo en historial con un OnLoad()...

function agregar() {

    var montoString = document.getElementById("monto").value;
    var monto = parseFloat(montoString);
    var montoArray = [];
    var descripcionArray = []; 
    //deacuerdo al orden que se guarde cada monto se guardara una descripcion que solo existira 
    //internamente, en el caso del modulo de Deposito sera 'Deposito'
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
/*
    celda = document.createElement("td");
    trTag = document.getElementById("trDatos");
    var nodo1 = document.createTextNode("Deposito");
    var nodo2 = document.createTextNode(calcularFechaActual());
    var nodo3 = document.createTextNode(monto);
    celda.appendChild(nodo1);
    celda.appendChild(nodo2);
    celda.appendChild(nodo3);
    //DA problema debido a que el trDatos no esta en la pagina donde toy creando el nodo nuevo, F
    window.localStorage.setItem('trTag', trTag.appendChild(celda));
    */
   mostrarDatos(monto, total, );
}

function mostrarDatos(){

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