const schools = {
  Legon: 10,
  KNUST: 8,
  UCC :6
}

const schoolArray = Object.keys(schools).map(key =>({
  name:key,
  wins:schools[key]
}));
                                             
console.log(schoolArray)


//array to objects
const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1
  }
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);
                                             
                                             
