barra.addEventListener(“change”,function(ev){…},true);

ev.currentTarget.value;

var reproductor = document.getElementById(“reproductor”);

1.  barra.addEventListener(“change”,function(ev){  2.    reproductor.volume = ev.currentTarget.value; 3.  },true);