window.addEventListener("load",function(){
    console.log('Entre');
    document.getElementById('loader').classList.toggle("loader2");
});

var i=0;
var txt = 'Hola, Bienvenido a mi portafolio digital';
var speed = 100; /*Velocidad*/
console.log(txt.length);
function write(){
    if(i < txt.length){
        document.getElementById('texto').innerHTML += txt.charAt(i);
        i++;
        setTimeout(write, speed);
        if(i >= 40){
            i=0;
            if(i < txt.length){
                document.getElementById('texto').innerHTML='';
                document.getElementById('texto').innerHTML += txt.charAt(i);
                i++;
            }
        }
    }
}
write();

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
