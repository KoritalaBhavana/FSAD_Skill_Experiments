import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student manager controls', () => {
  render(<App />);
  expect(screen.getByText(/add \/ update student/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  expect(screen.getByText(/student list/i)).toBeInTheDocument();
});
