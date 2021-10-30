import { changeOrderByPrice, getPriceColor } from './helpers';

test('Should return products in ascending order', () => {
  const products = [{ price: 15 }, { price: 10 }, { price: 30 }];
  const resultExpected = [{ price: 10 }, { price: 15 }, { price: 30 }];
  const result = changeOrderByPrice(products);
  expect(result).toStrictEqual(resultExpected);
});

test('Should return red if price is 26', () => {
  const price = 26;
  expect(getPriceColor(price)).toBe('red');
});

test('Should return orange if price is 23', () => {
  const price = 23;
  expect(getPriceColor(price)).toBe('orange');
});

test('Should return green if price is 10', () => {
  const price = 10;
  expect(getPriceColor(price)).toBe('green');
});
