function toogleMode() {
  const html = document.documentElement;

  const img = document.querySelector("#profile img");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "teste tema light");
    img.setAttribute("height", "teste tema light");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "teste tema dark");
  }
}
