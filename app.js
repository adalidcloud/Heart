const parrafos = document.querySelectorAll(".Colors p");
const corazon = document.querySelector(".corazon");
const inputs = [];

function actualizar() {
  const [r, g, b] = inputs.map((i) => Number(i.value));
  const rojo = Math.max(0, 255 - g - b);
  const verde = Math.max(0, 255 - r - b);
  const azul = Math.max(0, 255 - r - g);
  corazon.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

parrafos.forEach((p) => {
  const input = document.createElement("input");
  input.type = "range";
  input.min = 0;
  input.max = 255;
  input.value = 0;
  input.addEventListener("input", actualizar);
  p.append(input);
  inputs.push(input);
});
