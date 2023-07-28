import { Cuenta } from "./cuenta";

let cuenta1 = new Cuenta("Felipe", 1000000)

cuenta1.mostrarDatos();
cuenta1.IngresarCanitdad(-1000000);
cuenta1.RetirarCantidad(500000)