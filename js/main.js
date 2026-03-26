$(document).ready(function() {

    $(".card").hover(
        function() {
            $(this).addClass("border-danger");
        },
        function() {
            $(this).removeClass("border-danger");
        }
    );

});
$(document).ready(function() {

    setInterval(function() {
        $(".glitch-bg").css("opacity", Math.random());
    }, 200);

});
$(document).ready(function(){

    $("#showTickets").click(function(){

        $("#ticketsSection").slideToggle(400);

        $('html, body').animate({
            scrollTop: $("#ticketsSection").offset().top - 80
        }, 500);

    });

});
function enviarWhatsApp(){

  let nombre = document.getElementById("nombre").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
	
  if(nombre === "" || mensaje === ""){
    alert("Completa todos los campos");
    return;
  }

  let texto = `🔥 INSANE CONTACTO 🔥
👤 Nombre: ${nombre}
💬 Mensaje: ${mensaje}`;

  let url = "https://wa.me/573208145943?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");

  // limpia el formulario después de enviar
  document.getElementById("nombre").value = "";
  document.getElementById("mensaje").value = "";
}
