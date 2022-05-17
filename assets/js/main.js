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
