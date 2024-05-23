// using currying
const add = (a) => {
  console.log("🚀 ~ add ~ a:", a);
  return (b) => {
    console.log("🚀 ~ return ~ b:", b);
    return (c) => {
      console.log("🚀 ~ return ~ c:", c);
      return a + b + c;
    };
  };
};

console.log(add(1)(2)(3)); // 6

const addition = (a) => (b) => (c) => a + b + c;
console.log(addition(1)(2)(3)); // 6
