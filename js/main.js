function mostrarModal() {
  var ancho = 300;
  var alto=300;
  var x = (screen.width / 2)-(ancho / 2);
  var y = (screen.height / 2) - (alto / 2);
  modal.style.left = x + "px";
  modal.style.top = y + "px";
  modal.style.visibility = "visible";
}
