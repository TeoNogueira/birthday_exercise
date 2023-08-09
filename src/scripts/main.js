const date = new Date("Sep 17, 2023 07:00:00").getTime();

const calc = setInterval(function () {

  const now = new Date().getTime();
  
  const range = date - now;

  const days = Math.floor(range / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((range % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML =
    `${days + "d " + hours + "h " + minutes + "m " + seconds + "s "}`;

    const myName = 'Teo'

  if (range < 0) {
    clearInterval(calc);
    document.getElementById("count").innerHTML = `"HAPPY BIRTHDAY ${myName}!`;
  }
}, 1000);

AOS.init()
