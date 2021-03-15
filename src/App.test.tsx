import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Name: label', () => {
  render(<App />);
  const label = screen.getByLabelText("Name:");
  expect(label).toBeInTheDocument();
});
