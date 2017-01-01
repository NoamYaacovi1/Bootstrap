function valid() {

var checkpass = check_password();

if(
    checkpass
)
alert("thanks for signing up");

}

function check_password() {

    var pass = $("#password").val();
    alert(pass);
    if (pass.length < 8){
        alert("the password is not valid")
        return false;
    }
    return true;

}

/*$(document).ready(function (){
    alert("Hello");
});*/