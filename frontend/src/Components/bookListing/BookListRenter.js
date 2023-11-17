import React from 'react';
import BookCard from './BookCardRenter';
import Container from 'react-bootstrap/Container';

const BookListRenter = ({ books }) => {
  return (
    <Container>
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          description={book.description}
          price={book.price}
          imageUrl={book.imageUrl}
        />
      ))}
    </Container>
  );
};

export default BookListRenter;
