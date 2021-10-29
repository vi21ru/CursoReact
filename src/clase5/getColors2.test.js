const getColors = () => {
  return ['yellow', 'red', 'blue'];
};

const removeColorFromArray = (array, color) => {
  return array.filter((element) => element !== color);
};

const result = removeColorFromArray(getColors(), 'blue');

test('check if array length is 2', () => {
  expect(result.length).toBe(2);
});

test('check blue element dont exists', () => {
  expect(result).not.toContain('blue');
});
