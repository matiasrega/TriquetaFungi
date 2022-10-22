/* let NombreUsuario = prompt("Ingrese nombre de usuario");

console.log("Hola amigo" + " " + NombreUsuario);

if (
  NombreUsuario == "matias" ||
  NombreUsuario == "Matias" ||
  NombreUsuario == "Pedro" ||
  NombreUsuario == "Pedrito" ||
  NombreUsuario == "Miguel"
) {
  console.log("Login OK");
} else {
  console.log("Ingresa un nombre valido");
}

let NumeroUsuario = prompt("Escribi cualquier numero");

for (let i = NumeroUsuario; i <= 100; i++) {
  console.log(i);
  break;
} */

/*let SeleccioUsuario;  = prompt(
  "Ingrese la Marca del equipo que desea comprar"
).toLowerCase(); */

/* while (
  SeleccioUsuario != "samsung" ||
  SeleccioUsuario != "samsung tv" ||
  SeleccioUsuario != "lg" ||
  SeleccioUsuario != "noblex"
) {
  SeleccioUsuario = prompt(
    "Ingrese la Marca del equipo que desea comprar"
  ).toLowerCase();

  switch (SeleccioUsuario) {
    case "samsung":
    case "samsung tv":
      console.log("Usted compro un equipo marca Sansung");
      break;
    case "lg":
      console.log("Usted compro un equipo marca Lg");
      break;
    case "noblex":
      console.log("usted compro un equipo marca Noblex");
      break;
    default:
      console.log("Error de seleccion. No existe el producto");
      break;
  }
}
 */

let VariedadSeleccionable = prompt(
  "Elegi el tipo de producto para mas opciones. Tenes disponible Setas, Propagacion y alcoholaturas"
).toLowerCase();

if (VariedadSeleccionable == "setas") {
  alert("Seleccionaste la opcion de Setas");
  let SetasSeleccion = prompt(
    "Podes Elegir entre Ganoderma Lucidum (Reishi), Hericium Erinaceus (Melena de Leon) y Cordiceps Militaris"
  ).toLowerCase();
  while (
    SetasSeleccion != "ganoderma lucidum" ||
    SetasSeleccion != "reishi" ||
    SetasSeleccion != "hericium erinaceus" ||
    SetasSeleccion != "melena de leon" ||
    SetasSeleccion != "cordiceps militaris"
  ) {
    switch (SetasSeleccion) {
      case "ganoderma lucidum":
      case "reishi":
        alert("Felicitaciones: Compraste 1 unidad de Ganoderma Lucidum");
        break;
      case "hericium erinaceum":
      case "melena de leon":
        alert("Felicitaciones: Compraste 1 unidad de Hericium Erinaceus");
        break;
      case "cordiceps militaris":
      case "cordiceps":
        alert("Felicitaciones: Compraste 1 unidad de Cordiceps Militaris");
        break;
      default:
        alert("Ingresa una variedad que tengamos en stock");
        break;
    }
  }
} else if (VariedadSeleccionable == "propagacion") {
  alert(prompt("Seleccionaste la opcion de Propagacion"));
} else if (VariedadSeleccionable == "alcoholaturas") {
  alert(prompt("Seleccionaste la opcion de Alcoholaturas"));
} else {
  alert("Ingresa un tipo de producto valido");
}

/* while (VariedadSeleccionable = ) */
