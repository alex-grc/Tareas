//Crear una variable llamada mes y que tenga asignado por defecto el valor 10.

mes = prompt("Elija un numero del 1-10");

//Verifique si el valor de mes está entre 12 y 2 (12, 1 o 2)

if (mes<=2 || mes==12) {
  window.alert("es invierno"); //imprima en pantalla “es invierno”, si el valor de mes está entre 12 y 2
}

if (mes>2 && mes<=5) {
  window.alert("es primavera"); //entre 3 y 5, que imprima en pantalla “es primavera”,
}

if (mes>5 && mes<=8) {
  window.alert("es verano"); //valor de mes se encuentra entre 6 y 8 que imprima en pantalla “es verano”
}

if (mes>8 && mes<=11) {
  window.alert("es otoño"); //encuentra entre 9 y 11 que imprima en pantalla “es otoño”.
}

//Al finalizar debe imprimir en pantalla un mensaje que indique su número de carné y su nombre completo.

window.alert("21000793 Bryan Alejandro Garcia Illescas");
