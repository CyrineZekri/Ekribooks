import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import BookListRenter from "./BookListRenter";
import axios from "axios";
import b1 from "../../images/1.jpg";
import b2 from "../../images/2.jpg";
import b3 from "../../images/3.jpg";
import b4 from "../../images/4.jpg";
const books = [
  {
    title: "Book 1",
    description: "Description for Book 1",
    price: "$19.99",
    imageUrl: b1,
  },
  {
    title: "Book 2",
    description: "Description for Book 2",
    price: "$29.99",
    imageUrl: b2,
  },
  {
    title: "Book 3",
    description: "Description for Book 1",
    price: "$19.99",
    imageUrl: b3,
  },
  {
    title: "Book 4",
    description: "Description for Book 2",
    price: "$29.99",
    imageUrl: b4,
  },
];
const token = localStorage.getItem("token");


function ContentRenter() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleAddBook = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Additional state for form inputs
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleAddBookSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      
      formData.append("image", file);
  
      const responseUpload = await axios.post(
        'http://localhost:5001/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token,
          },
        }
      );
  
      // Check if the file upload was successful
      if (responseUpload.status === 200) {
        // Extract the file path from the response
        const imagePath = responseUpload.data.path;
  
        // Now, send the book data along with the imagePath
        const responseAddBook = await axios.post(
          'http://localhost:5001/renter/books',
          {
            ...newBook,
            image: imagePath, // Assuming your backend expects the image path as 'image'
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            },
          }
        );
  
        // Handle the response from adding the book...
        console.log(responseAddBook.data);
      } else {
        // Handle error during file upload
        console.error("Error uploading file:", responseUpload.status);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className="Content">
      <div className="Bar">
        <h2>Book List</h2>
        <Form className="form">
          <Button className="Button" onClick={handleAddBook}>
            Add Book
          </Button>
        </Form>
      </div>

      <BookListRenter books={books} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              />
          </Form.Group>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={newBook.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={newBook.price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleAddBookSubmit}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ContentRenter;
