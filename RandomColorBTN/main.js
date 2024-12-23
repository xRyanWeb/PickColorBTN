function generatedColor() {
  let colors = ["red", "green", "blue"];

  colors.map(e => {
    const randomColor = Math.floor(Math.random() * colors.length[e]);

    let color = colors[randomColor];
    return color;
  });

  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

const color = generatedColor();

if (color == "red") {
  let redButton = document.getElementById("redButton");
  redButton.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });
}

if (color == "green") {
  let greenButton = document.getElementById("greenButton");
  greenButton.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });
}

if (color == "blue") {
  let blueButton = document.getElementById("blueButton");
  blueButton.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });
}
