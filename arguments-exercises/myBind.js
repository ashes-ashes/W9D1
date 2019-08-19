Function.prototype.myBind = function(context, ...bindtimeargs) {

  return (...calltimeargs) => {
    let args = bindtimeargs.concat(calltimeargs);
    this.apply(context, args);
  };
};