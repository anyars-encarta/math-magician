import React, { useEffect, useState } from 'react';
import '../modules/Quote.css';
import { act } from 'react-dom/test-utils';

const uniqueID = '8YHMipVLjkYiF4KOWb7GUYqkO6VXXgcUK3qQJEAI';

function Quote() {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
  const [quoteText, setQuoteText] = useState('');
  const [authorText, setAuthor] = useState('');
  const [categoryText, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': uniqueID,
          },
        });

        if (!response.ok) {
          throw new Error(
            `API request failed with status code ${response.status}.`,
          );
        }

        const data = await response.json();

        act(() => {
          setQuoteText(data[0].quote);
          setAuthor(data[0].author);
          setCategory(data[0].category);
          setIsLoading(false); // Move this inside the act call
        });
      } catch (error) {
        act(() => {
          setHasError(true);
          setIsLoading(false); // Move this inside the act call
        });
      }
    };

    fetchQuote();

    const timer = setInterval(fetchQuote, 15000); // Change quote every 15 seconds.

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, []); // Empty dependency array to run only once on initial component mount

  return (
    <div className="quote-container">
      <h1 className="quote-header">Quotes of the Day!</h1>
      {isLoading ? <p className="loading">Loading Quote...</p> : null}
      {hasError && <p className="error">Something went wrong!</p>}
      {!isLoading && !hasError && (
        <>
          {quoteText && (
            <p className="quote">
              &quot;
              {quoteText}
              &quot;
            </p>
          )}
          <hr />
          <br />
          {authorText && (
            <p className="author-category">
              {authorText}
              ,&nbsp;
              {categoryText}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Quote;
