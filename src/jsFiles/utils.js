export const message = "How you doing?";

// const myInterval = setInterval(increment, 1000);

let item = 0;

export function increment() {
  item++;
  document.getElementById("header").innerHTML = item;
}

export const stopFunction = () => {
  clearInterval(myInterval);
};
