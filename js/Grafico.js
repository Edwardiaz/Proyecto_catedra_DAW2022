function transaccionFuncion(value) {
  
// Obtener una referencia al elemento canvas del DOM
const grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Deposito", "Retiro", "PagoAgua", "PagoEnergia","PagoInternet","PagoTelefono"];
// Podemos tener varios conjuntos de datos. Comencemos con uno
const TrasnsaccionesRealizadas = {
    label: "Montos en $",
    data: ['sumadebito','sumaretiro','sumafacturas'], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
    
montoTemp = [ window.localStorage.getItem('montoArray') ];
    descripcionTemp = [ window.localStorage.getItem('descripcionArray') ];

    montoArray = montoTemp[0].split(',');
    descripcionArray = descripcionTemp[0].split(',');

    var contador;
    var sumaDebito = 0, sumaRetiro = 0, sumaFacturas = 0;

    for (contador = 0; contador < descripcionArray.length; contador++) {
        if (descripcionArray[contador]=='Deposito'){
            sumaDebito = sumaDebito + parseFloat(montoArray[contador]);
        } else if (descripcionArray[contador]=='Retiro'){
            //En la grafica dentro de data multiplica (-1*sumaRetiro) para tener valor positivo xd
            sumaRetiro = sumaRetiro + parseFloat(montoArray[contador]);
        } else {
            sumaFacturas = sumaFacturas + parseFloat(montoArray[contador]);
        }
        
    
new Chart(grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            TrasnsaccionesRealizadas,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
}}