function checkPassWord(){
   let newPass = document.getElementById('newPassWord').value;
   let confirmPass = document.getElementById('confirmPassWord').value;
   if(newPass === confirmPass){
    document.getElementById('confirmationMSG').innerHTML = "Password Match, thankyou.";
   }else{
    document.getElementById('confirmationMSG').innerHTML = "Password does not match, re-enter."
   }
}