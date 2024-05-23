function debounce(func, delay) {
  let timeout = null;

  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}

function fun(a, b) {
  console.log(`This is a function with arguments ${a} and ${b}`);
}

const debouncedFun = debounce(fun, 2000);
debouncedFun(1, 2);
debouncedFun(3, 4);
debouncedFun(5, 6);
