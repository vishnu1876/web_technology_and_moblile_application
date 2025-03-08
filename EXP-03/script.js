function validate(){
    //first name
    var fn = document.getElementById("first_name").value;
    if (!fnval(fn)){
        alert("Enter the first name atlest longer than 3 character and only contain letters");
        return false;
    }
    //last name 
    var ln = document.getElementById("last_name").value;
    if(ln.length == 0){
        alert("Please Enter the last name");
        return false;
    }
    //phone number
    var ph = document.getElementById("phnumber").value;
    if(typeof(ph) != 'number' && ph.length != 10){
        alert("Please Enter the correct phone number with 10 digits");
        return false;
    }
    //Password 
    var passw = document.getElementById("pass").value;
    if(!passval(passw)){
        alert("Enter a password with a uppercase,number,special character and it need to be atlease 8 character in it");
        return false;
    }
    //address
    var add = document.getElementById("address").value;
    if(add.length == 0){
        alert("Please Enter your address");
        return false; 
    }
    else{
        alert("The form is submitted successfully");
        return true;
    }
}
function fnval(fn){
    if (fn.length >3 && /^[A-Za-z]+$/.test(fn)){
        return true;
    }
    else{
        return false;
    }
}
function passval(pass){
    if(
        pass.length >=8 &&
        /[!@#$%^&*(),.?":{}|<>]/.test(pass) &&
        /[A-Z]/.test(pass) &&
        /[0-9]/.test(pass) 
    ){
        return true;
    }
    else{
        return false;
    }
}