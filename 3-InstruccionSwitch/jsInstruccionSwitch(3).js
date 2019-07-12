//al seleccionar un mes informar.
//si es Febrero: " Este mes no tiene más de 29 días."
//si NO es Febrero: "Este mes tiene 30 o más días"//

function mostrar()
{
//tomo la edad
var Enero = document.getElementById('mes').value;

//alert (mesDelAño);

switch (Enero) {
  case "Enero":
    alert("Este mes tiene 30 o más días");
    break;
  case "Febrero":
    alert("Este mes no tiene mas de 29 dias");
  case "Marzo":
    alert("Este mes tiene 30 o más días");
    break;
  case "Abril":
    alert("Este mes tiene 30 o más días");
    break;
  case "Mayo":
    alert("Este mes tiene 30 o más días");
  case "Junio":
    alert("Este mes tiene 30 o más días");
    break;
  case "Julio":
    alert("Este mes tiene 30 o más días");
    break;
  case "Agosto":
    alert("Este mes tiene 30 o más días")
    break;
  case "Septiembre":
    alert("Este mes tiene 30 o más días");
    break;
  case "Octubre":
    alert("Este mes tiene 30 o más días");
    break;
  case "Noviembre":
    alert("Este mes tiene 30 o más días");
    break;
  case "Diciembre":
    alert("Este mes tiene 30 o más días");


}


}//FIN DE LA FUNCIÓN
