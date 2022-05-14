

function clickMe(){
    var doc = new jsPDF();
    //window.jsPDF = window.jspdf.jsPDF;

    var cuenta = document.getElementsByTagName('cuenta').value;
    var monto = document.getElementsByTagName('monto').value;

    doc.text();
    doc.text("Comprobante de pago.", 20, 20);
    doc.text("-------------------", 20, 20);
    doc.text("Numero de cuenta del monto acreditado: "+cuenta, 20 ,20);
    doc.text("Monto de la transacción: "+monto, 20 ,20);

    doc.setFont("courier", "normal");
    doc.save("Prueba.pdf");

    /* Para cambiar el tamaño a la pagina
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [4, 2]
    });
    
    doc.text("Hello world!", 1, 1);
    doc.save("two-by-four.pdf");
    */

}