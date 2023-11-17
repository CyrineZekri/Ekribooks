import React, { useEffect, useState } from 'react';
import BookListRentee from './BookListRentee';
import './ContentStyle.css';
import axios from 'axios';

function ContentRentee() {
  const [books, setBooks] = useState([]);

  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    const apiUrl = 'http://localhost:5001/rentee/books';
    const headers = {
      Authorization: `Bearer ${accessToken}`,

    };

    axios.get(apiUrl, { headers })
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [accessToken]);

  return (
    <div className='min-h-[77vh]'>
      <h1>Book Listing</h1>
      <BookListRentee books={books} />
    </div>
  );
}

export default ContentRentee;
