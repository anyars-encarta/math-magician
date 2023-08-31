import React from 'react';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import Quote from '../components/Quote';

// Snapshot Testing
test('Quote component matches snapshot', () => {
  const { container } = render(<Quote />);
  expect(container).toMatchSnapshot();
});

// User Interaction Testing
jest.useFakeTimers();

describe('Quote component', () => {
  it('displays loading state initially', () => {
    render(<Quote />);
    expect(screen.getByText('Loading Quote...')).toBeInTheDocument();
  });

  it('displays error state when API call fails', async () => {
    global.fetch = jest.fn(() => Promise.reject('API error'));
    render(<Quote />);
    await waitFor(() => expect(screen.getByText('Something went wrong!')).toBeInTheDocument());
  });

  it('displays fetched quote and author', async () => {
    const mockData = [
      { quote: 'Mock Quote', author: 'Mock Author', category: 'Mock Category' },
    ];
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData),
    }));

    render(<Quote />);

    await waitFor(() => expect(screen.getByText('"Mock Quote"')).toBeInTheDocument());
    expect(screen.getByText('Mock Author, Mock Category')).toBeInTheDocument();
  });
});
