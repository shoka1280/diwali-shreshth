const card = document.querySelector("#card");
const openButton = document.querySelector("#openButton");
const replayButton = document.querySelector("#replayButton");

openButton.addEventListener("click", () => {
  card.classList.add("open");
  replayButton.focus({ preventScroll: true });
});

replayButton.addEventListener("click", () => {
  card.classList.remove("open");
  openButton.focus({ preventScroll: true });
});
