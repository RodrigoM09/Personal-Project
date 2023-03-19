const rotatingCircle = document.getElementById('rotating-circle');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  rotatingCircle.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();