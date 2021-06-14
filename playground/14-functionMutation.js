const lawn_color = {
  title : 'lawn',
  color:  'green',
  rating: 0
}

function rateColor(color, rating){
  color.rating = rating
  return color
}

console.log(rateColor(lawn_color, 5).rating); //5
console.log(lawn_color.rating); //5


//to make this object immutable
function rateColor(color, rating){
  return Object.assign({}, color, {rating:rating})
}

console.log(rateColor(lawn_color, 5).rating); //5
console.log(lawn_color.rating); //0
  
//we can also use the spread operator
const rateCOlor = (color, rating) => {
  {
    ...color,
      rating
  });
  
console.log(rateColor(lawn_color, 5).rating); //5
console.log(lawn_color.rating); //0
