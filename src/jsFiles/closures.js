const parentFn = () => {
  let a = 1;
  console.log(a);

  const childFn = () => {
    console.log((a += 1));
  };

  return childFn;
};

const result = parentFn();
console.log(result);
result();
result();
result();
