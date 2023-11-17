import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Book = ({ img, title, fee, rented, id }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    _id: id, // Use the provided id for the initial _id value
    title: "",
    author: "",
    rentPrice: 0,
    image: "",
  });

  const handleClose = () => {
    setShow(false);
    // Reset the form data when closing the modal
    setFormData({
      _id: id,
      title: "",
      author: "",
      rentPrice: 0,
      image: "",
    });
  };
  const token = localStorage.getItem("token");
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5001/renter/books/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200) {
        // Handle successful response, e.g., close the modal
        handleClose();
        window.location.reload();
      } else {
        // Handle error response
        console.error("Error updating data:", response.status);
      }
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };
  const handleDelete = (id) => {
    try {
      const res = axios.delete(`http://localhost:5001/renter/books/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })

      res && window.location.reload();
    }
    catch (err) { console.log(err) }
  };
  return (
    <div className="w-full md:w-[60%] grid grid-cols-3 md:grid-cols-6 place-items-center gap-4 p-2 rounded-2xl m-1 border-[2px] shadow-sm border-gray-200">
      <Modal show={show} onHide={handleClose} className="rounded-modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Titles
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
          <Button variant="primary" onClick={() => handleSubmit(id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <div className="col-span-1">
        <img src='...' className="w-64 rounded-xl" alt="" />
      </div>
      <div className="col-span-2 justify-self-start">
        <h1 className="font-semibold ">{title}</h1>
        <p className="font-semibold text-gray-400">{fee}</p>
      </div>
      <div className="col-span-1">
        {rented === true ? (
          <p className="bg-green-300 rounded-xl px-2">rented</p>
        ) : (
          <p className="bg-red-300 rounded-xl px-1">Not rented</p>
        )}
      </div>
      <Button
        onClick={handleShow}

        className="col-span-1 md:col-span-1 w-full relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
      >
        <span className="absolute inset-0 w-full h-full  bg-indigo-600"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">edit</span>
      </Button>
      <button
        onClick={() => handleDelete(id)}
        className="col-span-1 md:col-span-1  w-full relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
      >
        <span className="absolute inset-0 w-full h-full  bg-indigo-600"></span>
        <span Name="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">delete</span>
      </button>


    </div>
  );
};

export default Book;
