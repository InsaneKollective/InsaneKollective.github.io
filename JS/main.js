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
let nombre = document.getElementById("nombre").value;
let mensaje = document.getElementById("mensaje").value;

let url = "https://wa.me/573133742291?text="
+ "Hola!%0A"
+ "Soy " + nombre + "%0A"
+ mensaje;

window.open(url, "_blank");
}