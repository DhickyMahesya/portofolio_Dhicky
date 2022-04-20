
// skill
var i = 0;
var txt = 'Desainer Grafis | Illustrator Artist';
var speed = 50;


function tekan(){

    if (i < txt.length) {
        document.querySelector(".running_txt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(tekan, speed);
      } 
       
}
    

//btn kirim
var tombolAlert = document.querySelector(".btn");

tombolAlert.addEventListener("click",function(){window.alert('Pesan anda sudah dikirim')});

//color


