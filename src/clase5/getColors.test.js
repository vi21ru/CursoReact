const getColors = () => {
  return ['yellow', 'red', 'blue'];
};

test('Should array returns element blue', () => {
  expect(getColors()).toContain('blue');
});
