let btn1 = document.getElementById("toggle_1");
let btn2 = document.getElementById("toggle_2");
let displayText = document.getElementById("display_text");

let wasClicked = "";

btn1.addEventListener("click", () => {
  if (wasClicked !== "btn1") {
    displayText.classList.add("appear");
    displayText.innerHTML = "The first button was clicked";
    wasClicked = "btn1";
  } else {
    displayText.innerHTML = "Hello World";
    wasClicked = "";
  }
});

btn2.addEventListener("click", () => {
  if (wasClicked !== "btn2") {
    displayText.classList.add("appear");
    displayText.innerHTML = "The second button was clicked";
    wasClicked = "btn2";
  } else {
    displayText.innerHTML = "Hello World";
    wasClicked = "";
  }
});
