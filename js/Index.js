import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Empleado from "./Cl_Empleado.js";

const salida = document.getElementById("salida");

let empresa = new Cl_Empresa();

let empleado = new Cl_Empleado("Juan", "Obrero", 100);
let empleado2 = new Cl_Empleado("Ana", "Obrero", 120);
let empleado3 = new Cl_Empleado("Lin", "Administrativo", 200);
let empleado4 = new Cl_Empleado("Mary", "Obrero", 50);
let empleado5 = new Cl_Empleado("Carlos", "Administrativo", 150);

empresa.procesarEmpleados(empleado);
empresa.procesarEmpleados(empleado2);
empresa.procesarEmpleados(empleado3);
empresa.procesarEmpleados(empleado4);
empresa.procesarEmpleados(empleado5);

salida.innerHTML = `
${empleado._nombre} tendrá un sueldo de $${empleado.mostrarSueldos()}<br>
${empleado2._nombre} tendrá un sueldo de $${empleado2.mostrarSueldos()}<br>
${empleado3._nombre} tendrá un sueldo de $${empleado3.mostrarSueldos()}<br>
${empleado4._nombre} tendrá un sueldo de $${empleado4.mostrarSueldos()}<br>
${empleado5._nombre} tendrá un sueldo de $${empleado5.mostrarSueldos()}<br>
<br>
La empresa tiene que pagar: $${empresa.mostrarSueldos()}
`