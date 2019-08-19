function sum(...args) {
  let sum = 0;
  args.forEach((el) => {
    sum += el;
  });
  console.log(sum);
}



Function.prototype.curry = function (numArgs) {
  let original = this;
  let args = [];

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return original.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};



Function.prototype.curry = function (numArgs) {
  let original = this;
  let args = [];

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return original(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
};
