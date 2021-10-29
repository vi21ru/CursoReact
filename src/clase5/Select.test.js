import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

test('Should options be equal at prop element list', () => {
  const options = ['red', 'blue', 'orange'];
  render(<Select items={options}></Select>);
  expect(screen.queryAllByRole('option')).toHaveLength(3);
});

test('Should onChange is fired', () => {
  const options = ['red', 'blue', 'orange'];
  const fn = jest.fn();
  render(<Select items={options} onChange={fn}></Select>);

  fireEvent.change(screen.queryByRole('combobox'));
  expect(fn).toHaveBeenCalled();
  fireEvent.change(screen.queryByRole('combobox'));
  expect(fn).toBeCalledTimes(2);
});
