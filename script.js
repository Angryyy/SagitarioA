const DivImg = document.getElementById("DivImg")
const imagenCompleta = document.getElementById("complete");
function cerrar(){
    DivImg.style.display="none";
    DivImg.style.cursor="zoom-out";
}
function  openImg(e){
    DivImg.style.display="flex";
    imagenCompleta.src = e;
}

let audio = new Audio("sound.mp3");
let btn = document.getElementById("button");
let pause = document.querySelector(".pause");

btn.addEventListener("click",function(){
    audio.play();
    pause.innerHTML = `<h1>⏸</h1>`;
});
pause.addEventListener("click",function(){
    pause.innerHTML = `<h1></h1>`;
    audio.pause();
})
AOS.init();



    