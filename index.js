let btn = document.getElementById("gen-btn");
let display = document.getElementById("display");

btn.addEventListener("click", () => {

  display.textContent = RandomPasswordGen();
});

function RandomPasswordGen() {
  
  let AllowedCharacters;

  if (confirm("would you like lowercase characters?")) {
    AllowedCharacters = "abcdefghijklmnopqrstuvwxyz";
  }

  if (confirm("WOULD YOU LIKE TO ADD SCREAMY LETTERS?")) {
    AllowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (confirm("Would you like to add numerals?")) {
    AllowedCharacters += "0123456789";
  }

  if (confirm("!\"#$%&')(*+,-./:;<=>?@[\\]^_`{|}~ ?")) {
    AllowedCharacters += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  let passwordLength = window.prompt(
    "how long would you like the password? (max: 128)"
  );

  let randomPassword = "";

  if (AllowedCharacters && passwordLength <= 128) {
    for (i = 0; i < passwordLength; i++) {
      randomPassword +=
        AllowedCharacters[Math.floor(Math.random() * AllowedCharacters.length)];
    }
    display.classList.add("shown");
    return randomPassword;
  } else {
    return undefined;
  }
}
