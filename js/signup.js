var username = document.getElementById('username');
var email= document.getElementById('email');
var pass = document.getElementById('pass');
var cpass = document.getElementById('cpass');
var button = document.getElementById('sign');
var error = document.getElementById('error');



// var checkform = function
var checkform = ()=>{

    if (username.value ==''){
        return '**Please fill the username**';
    }
    
    if(username.value.length <= 0 || username.value.length >20){
        return '**user length must be between 20**' ;
    }


    if(email.value == ''){
        return '**Please fill the email**';
    }

    if(email.value.indexOf('@') <= 0 ){
        return '**invalid email please use @ and . **';
    }

    if(email.value.charAt(email.value.length-4)!= '.') {
     return '**invalid position of .**';
    }
  
    if(pass.value == ''){
        return  '**please fill the password**';
    }

    if(pass.value.length <=5 || pass.value.length>20){
        return '**password must be greater than 5**';
    }

    if(cpass.value == ''){
        return '**Please fill the confirm password field**';
    }

    if(pass.value!= cpass.value){
        return '**Password are not matching**';
    }
else 
{
  return true;
}

}   

// if(pass.value !='' )
// {
    
// if(username.value !='' && pass.value === cpass.value && email.value != ''){
// return true;
// }
// }

//  else
//   {
//      return 'password cannt empty';
// }


// if(username.value =='')
//    {
//       return 'username cannot empty' ;
//     }

//  if(email.value == '')
//    {
//          return 'email field not empty' ;
//     }

// if(email.value.indexOf('@') <= 0 ){
//        return 'invalid email please use @ and . ';
//     }

    
// if (pass.value != cpass.value){
//  return 'pass not match';
// }
// }


//   var saveVal = function()
var saveVal = () =>{
    
     let formres = checkform(username,pass,cpass,email);

     if(typeof(formres)=='boolean'){
         localStorage.setItem('username',username.value);
         localStorage.setItem('pass',pass.value);
         localStorage.setItem('email',email.value);
         window.location ='login.html';
         
     }
     else {
         error.innerHTML = formres;
     }
 }


button.addEventListener('click',function(){
    if(localStorage.getItem('email' !=null) && localStorage.getItem('pass' != null)){
        
   if(localStorage.getItem('email')==email.value){
            error.innerHTML = "exist";
        }
        else{
            saveVal();
           
            
        }

    }
    else{
        saveVal();
    }
})

