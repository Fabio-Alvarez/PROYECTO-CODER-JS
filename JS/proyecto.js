

class empleado {
    constructor(nombre, cargo, edad, añosActivo) {
      this.empleado = nombre.toUpperCase();
      this.cargo = parseFloat(cargo);
      this.edad = parseFloat(edad);
      this.añosActivo = parseFloat(añosActivo);
    }
  }
  
  const empleado = [];
  
  empleado.push(new empleado("carlos", pintor, 34, 3));
  empleado.push(new empleado("pedro", arquitecto, 24, 5));
  empleado.push(new empleado("juliana", ing-civil, 31, 1));
  empleado.push(new empleado("fabian", cocina, 26, 2));
  empleado.push(new empleado("Bruno", dibujante, 25, 2));
  
  let busca = prompt("¿Nombre del empelado?");
  
  let nombreEmpleado = empleado.find((item) => item.nombre == busca.toUpperCase());
  
  
  document.write(
    "<h1>Nombre empleado: " +
    nombreEmpleado.nombre +
      "</h1>" +
      "<p> Cargo el cual ocupa: " +
      nombreEmpleado.cargo +
      "<br>La Edad que tiene el empleado : " +
      nombreEmpleado.edad +
      "<br>los Años activo en la empresa: " +
      nombreEmpleado.añosActivo +
      "</p>"
  );