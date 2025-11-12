const herzen = document.querySelectorAll(".bild_herz");
const herzfelder = document.querySelectorAll(".feld.rundherum.herz");

herzfelder.forEach((herz, stelle) => {
  herz.addEventListener("click", () => {
    let i = 0;
    if (herzen[stelle + 2].classList.contains("voll")) {
      while (i < herzen.length && herzen[i].classList.contains("voll")) {
        i++;
      }

      i--;
      herzen[i].classList.remove("voll");
    } else {
      while (i < herzen.length && herzen[i].classList.contains("voll")) {
        i++;
      }

      herzen[i].classList.add("voll");
    }
  });
});

// speilfeld buttons
let spielfeld = [];
for (let zeile = 0; zeile < 7; zeile++) {
  spielfeld.push([]);
  for (let spalte = 0; spalte < 15; spalte++) {
    spielfeld[zeile].push(0);
  }
}
const felder = document.querySelectorAll("#spielfeld .feld");

felder.forEach((feld, i) => {
  feld.addEventListener("click", () => {
    let xElement = feld.querySelector(".x-marker");
    if (xElement) {
      xElement.remove();
      spielfeld[position_zeile(i)][position_spalte(i)] = 0;
    } else {
      const x = document.createElement("span");
      x.textContent = "X";
      x.className = "x-marker";
      x.style.position = "absolute";
      x.style.fontSize = "5vh";
      x.style.color = "black";
      feld.appendChild(x);
      spielfeld[position_zeile(i)][position_spalte(i)] = 1;
      feld.style.position = "relative";
    }
  });
});

function position_spalte(i) {
  if (i < 15) {
    return i;
  }

  let spalte = i % 15;
  return spalte;
}
function position_zeile(i) {
  if (i < 15) {
    i = 0;
    return i;
  }

  let zeile = Math.floor(i / 15);
  return zeile;
}

document.querySelector(".geschlossen").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    let xElement = e.target.querySelector(".x-marker");
    if (xElement) {
      xElement.remove();
    } else {
      const x = document.createElement("span");
      x.textContent = "X";
      x.className = "x-marker";
      x.style.position = "absolute";
      x.style.fontSize = "5vh";
      x.style.color = "black";
      e.target.appendChild(x);
      e.target.style.position = "relative";
    }
  }
});
