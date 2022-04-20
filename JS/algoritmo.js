//ALGORITMO PARA ESCRIBIR NOMBRE DE ESTUDIANTE DAR UNA NOTA DEPUES EVALUAR Y DAR RESULTADO EN MENSAJE

for (i = 1; i<=5; i++){
let ingresarNombre = prompt(" Ingrese nombre del Estudiante : ");
    //PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE NOTA
    let nota = prompt("Introduce tu Nota : ");
    //SI SE INTRODUJO UN NÚMERO
    if (Number(nota) == nota) {
        //SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
        if (nota > 0 && nota <= 10) {
            if (nota < 3) {
                document.write( "<h1>Estudiantes es :</h1>"  + ingresarNombre + "<h4> y su calificaion es Deficiente</h4>");
            }
            else if (nota < 5) {
                document.write( "<h1>Estudiantes es :</h1>" + ingresarNombre + "<h4> y su calificaion es Insuficiete</h4>");
            }
            else if (nota < 6) {
                document.write( "<h1>Estudiantes es :</h1>" + ingresarNombre + "<h4> y su calificaion es Aceptable</h4>");
            }
            else if (nota < 7) {
                document.write( "<h1>Estudiantes es :</h1>" + ingresarNombre + "<h4> y su calificaion es Bien</h4>");
            }
            else if (nota < 8) {
                document.write( "<h1>Estudiantes es :</h1>" + ingresarNombre + "<h4> y su calificaion es Sobresaliente</h4>");
            }
            else if (nota >= 9) {
                document.write( "<h1>Estudiantes es :</h1>" + ingresarNombre + "<h4> y su calificaion es Excelente</h4>");
            }
        }
        //SI LA NOTA NO ES ENTRE 0 Y 10
        else {
            alert("Nota erronea");
        }
        
    }
    //SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
    else {
        if (nota != undefined){ 
            alert("Introduce un numero valido");
        }
    }
}