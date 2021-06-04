const clock = document.body.querySelector("h2#clock");
const oneday = 24 * 60 * 60 * 1000;
const onehour = 60 * 60 * 1000;
const oneminute = 60 * 1000;

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const dday = xmasDay - today;
  const day = String(Math.floor(dday / oneday)).padStart(2, "0");
  const hours = String(Math.floor((dday % oneday) / onehour)).padStart(2, "0");
  const minutes = String(Math.floor((dday % onehour) / oneminute)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((dday % oneminute) / 1000)).padStart(
    2,
    "0"
  );

  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
