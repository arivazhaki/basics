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
const getTax=(product) => 
{
  console.log(product.item);
// return taxes.hasOwnProperty(product.item) ? 
// taxes[product.item]/100:0;
const productname=taxes[product.item]/100 || 0;
return productname;


}
const main=()=>
{
  const productList=purchases.map((product) =>
  ({item:product.item}));
  //console.log(productList);
  return productList.map(getTax);
 }
console.log(main());

