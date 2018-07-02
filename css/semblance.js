var txt = document.getElementById("eventshead").innerHTML;
var txt2 = document.getElementById("detail").innerHTML;
console.log(txt);
var j=0; var k=0;
var speed = 250;

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("eventshead").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}


function typeWriter2() {
  if (k < txt2.length) {
    document.getElementById("detail").innerHTML += txt2.charAt(k);
    k++;
    setTimeout(typeWriter2, 30);
  }
}

window.onload = function(){
  document.getElementById("eventshead").innerHTML = " ";
  typeWriter();
  document.getElementById("detail").innerHTML = " ";
  setTimeout(typeWriter2, 6000);
};