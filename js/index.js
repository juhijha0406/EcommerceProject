var login = document.getElementById('loginIndex');
 
 var email = localStorage.getItem('email');
//  var username = local.localStorage.getItem('username');

if(email != null){
    login.innerHTML =  '<button class="btn btn-secondary" id="loginIndex" style="color: white;">'+email+'</button>';

    console.log('email');
}

// Limited time Deals
function hide() {
    document.getElementById("limite_time_sale").style.display = "none";
}
setTimeout("hide()", 1000*120);


// CountDown timer
const startingMinutes = 2;
let time = startingMinutes*60;

const countdownel = document.getElementById("Counter");

setInterval(updateCountdown,1000);

function updateCountdown(){
    const minutes =Math.floor(time/60);
    let seconds = time%60;
    seconds=seconds<10 ? '0' + seconds : seconds;

    countdownel.innerHTML = `${minutes}: ${seconds}`;
    time--;
}