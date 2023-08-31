// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders Home component correctly', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  expect(screen.getByText(/Encarta Math Magicians is an app developed by Anyars Yussif, a Full Stack Software Development student at Microverse. Microverse is an online school that uses peer-programming and project building to teach./)).toBeInTheDocument();
});

test('matches Home component snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
