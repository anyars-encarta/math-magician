import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders the Navbar component correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(screen.getByText('Encarta Math Magicians')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });

  test('matches the Navbar component snapshot', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
