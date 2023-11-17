import React, { useState } from "react";
import axios from 'axios';

const BookCard = ({ title, description, price, imageUrl, id }) => {

  const [isRented, setIsRented] = useState(false);
  const accessToken = localStorage.getItem('token');
  const apiUrl = `http://localhost:5001/api/rentee/books/${title}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,

  };

  const handleRentClick = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5001/rentee/books/${id}`,
        { isRented: true },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        // Handle error response
        console.error("Error updating data:", response.status);
      }
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  return (
    <div className="flex flex-col border-1 rounded-xl p-4 m-2 shadow-sm">
      <img src={imageUrl} alt="" className="w-32" />
      <div className="flex flex-col">
        <h3 className="font-bold text-3xl">{title}</h3>
        <h4 className="text-xl font-normal">{description}</h4>
        <h4 className="text-sm">{price}</h4>
      </div>
      <button
        onClick={() => handleRentClick(id)}
        className="ml-auto border-[3px]  border-blue-400 mr-1 text-orange-500 font-semibold px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        Rent
      </button>
    </div>
  );
};

export default BookCard;
