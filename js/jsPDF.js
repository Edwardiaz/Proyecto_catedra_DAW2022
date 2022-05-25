function fechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let dia = date.getDate();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    return  mes + '_' + anio;
}

function descargar( opcion ){
    var doc = new jsPDF();
    //TODO: AHora falta editar cada caso para que agarre los valores del LocalStorage
    var facturaFinal = '';
    var cuenta = window.localStorage.getItem('cuenta');
    var monto = window.localStorage.getItem('monto');
    var total = window.localStorage.getItem('total');
    var cuentaAnda = window.localStorage.getItem('cuentaAnda');
    proveedorTel = window.localStorage.getItem('proveedorTel');
    proveedorInter = window.localStorage.getItem('proveedorInter');

    switch(opcion){
        case 1:
            doc.text("*******************************************************", 40, 20);
            doc.text("********** Comprobante de Deposito **************", 40, 30);
            doc.text("*******************************************************", 40, 40);
            doc.text("Numero de cuenta del monto acreditado: "+cuenta, 40 ,50);
            doc.text("Monto acreditado: $"+monto, 40 ,60);
            doc.text("Nuevo saldo disponible: $"+total, 40 ,70);
            doc.text("Fecha de la transacción: "+fechaActual(), 40 ,80);
            facturaFinal = 'Comprobante_deposito_'+fechaActual()+'.pdf';
            
            break;
        case 2:
            doc.text("*******************************************************", 40, 20);
            doc.text("************* Comprobante de Retiro **************", 40, 30);
            doc.text("*******************************************************", 40, 40);
            doc.text("Numero de cuenta origen del monto retirado: "+cuenta, 40, 50);
            doc.text("Monto retirado: $"+monto, 40 ,60);
            doc.text("Saldo restante: $"+total, 40 ,70);
            doc.text("Fecha de la transacción: "+fechaActual(), 40 ,80);
            facturaFinal = 'Comprobante_retiro_'+fechaActual()+'.pdf';
            break;
        case 3:
            doc.text("*****************************************************************************", 30, 20);
            doc.text("*********** Comprobante pago de Servicios de agua potable *********", 30, 30);
            doc.text("*****************************************************************************", 30, 40);
            doc.text("Numero de cuenta origen del monto debitado: "+cuenta, 30 ,50);
            doc.text("numero cuenta de usuario Anda: "+cuentaAnda, 30 ,60);
            doc.text("Monto debitado: $"+monto, 30 ,70);
            doc.text("Fecha de la transacción: "+fechaActual(), 30 ,80);
            facturaFinal = 'Comprobante_pago_ANDA_'+fechaActual()+'.pdf';
            break;
        case 4:
            doc.text("*********************************************************************", 30, 20);
            doc.text("**** Comprobante pago de Servicios de energía eléctrica ****", 30, 30);
            doc.text("*********************************************************************", 30, 40);
            doc.text("Numero de cuenta origen del monto debitado: "+cuenta, 30 ,50);
            doc.text("Monto debitado: "+monto, 30 ,60);
            doc.text("Fecha de la transacción: "+fechaActual(), 40 ,70);
            facturaFinal = 'Comprobante_pago_CAESS_'+fechaActual()+'.pdf';
            break;
        case 5:
            doc.text("***************************************************************", 40, 20);
            doc.text("****** Comprobante pago de Servicio de Internet ****** ", 40, 30);
            doc.text("***************************************************************", 40, 40);
            doc.text("Numero de cuenta origen del monto debitado: "+cuenta, 40 ,50);
            doc.text("Proveedor: "+proveedorInter, 40 ,60);
            doc.text("Monto debitado: "+monto, 40 ,70);
            doc.text("Fecha de la transacción: "+fechaActual(), 40 ,80);
            facturaFinal = 'Comprobante_pago_Internet_'+fechaActual()+'.pdf';
            break;
        default:
            doc.text("***************************************************************", 40, 20);
            doc.text("****** Comprobante pago de Servicio de telefonía ******", 40, 30);
            doc.text("***************************************************************", 40, 40);
            doc.text("Numero de cuenta del monto acreditado: "+cuenta, 40 ,50);
            doc.text("Proveedor: "+proveedorTel, 40 ,60);
            doc.text("Monto debitado: "+monto, 40 ,70);
            doc.text("Fecha de la transacción: "+fechaActual(), 40 ,80);
            facturaFinal = 'Comprobante_pago_telefonia_'+fechaActual()+'.pdf';
    }
    doc.setFont("courier", "normal");
    doc.save(facturaFinal);
}