const nombre = prompt("Ingresa tu nombre:");
const NacimientoTexto = prompt("Ingresa tu año de nacimiento:");
const ciudad = prompt("Ingresa tu ciudad:");

const Nacimiento = parseInt(NacimientoTexto);
const edad = 2026 - Nacimiento;

const mensaje = "Hola " + nombre + " de " + ciudad + ", tienes " + edad + " años.";

alert(mensaje);
console.log(mensaje);