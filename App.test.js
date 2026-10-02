import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the MDDTI landing page', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /zonal railway training institute/i })).toBeInTheDocument();
});
