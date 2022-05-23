function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let dia = date.getDate();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    return dia + ' de ' + mes + ' de ' + anio;
}

var total = 0;
// se puede sacar directo en historial con un OnLoad()...

function agregar() {

    var montoString = document.getElementById("monto").value;
    var cuenta = document.getElementById('cuentaOrigen').value;
    var monto = parseFloat(montoString);
    var montoArray = [];
    var descripcionArray = []; 
    var fechaArray = [];
    //deacuerdo al orden que se guarde cada monto se guardara una descripcion que solo existira 
    //internamente, en el caso del modulo de Deposito sera 'Deposito'
    //monto tiene que ser una variable normal, hay que crear un array donde se guarde monto para usarla en historial y monto para sumarla con total
    window.localStorage.setItem('monto', monto);
    window.localStorage.setItem('cuenta', cuenta);

    total = window.localStorage.getItem('total');

    if(total == null || total == 0) {
        total = monto;
    } else {

        total = parseFloat(total) + monto;
    }
    window.localStorage.setItem('total', total);

    //aqui consigo el array del localStorage, pero si es la primera vez que lo consulta entonces guarda en el indice 0 un valor vacio, por
    //lo que se hace una evaluacion y se inserta el monto en caso venga vacio con un lngth igual a 1
    montoArray = JSON.parse("[" + window.localStorage.getItem('montoArray') + "]");
    descripcionArray = [ window.localStorage.getItem('descripcionArray') ];
    fechaArray = [window.localStorage.getItem('fechaArray')];
    if(montoArray[0] == null && montoArray.length == 1){
        montoArray[0] = monto;
        descripcionArray[0] = 'Deposito';
        fechaArray[0] = calcularFechaActual();
        window.localStorage.setItem('montoArray', montoArray);
        window.localStorage.setItem('descripcionArray', descripcionArray);
        window.localStorage.setItem('fechaArray', fechaArray);

    } else {
        montoArray.push(monto);
        descripcionArray.push('Deposito');
        fechaArray.push(calcularFechaActual());
        window.localStorage.setItem('montoArray', montoArray);
        window.localStorage.setItem('descripcionArray', descripcionArray);
        window.localStorage.setItem('fechaArray', fechaArray);
        console.log(montoArray);
        console.log(descripcionArray);
        console.log(fechaArray);
        
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
}

function pagoFactura(factura) {
    var montoString = document.getElementById("monto").value;
    var monto = parseFloat(montoString);
    var cuenta = document.getElementById('cuentaOrigen').value;
    var codigoFactura = '';
    var montoArray = [];
    var descripcionArray = [];
    var fechaArray = [];

    window.localStorage.setItem('monto', monto);
    window.localStorage.setItem('cuenta', cuenta);
    

    total = window.localStorage.getItem('total');

    if(total != null && total >= monto) {
        
        total = parseFloat(total) - monto;
    
        window.localStorage.setItem('total', total);
        
        montoArray = JSON.parse("[" + window.localStorage.getItem('montoArray') + "]");
        descripcionArray = [ window.localStorage.getItem('descripcionArray') ];
        fechaArray = [window.localStorage.getItem('fechaArray')];

        if(montoArray[0] == null && montoArray.length == 1){
                alert('No tiene suficientes fondos para efectuar el pago'); // AQUI TIENES QUE APLICAR LO DE LA LIBRERIA DE SWEETALERT Eduardo
        } else {
            montoArray.push(-1*monto);
            
            switch(factura){
                case 'anda':
                    descripcionArray.push('Pago ANDA');
                    codigoFactura = document.getElementById('num').value;
                    window.localStorage.setItem('cuentaAnda', codigoFactura);
                break;
                case 'caess':
                    descripcionArray.push('Pago CAESS');
                    codigoFactura = document.getElementById('nic').value;
                    window.localStorage.setItem('cuentaAnda', codigoFactura);
                break;
                case 'Internet':
                    descripcionArray.push('Pago Internet');
                    proveedorInter = document.getElementById('proveedor').value;
                    window.localStorage.setItem('proveedorInter', proveedorInter);
                break;
                case 'telefono':
                    proveedorTel = document.getElementById('proveedor').value;
                    window.localStorage.setItem('proveedorTel', proveedorTel);
                    descripcionArray.push('Pago telefonía');
                break;

            }
            window.localStorage.setItem('montoArray', montoArray);
            window.localStorage.setItem('descripcionArray', descripcionArray);
            window.localStorage.setItem('fechaArray', fechaArray);
            console.log(montoArray);
            console.log(descripcionArray);
            console.log(fechaArray);
        }
    } else {
        alert('No tiene suficientes fondos para efectuar el pago'); // AQUI TIENES QUE APLICAR LO DE LA LIBRERIA DE SWEETALERT Eduardo
    }

}

function retiro() {

    var montoString = document.getElementById("monto").value;
    var monto = parseFloat(montoString);
    var cuenta = document.getElementById('cuentaOrigen').value;
    var montoArray = [];
    var descripcionArray = []; 
    var fechaArray = [];
    
    window.localStorage.setItem('monto', monto);
    window.localStorage.setItem('cuenta', cuenta);

    total = window.localStorage.getItem('total');

    if(total != null && total >= monto) {
        
        total = parseFloat(total) - monto;
    
        window.localStorage.setItem('total', total);
        
        montoArray = JSON.parse("[" + window.localStorage.getItem('montoArray') + "]");
        descripcionArray = [ window.localStorage.getItem('descripcionArray') ];
        fechaArray = [window.localStorage.getItem('fechaArray')];

        if(montoArray[0] == null && montoArray.length == 1){
                alert('No tiene suficientes fondos para hacer un retiro'); // AQUI TIENES QUE APLICAR LO DE LA LIBRERIA DE SWEETALERT Eduardo
        } else {
            montoArray.push(-1*monto);
            descripcionArray.push('Retiro');
            window.localStorage.setItem('montoArray', montoArray);
            window.localStorage.setItem('descripcionArray', descripcionArray);
            window.localStorage.setItem('fechaArray', fechaArray);
            console.log(montoArray);
            console.log(descripcionArray);
            console.log(fechaArray);
        }
    } else {
        alert('No tiene suficientes fondos para hacer un retiro'); // AQUI TIENES QUE APLICAR LO DE LA LIBRERIA DE SWEETALERT Eduardo
    }

}