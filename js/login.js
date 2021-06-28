var email = document.getElementById('email');
var pass = document.getElementById('pass');
var login =  document.getElementById('loginButton');
var error  = document.getElementById('error');

  // var username = localStorage.getItem('username');

  login.addEventListener('click' ,function(){
   if(email.value == localStorage.getItem('email') && pass.value ==localStorage.getItem('pass'))
   {
        window.location = 'index.html';

   }
   else 
   {
       error.innerHTML  ='**Credentials did not match**';

   }
 
  });
