/*

  Scripture relevant only to Jordan T. Gray's cyberpunk style.

*/

let chars = ["▖", "▗", "▘", "▝", "▚", "▞", "▙", "▛", "▜", "▟", "❚", "▀", "▬", "▔", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏", "▕", "▐", "▮"];

function cyberpseudo(width, lines) {
  // Calculate a rough estimate of how many characters can
  // fit into the div.
  console.log(width);
  let charslength = Math.floor(
    width.clientWidth *
    0.8 / parseFloat(getComputedStyle(width).fontSize)
  );

  console.log(charslength);
  charslength = Math.max(charslength, 50);
  console.log(charslength);

  // Somewhere to store result.
  let out = ""

  // For five lines, and x characters, choose random characters.
  for (let lineindex = 0; lineindex < lines; lineindex++) {
    for (let charindex = 0; charindex < charslength; charindex++) {
      out += chars[Math.floor(Math.random(chars.length - 1) * 32)];
    }
    out += "<br/>";
  }

  return out;
}

let cyberpseudoelements = Array.from(document.getElementsByClassName('pseudotext'));
console.log(cyberpseudoelements)
cyberpseudoelements.forEach(el => {
  el.innerHTML = cyberpseudo(el.parentElement, 1);
});


function hexpseudo() { return Math.floor(Math.random() * 0xFFFFFFFFFFFFF).toString(16); }

let hexpseudoelements = Array.from(document.getElementsByClassName('pseudohash'));
console.log(hexpseudoelements)
hexpseudoelements.forEach(el => {
  el.innerHTML = hexpseudo();
});