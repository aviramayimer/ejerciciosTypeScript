import { Persona } from "./Persona";

let persona1 = new Persona("Aquiles Vaesa", 30, 3247658792, "calee 54 N° 345", "Popayan");

let persona2: Persona = new Persona("Avirama", 28, 3215233476, "calla 61 n # 345", "Popayan");

let persona3: Persona = new Persona("Pablo ", 20, 3224568923, "carrera 33 # 328", "Cali");

let persona4: Persona = new Persona("Juan valdez", 34, 3074569845, "carrera 5 n # 923 ", "Jamundi");

let persona5 = new Persona("santiago perez ", 40, 3187344509, "Carrera 34 # 456", "Bogota");

/*console.log(persona2.getTelefono());
console.log(persona1.getNombre());

persona1.setNombre("Juan");
console.log(persona1.getNombre());

persona2.setEdad(50);
console.log(persona2.getEdad());*/
persona2.mostrarDatos();
//persona2.mostrarDatos();
let edad = persona2.getEdad();
persona2.mayorEdad(edad);




