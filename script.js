let start = document.querySelector("#start");

start.addEventListener("click", function startClone() {
  let quantity = document.querySelector("#quantity").value;
  quantity = parseInt(quantity);
  if (quantity != 0) {
    if (quantity % 2 === 0) {
      let div, id;
      id = 0;
      for (let i = 1; i <= quantity; i++) {
        id += 1;
        if (i === 1) {
          div = `<div id  = ${id} class = 'gamePools'> </div>`;
        } else {
          div += `<div id  = ${id} class = 'gamePools'> </div>`;
        }
      }
      //TODO Div gen
      let colorsRandNum = [];
      for (let i = 0; i <= 2; i++) {
        let colNumGen = Math.floor(Math.random() * (255 - 0)) + 0;
        colorsRandNum.push(colNumGen);
      }
      console.log(colorsRandNum);
      document.querySelector("#playingField").style.display = "flex";
      document.querySelector("#playingField").innerHTML = div;
      for (let j = 0; j <= quantity; j++) {
        let gamePools = document.querySelectorAll(".gamePools");
        console.log(gamePools);
        gamePools[j].style.backgroundColor =
          "RGB(" + colorsRandNum[0] + "," + colorsRandNum[1] + "," + colorsRandNum[2] + ")";
      }
    }
  } //TODO Równanie zgodniści

  start.removeEventListener("click", startClone);
  if (isNaN(quantity)) {
    alert("Nie można zostawiać pustego pola ani wpisywać liter!");
    start.addEventListener("click", startClone);
  } //TODO Założenia błędów
  if (quantity == 0 || 0 > quantity) {
    alert("Nie można wpisywać zera oraz liczb ujemnych!");
    start.addEventListener("click", startClone);
  } //TODO Założenia błędów
  if (quantity % 2 === 1) {
    alert("Błąd! nie można dawać liczb nieparzystych");
    start.addEventListener("click", startClone);
  } //TODO Założenia błędów
  let restart = document.querySelector("#restart");
  restart.addEventListener("click", () => {
    start.addEventListener("click", startClone);
    document.querySelector("#quantity").value = "";
    document.querySelector("#playingField").style.display = "none";
  }); //TODO Przycisk restart
});
