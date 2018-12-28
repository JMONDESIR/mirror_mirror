let getInput = document.getElementById("message");
let red = document.getElementById("redBox");
let blue = document.getElementById("blueBox");

getInput.addEventListener("keyup", function() {
  console.log(event.target.value);
  red.innerHTML = event.target.value;
  blue.innerHTML = event.target.value;
});
