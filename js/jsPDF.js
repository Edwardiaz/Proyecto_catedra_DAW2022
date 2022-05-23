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
            doc.text("*******************************************************", 20, 20);
            doc.text("********** Comprobante de Deposito **************", 20, 30);
            doc.text("*******************************************************", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+cuenta, 20 ,50);
            doc.text("Monto acreditado: $"+monto, 20 ,60);
            doc.text("Nuevo saldo disponible: $"+total, 20 ,70);
            facturaFinal = 'Comprobante_deposito_'+fechaActual()+'.pdf';
            
            break;
        case 2:
            doc.text("*******************************************************", 20, 20);
            doc.text("************* Comprobante de Retiro **************", 20, 30);
            doc.text("*******************************************************", 20, 40);
            doc.text("Numero de cuenta origen del monto retirado: "+cuenta, 20, 50);
            doc.text("Monto retirado: $"+monto, 20 ,60);
            doc.text("Saldo restante: $"+total, 20 ,70);
            facturaFinal = 'Comprobante_retiro_'+fechaActual()+'.pdf';
            break;
        case 3:
            doc.text("*****************************************************************************", 20, 20);
            doc.text("*********** Comprobante pago de Servicios de agua potable *********", 20, 30);
            doc.text("*****************************************************************************", 20, 40);
            doc.text("Numero de cuenta origen del monto debitado: "+cuenta, 20 ,50);
            doc.text("numero cuenta de usuario Anda: "+cuentaAnda, 20 ,70);
            doc.text("Monto debitado: $"+monto, 20 ,60);
            facturaFinal = 'Comprobante_pago_ANDA_'+fechaActual()+'.pdf';
            break;
        case 4:
            doc.text("**********************************************************************", 20, 20);
            doc.text("********* Comprobante pago de Servicios de energía eléctrica *********", 20, 30);
            doc.text("**********************************************************************", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            facturaFinal = 'Comprobante_pago_CAESS_'+fechaActual()+'.pdf';
            break;
        case 5:
            doc.text("***************************************************************", 20, 20);
            doc.text(" ********* Comprobante pago de Servicio de Internet *********", 20, 30);
            doc.text("***************************************************************", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            facturaFinal = 'Comprobante_pago_Internet_'+fechaActual()+'.pdf';
            break;
        default:
            doc.text("***************************************************************", 20, 20);
            doc.text(" ********* Comprobante pago de Servicio de telefonía *********", 20, 30);
            doc.text("***************************************************************", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            facturaFinal = 'Comprobante_pago_telefonia_'+fechaActual()+'.pdf';
    }
    doc.setFont("courier", "normal");
    doc.save(facturaFinal);
}