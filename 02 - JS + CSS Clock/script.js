const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function update() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes() + seconds / 60;
  const hours = date.getHours() + minutes / 60;

  secDeg = 360 * (seconds / 60) + 90;
  minDeg = 360 * (minutes / 60) + 90;
  hrDeg = 360 * (hours / 12) + 90;

  console.log(hrDeg, minDeg, secDeg);

  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hrDeg}deg)`;

}

setInterval(update, 1000);