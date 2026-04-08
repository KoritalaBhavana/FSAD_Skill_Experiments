import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard controls', () => {
  render(<App />);
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /local users/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /users api/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /fake api posts/i })).toBeInTheDocument();
});
