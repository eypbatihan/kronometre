const btnPlayPause = document.querySelector("#btn-play-pause");
const btnStop = document.querySelector("#btn-stop");
let btnclass = btnPlayPause.children[0];
const ses = document.querySelector("audio");

let salise = 00;
let saniye = 00;
let dakika = 00;

btnPlayPause.onclick = () => {
  btnclass.className == "fa fa-play-circle"
    ? (btnclass.classList.replace("fa-play-circle", "fa-pause-circle"),
      (interval = setInterval(timer, 10)),
      ses.play())
    : (btnclass.classList.replace("fa-pause-circle", "fa-play-circle"),
      clearInterval(interval),
      ses.pause());
};

function timer() {
  salise += 1;
  salise == 99 ? (saniye++, (salise = 0)) : null;
  saniye == 60 ? (dakika++, (saniye = 0), ses.play()) : null;
  printScreen();
}

btnStop.onclick = () => {
  salise = 0;
  saniye = 0;
  dakika = 0;
  printScreen();
  clearInterval(interval);
  btnclass.classList.replace("fa-pause-circle", "fa-play-circle");
  ses.pause();
};

function printScreen() {
  salise < 10
    ? (document.querySelector(".salise").innerHTML = `0${salise}`)
    : (document.querySelector(".salise").innerHTML = salise);
  saniye < 10
    ? (document.querySelector(".saniye").innerHTML = `:0${saniye}:`)
    : (document.querySelector(".saniye").innerHTML = `:${saniye}:`);
  dakika < 10
    ? (document.querySelector(".dakika").innerHTML = `0${dakika}`)
    : (document.querySelector(".dakika").innerHTML = dakika);
}
