// var Name= document.getElementById("Name").Value;
// var Number= document.getElementById("Number").Value;
function submitform(){
    var Name= document.getElementById('name').value;
    var number= document.getElementById('number').value;
    var Email= document.getElementById('email').value;
    var DOB= document.getElementById('date').value;
    var password=document.getElementById('password').value;
    if(Name=="" && number=="") {
        alert("input fields are empty");
    }else if(Name == ""){
        alert("Name is empty");
    }else if (number ==""){
        alert("Number is empty");
    }else if (Email ==""){
        alert("email is empty");
    }else if (DOB ==""){
        alert("age is empty");
    }else if (Male,female  ==""){
        alert(" chose sex");
    } else if (password =="") {
        alert("password is empty");
    } else{
        alert("data submitted successfully");
    }
};
// console.log(solution)