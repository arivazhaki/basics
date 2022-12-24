function sum(a,b)
{
    return a+b;
}
console.log(sum(2,2));
const incrementValue=(c,d)=>c+d;
const Multiply=(add)=>add*4;
const main=()=>
{   
    const add=incrementValue(2,4)
    const answer=Multiply(add);
    console.log(add);
    console.log(answer);
}
main()
const squareArea=(a)=>a*a;
const paintPerArea=(squareOutput)=>squareOutput*100;
const disPer=(paintingCost)=>(paintingCost-paintingCost*0.1)
const main=()=>
{
    const squareOutput=squareArea(2);
    //console.log(squareOp);
    const paintingCost=paintPerArea(squareOutput);
    //console.log(paintingCost);
    const discount=disPer(paintingCost);
    console.log(discount);
}
main();
// const rates = {
//     pencil: 10,
//     pen: 50,
//     Eraser: 2,
//   };
  
//   const discounts = {
//     // values are in percentages.
//     pencil: 10,
//   };
  
//   const taxes = {
//     // values are in percentages.
//     pen: 5,
//     Eraser: 10,
//   };
// const purchases = [
//   {
//     item: 'pen',
//     units: 20,
//   },
//   {
//     item: 'pencille',
//     units: 2,
//   },
//   {
//     item: 'Eraser',
//     units: 1,
//   }
// ];
// const discountPercentage=(product)=>(discounts[product] || 0)/100;
// const discount=discounts.map((product)=>getDiscountPercentage(poduct));
// console.log(discount);