let clock = document.getElementById('clock');

function time() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  clock.textContent = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2);

}

setInterval(time, 1000);