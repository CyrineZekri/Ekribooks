import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ContentStyle.css';

const BookCardRenter = ({ title, description, price, imageUrl }) => {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleUpdateClick = () => {
    setShowUpdatePopup(true);
  };

  const handleCloseUpdatePopup = () => {
    setShowUpdatePopup(false);
  };

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setUpdatedPrice(event.target.value);
  };

  // Add your update function here
  const handleUpdate = () => {
    // Implement your update logic here using updatedTitle, updatedDescription, and updatedPrice
    // For simplicity, let's just log the values for now
    console.log("Updated Title:", updatedTitle);
    console.log("Updated Description:", updatedDescription);
    console.log("Updated Price:", updatedPrice);
    setShowUpdatePopup(false); // Close the popup after updating
  };

  return (
    <Card className="book-card">
      <div className="grid-container">
        <div className="grid-item image">
          <Card.Img variant="top" src={imageUrl} alt={title} className="book-image" />
        </div>
        <div className="grid-item details">
          <Card.Body>
            <Card.Title className='title'>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className='price'>Price: {price}</Card.Text>
          </Card.Body>
        </div>
        <div className="grid-item buttonRenter">
          <Button variant="primary" className="update-button" onClick={handleUpdateClick}>
            Update
          </Button>
          <Button variant="primary" className="delete-button">
            Delete
          </Button>
        </div>
      </div>

      <Modal show={showUpdatePopup} onHide={handleCloseUpdatePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='ContenuPopup'>
            <div className='Titres'>
              <label htmlFor="updatedTitle">Title:</label>
              <label htmlFor="updatedDescription">Description:</label>
              <label htmlFor="updatedPrice">Price:</label>
              </div>
            <div className='entries'>
              <input
              type="text"
              id="updatedTitle"
              value={updatedTitle}
              onChange={handleTitleChange}
              />

              <textarea
                id="updatedDescription"
                value={updatedDescription}
                onChange={handleDescriptionChange}
              />
              <input
                type="text"
                id="updatedPrice"
                value={updatedPrice}
                onChange={handlePriceChange}
              />
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdatePopup}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default BookCardRenter;
