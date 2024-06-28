let btns = document.querySelectorAll("button");

for (let t of btns) {
  t.addEventListener("click", () => {
    performToss(t);
  });
}
function performToss(btn) {
  let buttonSelected = btn.innerHTML.toLowerCase();
  let tossValue = ["head", "tail"];
  let choices = Math.floor(Math.random() * tossValue.length);
  if (buttonSelected == tossValue[choices]) {
console.log("wins")
  }
  else{
    console.log("loss")
  }
}
