export const changeOrderByPrice = (products) => {
  return products.sort((p1, p2) => p1.price - p2.price);
};

export const getPriceColor = (price) => {
  let result = '';
  if (price > 25) {
    result = 'red';
  } else if (price > 22) {
    result = 'orange';
  } else {
    result = 'green';
  }
  return result;
};
