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

if(closeBtn && promo){
  closeBtn.addEventListener("click", () => {
    promo.classList.add("hide");
  });

  setTimeout(() => {
    promo.classList.add("hide");
  }, 6000);
}

document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');
  const closeBtn = document.getElementById('closeLightbox');

  items.forEach(item => {
    item.addEventListener('click', () => {

      const image = item.querySelector('img');
      const vid = item.querySelector('video');

      // Reset previo
      img.style.display = 'none';
      video.style.display = 'none';
      video.pause();
      video.currentTime = 0;
      video.src = "";

      // IMAGEN
      if(image){
        img.src = image.src;
        img.style.display = 'block';
      }

      // VIDEO
      if(vid){
        const source = vid.querySelector('source');
        video.src = source.src;
        video.style.display = 'block';

        video.currentTime = 0;
        video.play();
      }

      lightbox.classList.add('active');
    });
  });

  // CERRAR con botón
  closeBtn.addEventListener('click', () => {
    closeLightbox();
  });

  // CERRAR haciendo click fuera
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
      closeLightbox();
    }
  });

  function closeLightbox(){
    lightbox.classList.remove('active');

    video.pause();
    video.currentTime = 0;
    video.src = "";

    // detener videos del grid (por si alguno quedó sonando)
    document.querySelectorAll('.gallery video').forEach(v => {
      v.pause();
      v.currentTime = 0;
    });
  }

});