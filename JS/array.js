
//EN ESTA PARTE DEL CODIGO ASIGNO LOS VALORES 
let empleado = ["Carlos", "Mateo", "Ricardo", "Clara", "Pablo", "Edgar","Diego"];

//A LOS DIAS ASIGNAMOS QUIEN DESCANSA ESTA SEMANA
document.write("Dia de descanso del trabajador  semana 26 : "+ "<br>");    
document.write("Lunes descansa : " + empleado[0] + "<br>");   
document.write("Martes descansa : " + empleado[3] + "<br>");
document.write("Miercoles descansa : " + empleado[5] + "<br>");
document.write("Juves descansa : " + empleado[1] + "<br>");
document.write("Viernes descansa : " + empleado[4] + "<br>");
document.write("Sabado descansa : " + empleado[6] + "<br>");
document.write("Domingo descansa : " + empleado[2] + "<br>");

//SE HACEN CAMBIOS O IMPREVISTOS PARA LA SIGUIENTE SEMANA
empleado[2] = "Pablo";
empleado[3] = "Diego";
empleado.pop();
empleado.splice(1, 0, "Fabio", "Andres");
empleado.unshift("Ricardo");

//SE IMRIME UNA NUEVA SEMANA CON LOS CAMBIOS YA REALIZADOS
document.write("<br>");
document.write("Dia de descanso del trabajador  semana 27 : " + "<br>");
document.write("Lunes descansa : " + empleado[0] + "<br>"); 
document.write("Martes descansa : " + empleado[1] + "<br>");
document.write("Miercoles descansa : " + empleado[2] + "<br>");
document.write("Jueves descansa : " + empleado[3] + "<br>");
document.write("Viernes descansa : " + empleado[4] + "<br>");
document.write("sabados descansa : " + empleado[5] + "<br>");
document.write("Domingo descansa :  " + empleado[6] + "<br>");



