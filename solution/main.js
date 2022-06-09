// var Navbar = document.querySelector('.navbar');
// document.querySelector('#menu-btn').onclick = () => {
//     Navbar.classList.toggle('active');
// }
var i =0;
var images = [];
var time = 2000;
// image list
 images[0]="img/nd.jpg";
images[1] ="img/nd2.jpg";
images[2] ="img/nd3.jpg";
images[3] ="img/nd4.jpg";
// change image
function changeimg (){
    document.slider.src=images[i];
    if (i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout('changeimg()', time)
}
window.onload = changeimg;
// const text = document.querySelector('.fancy');
// const strText = Text.Textcontent;
// // const splitText = strText.split("");
// Text.Textcontent ="";
// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<spn>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick,50);

// function onTick(){
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if (char === splitText.length){
//         complete();
//         return;
//     }
// }
// function complete() {
//     clearInterval(timer);
//     timer=null
// }