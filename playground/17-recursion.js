const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

countdown(10, value => console.log(value));

const countUp = (value, fn) => {
  fn(value);
  //return value < 20 ? countUp(value + 1, callback): value;
  if(value < 20){
    countUp(value + 1, fn)
  }else{
    return value
  }
}
countUp(10, value => console.log(value));
