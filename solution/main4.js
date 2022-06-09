var i =0;
var images = [];
var time = 2000;
// image list
 images[0]="img/sam3.jpg";
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