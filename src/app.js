function showPoem(event) {
  event.preventDefault();
  let poem = document.querySelector("#poem");
  poem.innerHTML =
    "Sint weet uit het verleden, Jij bent altijd snel tevreden. Daarom dit pakje, klein maar fijn. Daar zul je vast wel blij mee zijn.";

  new Typewriter("#poem", {
    strings: poem.innerHTML,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let form = document.querySelector("form");
form.addEventListener("submit", showPoem);
