
class Empleado {
    constructor(nombre,salario, edad, años) {
      this.nombre = nombre.toUpperCase();
      this.salario = parseFloat(salario);
      this.edad = parseFloat(edad);
      this.años = parseFloat(años);
    }
  }
  
  const empleado = [];
  
  empleado.push(new Empleado("carlos", 5000, 34, 3));
  empleado.push(new Empleado("pedro", 1000, 23, 5));
  empleado.push(new Empleado("juliana", 9000, 31, 1));
  empleado.push(new Empleado("fabian", 4500, 26, 2));
  empleado.push(new Empleado("Bruno", 3500, 25, 2));
  empleado.push(new Empleado("Pedro", 1500, 27, 6));
  empleado.push(new Empleado("armando", 3500, 20, 3));
  
  let busca = prompt("¿Nombre del empelado?");
  
  let nombreEmpleado = empleado.find((item) => item.nombre == busca.toUpperCase());
  
  
  document.write(
    "<h1>Nombre empleado: " +
    nombreEmpleado.nombre +
      "</h1>" +
      "<p>Salario actual : " +
      nombreEmpleado.salario +
      "<br>La Edad que tiene el empleado : " +
      nombreEmpleado.edad +
      "<br>los Años activo en la empresa: " +
      nombreEmpleado.años +
      "</p>"
  );