var txt = "events";
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

window.onload = function(){
  document.getElementById("eventshead").innerHTML = " ";
  typeWriter();
};