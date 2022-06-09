
var pass_input = document.querySelector('.navigation-dots form input[type="password"]');
var eye_icon=document.querySelector('.navigation-dots form .fa-eye');

eye_icon.onclick = () => {
    if(pass_input.type == "password"){
        pass_input.type = "text";
        eye_icon.classList.add('active');
    }else{
        pass_input.type="password";
        eye_icon.classList.remove('active')
    }
}