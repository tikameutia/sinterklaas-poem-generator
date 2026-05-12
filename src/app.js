function showPoem(response) {
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

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "0050t012172bb4a92f6b53332o6cb5f4";
  let prompt = "";
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

let form = document.querySelector("form");
form.addEventListener("submit", generatePoem);
