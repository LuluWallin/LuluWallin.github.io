console.log("hello world");
// window.onscroll = function () {
//   myfunction();
// };

function navigateTo(name) {
  const element = document.getElementById(name);
  element.scrollIntoView({ behavior: "smooth" });
}

var modal = document.getElementById("introModal");
var span = document.getElementsByClassName("close")[0];

// modal.onclick = function (event) {
//   if (event.target !== this) return;
//   modal.style.display = "none";
// };
span.onclick = function () {
  modal.style.display = "none";
};

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple");
  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  console.log(button);
  button.addEventListener("click", createRipple);
}
