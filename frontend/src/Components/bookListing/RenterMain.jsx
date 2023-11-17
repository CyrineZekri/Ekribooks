import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Book from "./book"; // Import your Book component

const RenterMain = () => {
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([]); // State to store fetched books
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    author: "",
    rentPrice: 0,
    image: "",
    isRented: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {

    try {
      const response = await axios.post(
        "http://localhost:5001/renter/books/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token, // Fix the token syntax
          },
        }
      );

      if (response.status === 201) {
        // Handle successful response, e.g., close the modal
        handleClose();
        // Refresh the book list after adding a new book
        fetchData();
      } else {
        // Handle error response
        console.error("Error posting data:", response.status);
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/renter/books", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response.data)
      if (response.status === 200) {
        setBooks(response.data);


      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  console.log(books)
  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  return (
    <div className="flex flex-col items-center min-h-[77vh] p-2 " >
      <div className="flex w-full justify-between gap-72 mb-4  ">
        <h1>Book Lists : </h1>
        <Button variant="primary rounded-xl" onClick={handleShow}>
          Add Book
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rentPrice" className="form-label">
                Rent Price
              </label>
              <input
                type="number"
                className="form-control"
                id="rentPrice"
                name="rentPrice"
                value={formData.rentPrice}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {books.map((book, index) => (
        <Book
          key={index}
          id={book._id}
          img={book.imageUrl}
          fee={book.price}
          title={book.title}
          rented={book.isRented}
        />
      ))}
    </div>
  );
};

export default RenterMain;
