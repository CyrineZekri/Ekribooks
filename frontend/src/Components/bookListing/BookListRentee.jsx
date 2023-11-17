import React from 'react';
import BookCard from './BookCardRentee';

const BookList = ({ books }) => {
  
  return (

    <div className='mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 '>
      {books.map((book, index) => (
        <BookCard
          id={book._id}
          key={index}
          title={book.title}
          description={book.description}
          price={book.price}
          imageUrl={book.imageUrl}
        />
      ))}
    </div>
 
  );
};

export default BookList;
