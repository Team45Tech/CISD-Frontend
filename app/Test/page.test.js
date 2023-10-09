import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero/Hero';

test('renders MyComponent', () => {
  render(<Hero />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
