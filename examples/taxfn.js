const rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };
  
  const discounts = {
    // values are in percentages.
    Apple: 10,
  };
  
  const taxes = {
    // values are in percentages.
    Carrot: 5,
    Guava: 10,
  };
const purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  }
];
const getDisPercent=(product) => discounts
{
  console.log(product.item);
return discounts.hasOwnProperty(product.item) ? 
discounts[product.item]/100:0;

}
const main=()=>
{
  const productList=purchases.map((product) =>
  ({item:product.item}));
  console.log(productList);
  return productList.map(getDisPercent);
 }
console.log(main());
//const isPercent= (discounts.apples/100)*rates.apples;
//console.log(isPercent);


