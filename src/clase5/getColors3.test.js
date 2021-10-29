const createUser = (name, age) => ({ name, age });

test('check if object is ok', () => {
  expect(createUser('alex', 30)).toStrictEqual({ name: 'alex', age: 30 });
});
