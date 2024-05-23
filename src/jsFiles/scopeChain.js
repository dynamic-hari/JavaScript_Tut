// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(writeName());

const p1 = () => {
  const x = 1;
  const p2 = () => {
    const y = 2;
    const p3 = () => {
      const z = 3;
      return x + y + z;
    };
    return p3();
  };
  return p2();
};

console.log(p1());
