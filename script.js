let btns = document.querySelectorAll("button");
let output = document.querySelector(".output");
let message = document.querySelector(".message");
for (let t of btns) {
  t.addEventListener("click", () => {
    performToss(t);
  });
}
let userScore = 0;
let computerScore = 0;
function performToss(btn) {
  let buttonSelected = btn.innerHTML.toLowerCase();
  let tossValue = ["head", "tail"];
  let randomIndex = parseInt(Math.random() * tossValue.length);
  if (buttonSelected == tossValue[randomIndex]) {
    userScore++;
    message.innerHTML = `<p>User wins</p>`
    message.style.cssText = `
    color:green;
    background-color:yellow;
    text-align:center;
    width:300px;
    border-radius:20px;
    `
  }
  else{
    computerScore++;
    message.innerHTML = `<p>Computer wins</p>`
    message.style.cssText = `
    color:red;
    background-color:black;
    text-align:center;
    width:300px;
    border-radius:20px;
    `
  }

  output.innerHTML = `
  userScore:${userScore}<br>
  computerScore:${computerScore}
  `
  
}
