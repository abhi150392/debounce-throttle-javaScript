const inputText = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

//debounce Impementation
const debounce = (cb, delay) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateDebounceText = debounce(() => {
  incrementCount(debounceText);
}, 2000);

//Throttle Implentation
const throttle = (cb, delay) => {
  let shouldWait = false;
  let waitingArgs;

  const timeOutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeOutFunc, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(timeOutFunc, delay);
  };
};

const updateThrottleText = throttle(() => {
  incrementCount(throttleText);
}, 2000);

inputText.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

document.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  updateDebounceText();
  updateThrottleText();
});

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
