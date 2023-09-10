const inputText = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

inputText.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
});
