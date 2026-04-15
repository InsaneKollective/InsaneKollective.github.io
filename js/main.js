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
  let contacto = document.getElementById("contacto1").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
	
  if(nombre === "" || contacto === "" || mensaje === ""){
    alert("Completa todos los campos");
    return;
  }

  let texto = `Mensaje desde Insane WEB 
 Nombre: ${nombre}
 Contacto: ${contacto}
 Mensaje: ${mensaje}`;

  let url = "https://wa.me/573208145943?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");

  // limpiar campos
  document.getElementById("nombre").value = "";
  document.getElementById("contacto1").value = "";
  document.getElementById("mensaje").value = "";
}
const promo = document.getElementById("promo-overlay");
const closeBtn = document.getElementById("closePromo");

// cerrar manual
closeBtn.addEventListener("click", () => {
	promo.classList.add("hide");
});

// cerrar automático (6 segundos)
setTimeout(() => {
	promo.classList.add("hide");
}, 6000);
