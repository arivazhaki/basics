const array = [1, 2, 3, 4];

const map = array.map((x, index) => {
  //console.log(index);
  return x + index;
});
//console.log(map);
const stops = ['Trichy', 'Madurai', 'Tirunelveli'];

const stopingmap=stops.map((ele,index)=>{
    console.log(index);
    return {ele};
})
console.log(stopingmap);