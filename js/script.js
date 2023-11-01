let btn = document.getElementById("btn");
let input = document.getElementById("input");
let show = document.getElementById("show");
let refresh = document.getElementById("refresh");
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
show.innerHTML = `${num1}+${num2}`;
let res = num1 + num2;
btn.addEventListener("click", function () {
  if (input.value == res) {
    alert("You are human...");
    input.value = "";
  } else {
    alert("You are Robot...");
    input.value = "";
  }
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  res = Number(num1 + num2);
  show.innerHTML = `${num1}+${num2}`;
});
refresh.addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  show.innerHTML = `${num1}+${num2}`;
});
