
function ConstructorFn() {
  this._privateProperty = 'value';
}

ConstructorFn.prototype.getValue = function() {
  return this._privateProperty;
};

const obj = new ConstructorFn();
console.info(obj.getValue());
