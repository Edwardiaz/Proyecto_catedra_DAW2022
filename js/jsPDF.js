

function descargar( opcion ){
    var doc = new jsPDF();
    
    //var cuenta = document.getElementsByTagName('cuenta').value;
    //var monto = document.getElementsByTagName('monto').value;


    //TODO: AHora falta editar cada caso para que agarre los valores del LocalStorage
    cuenta = window.localStorage.getItem('cuenta');

    switch(opcion){
        case 1:
            doc.text("-------------------------------------------------", 20, 20);
            doc.text("Comprobante de Deposito.", 20, 30);
            doc.text("-------------------------------------------------", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+window.localStorage.getItem('monto'), 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            break;
        case 2:
            doc.text("-------------------------------------------------", 20, 20);
            doc.text("Comprobante de Retiro.", 20, 30);
            doc.text("-------------------------------------------------", 20, 40);
            doc.text("Numero de cuenta del monto retirado: -"+window.localStorage.getItem('monto'), 20 ,50);
            doc.text("Saldo restante: "+window.localStorage.getItem('total'), 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            break;
        case 3:
            doc.text("-------------------------------------------------", 20, 20);
            doc.text("Comprobante pago de Servicios de agua potable.", 20, 30);
            doc.text("-------------------------------------------------", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            break;
        case 4:
            doc.text("-------------------------------------------------", 20, 20);
            doc.text("Comprobante pago de Servicios de energía eléctrica.", 20, 30);
            doc.text("-------------------------------------------------", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            break;
        case 5:
            doc.text("-------------------------------------------------", 20, 20);
            doc.text("Comprobante pago de Servicio de Internet.", 20, 30);
            doc.text("-------------------------------------------------", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
            break;
        default:
            doc.text("-------------------------------------------------", 20, 20);
            doc.text("Comprobante pago de Servicio de telefonía.", 20, 30);
            doc.text("-------------------------------------------------", 20, 40);
            doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
            doc.text("Monto de la transacción: "+150, 20 ,60);
    }
    doc.setFont("courier", "normal");
    doc.save("Prueba.pdf");
}