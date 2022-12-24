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


const getDiscountPercentage = (productName) => (discounts[productName] || 0) / 100;

const getTaxPercentage = (productName) => (taxes[productName] || 0) / 100;

const getUnitPrice = (itemName) => {
  const discount =
    getDiscountPercentage(itemName) * rates[itemName];
  const tax =
    getTaxPercentage(itemName) * rates[itemName];
  const unitPrice = (rates[itemName] + tax) - discount;
  return unitPrice;
}
const getLineItemPrice = (lineItem) =>
  getUnitPrice(lineItem.item) * lineItem.units;

const getSum = (purchases) => {
  const itemPrice = purchases.map(getLineItemPrice);
  const totalPrice =
    itemPrice.reduce((prevValue, currValue) => prevValue + currValue, 0);
  return totalPrice;
}
const main = () => {
  console.log("TotalPrice:  " + getSum(purchases));
}
main()