// Give me the sum of the prices(try chaining methods)
// [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }]

const prices = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const totalPrice = prices
  .map((item) => item.price)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalPrice);
