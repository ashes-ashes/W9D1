// function sum() {
//   args = Array.from(arguments);
//   let sum = 0;
//   args.forEach((el) => {
//     sum += el;
//   });
//   return sum;
// }

function sum(...args) {
  let sum = 0;
  args.forEach((el) => {
    sum += el;
  });
  return sum;
}