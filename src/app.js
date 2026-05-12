function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let present = document.querySelector("#present");

  let apiKey = "0050t012172bb4a92f6b53332o6cb5f4";
  let prompt = `Please make a short and funny Sinterklaas poem in Dutch, the present is ${present.value}`;
  let context = `You are a witty, smart and funny Sinterklaas poem maker. The poem that you created will be beautifully rhymed and short. Please provide your poem with a proper <br /> element use so we can read the rhyme better. The Dutch translation of ${present.value} to be written with <strong> element. End the poem with a signature 'Liefs, Sint en Piet'.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poem.innerHTML = "Generating a Sinterklaas poem for you.. please wait";

  axios.get(apiUrl).then(showPoem);
}

let poem = document.querySelector("#poem");

let form = document.querySelector("form");
form.addEventListener("submit", generatePoem);
