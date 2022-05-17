//Definimos nuestras variables con ingreso de nombre, apellido, carrera y nota de aprobación
var nombre = prompt("Ingrese nombre: ");
var apellido = prompt("Ingrese apellido: ");
var carrera = prompt("Ingrese la carrera: ");
var notaaprobacion = prompt("Ingrese nota de aprobación: ", "4.0");

//****INGRESO DE DATOS PARA LA TABLA**** 
//*Se ingresan lo datos para la tabla
var ramo1 = prompt("Ingrese nombre del primer ramo: ");//nombre del 1er ramo
var nota1ramo1;//1era nota de 1er ramo
// Se condicionan valores a que sean solo entre la nota 1.0 a 7.0
    do {
      nota1ramo1 = prompt("Ingrese Nota 1 de "+ramo1, "7.0");
      if (nota1ramo1 == "" || isNaN(nota1ramo1) || nota1ramo1>7 || nota1ramo1<=0){
        alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
      }
    } while (nota1ramo1 == "" || isNaN(nota1ramo1) || nota1ramo1>7 || nota1ramo1<=0)


var nota2ramo1;//2da nota de 1er ramo
do {
  nota2ramo1 = prompt("Ingrese Nota 2 de "+ramo1, "7.0");
  if (nota2ramo1 == "" || isNaN(nota2ramo1) || nota2ramo1>7 || nota2ramo1<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota2ramo1 == "" || isNaN(nota2ramo1) || nota2ramo1>7 || nota2ramo1<=0)


var nota3ramo1;//3era nota de 1er ramo
do {
  nota3ramo1 = prompt("Ingrese Nota 3 de "+ramo1, "7.0");
  if (nota3ramo1 == "" || isNaN(nota3ramo1) || nota3ramo1>7 || nota3ramo1<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota3ramo1 == "" || isNaN(nota3ramo1) || nota3ramo1>7 || nota3ramo1<=0)


//se parsean las 3 notas a float
nota1ramo1 = parseFloat(nota1ramo1);
nota2ramo1 = parseFloat(nota2ramo1);
nota3ramo1 = parseFloat(nota3ramo1);
//se genera promedio y se guarda en variable promedioramo1
var promedioramo1 = ((nota1ramo1+nota2ramo1+nota3ramo1)/3).toFixed(2);


var ramo2 = prompt("Ingrese nombre del segundo ramo: ");

var nota1ramo2;
do {
  nota1ramo2 = prompt("Ingrese Nota 1 de "+ramo2, "7.0");
  if (nota1ramo2 == "" || isNaN(nota1ramo2) || nota1ramo2>7 || nota1ramo2<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota1ramo2 == "" || isNaN(nota1ramo2) || nota1ramo2>7 || nota1ramo2<=0)


var nota2ramo2;
do {
  nota2ramo2 = prompt("Ingrese Nota 2 de "+ramo2, "7.0");
  if (nota2ramo2 == "" || isNaN(nota2ramo2) || nota2ramo2>7 || nota2ramo2<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota2ramo2 == "" || isNaN(nota2ramo2) || nota2ramo2>7 || nota2ramo2<=0)


var nota3ramo2;
do {
  nota3ramo2 = prompt("Ingrese Nota 3 de "+ramo2, "7.0");
  if (nota3ramo2 == "" || isNaN(nota3ramo2) || nota3ramo2>7 || nota3ramo2<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota3ramo2 == "" || isNaN(nota3ramo2) || nota3ramo2>7 || nota3ramo2<=0)


nota1ramo2 = parseFloat(nota1ramo2);
nota2ramo2 = parseFloat(nota2ramo2);
nota3ramo2 = parseFloat(nota3ramo2);
promedioramo2 = ((nota1ramo2+nota2ramo2+nota3ramo2)/3).toFixed(2);


var ramo3 = prompt("Ingrese nombre del tercer ramo: ");

var nota1ramo3;
do {
  nota1ramo3 = prompt("Ingrese Nota 1 de "+ramo3, "7.0");
  if (nota1ramo3 == "" || isNaN(nota1ramo3) || nota1ramo3>7 || nota1ramo3<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota1ramo3 == "" || isNaN(nota1ramo3) || nota1ramo3>7 || nota1ramo3<=0)


var nota2ramo3;
do {
  nota2ramo3 = prompt("Ingrese Nota 2 de "+ramo3, "7.0");
  if (nota2ramo3 == "" || isNaN(nota2ramo3) || nota2ramo3>7 || nota2ramo3<=0){
    alert("Nota fuera de rango. Ingrese nota entre el 1.0 y 7.0");
  }
} while (nota2ramo3 == "" || isNaN(nota2ramo3) || nota2ramo3>7 || nota2ramo3<=0)

//FIN DE INGRESO DE DATOS PARA LA TABLA


nota1ramo3 = parseFloat(nota1ramo3);
nota2ramo3 = parseFloat(nota2ramo3);
//la nota de aprobación pedida arriba, se guarda en notaaprobación y ahora se parsea a float
notaaprobacion = parseFloat(notaaprobacion);
//se genera la nota necesaria para aprobar y se guarda en nota3ramo3necesaria
nota3ramo3necesaria = ((notaaprobacion*3)-(nota1ramo3+nota2ramo3)).toFixed(2);

// DESPLIEGUE DE TABLA CON SUS DATOS *encabezado de la tabla
document.write("<div class='container mt-3'>");
document.write("<h1>NOTAS FINALES</h1>");
// DESPLIEGUE DE TABLA CON SUS DATOS PERSONALES
document.write("<div>");
document.write("<table class='table'>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>Nombre</th>");
document.write("<td>"+ nombre +" "+ apellido +"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>Carrera</th>");
document.write("<td>"+carrera+"</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");

// DESPLIEGUE DE TABLA CON NOTAS
document.write("<table class='table'>");
document.write("<thead class='bg-dark text-white'>");//inicio encabezado a nuestra tabla
document.write("<tr>");// incio estructura de columnas en nuestra tabla
document.write("<th scope='col'>Ramo</th>");//definir el nombre o datos que tendrán los encabezados
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("</thead>");
// contenido de la tabla
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>"+ramo1+"</th>");
document.write("<td>"+nota1ramo1+"</td>");
document.write("<td>"+nota2ramo1+"</td>");
document.write("<td>"+nota3ramo1+"</td>");
document.write("<td>"+promedioramo1+"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ramo2+"</th>");
document.write("<td>"+nota1ramo2+"</td>");
document.write("<td>"+nota2ramo2+"</td>");
document.write("<td>"+nota3ramo2+"</td>");
document.write("<td>"+promedioramo2+"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>"+ramo3+"</th>");
document.write("<td>"+nota1ramo3+"</td>");
document.write("<td>"+nota2ramo3+"</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table>");
document.write("<section>");

//EJECUCIÓN DE FRASE *Frase con la nota necesaria para aprobar, según la nota de aprobación 
switch(true) {
  case nota3ramo3necesaria>7.0:
    document.write("<div>");
    document.write("<p>Para aprobar JavasScript, deberás hacer el curso de nuevo, debido a tus paupérrimas notas.</p>");
    document.write("</div>");    
    break;
  case nota3ramo3necesaria<0:
    document.write("<div>");
    document.write("<p>Felicitaciones, mereces 1 año de Baltica. Para aprobar JavasScript, ni siquiera necesitas Nota 3</p>");
    document.write("</div>");  
    break;
  default:
    document.write("<div>");
    document.write("<p>Para aprobar JavasScript con nota "+ notaaprobacion +" necesitas un "+ nota3ramo3necesaria +"  en la Nota 3.</p>");
    document.write("</div>");
}
//FIN DE EJECUCIÓN DE FRASE

document.write("</section>");
document.write("</div>");
//FIN DE DESPLIEGUE DE TABLA

