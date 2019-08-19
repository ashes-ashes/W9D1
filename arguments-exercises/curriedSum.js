
function sum(...args) {
  let sum = 0;
  args.forEach((el) => {
    sum += el;
  });
  console.log(sum);
}






function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;

}







