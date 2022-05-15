

function descargar(){
    var doc = new jsPDF();
    
    //var cuenta = document.getElementsByTagName('cuenta').value;
    //var monto = document.getElementsByTagName('monto').value;


    //TODO: Hacer un if-else para saber que transaccion se hizo y saber que pdf descargar todo para saber que dato traer del LocalStorage
    doc.text("-------------------------------------------------", 20, 20);
    doc.text("Comprobante de Transacción.", 20, 30);
    doc.text("-------------------------------------------------", 20, 40);
    doc.text("Numero de cuenta del monto acreditado: "+250, 20 ,50);
    doc.text("Monto de la transacción: "+150, 20 ,60);

    doc.setFont("courier", "normal");
    doc.save("Prueba.pdf");

}