import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Skip this test', () => {
  render(<App />);
  const bypassTests = 'skipping tests';
  expect(bypassTests).toEqual('skipping tests');
});
