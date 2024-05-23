function throttling(func, delay) {
  let isRunning = false;
  return (...args) => {
    if (!isRunning) {
      isRunning = true;
      func(...args);
      timeout = setTimeout(() => {
        isRunning = false;
      }, delay);
    }
  };
}

function fun() {
  console.log(`This screen is resizing`);
}

const throttlingFun = throttling(fun, 2000);
window.addEventListener("resize", () => {
  // Call the throttled update layout function
  throttlingFun();
});
