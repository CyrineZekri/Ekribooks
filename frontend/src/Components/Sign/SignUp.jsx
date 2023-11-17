import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sign.css';
import cover from '../../images/book.jpg';
import Header from "../Header/Header";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');  // State to handle error
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/users/register', formData);

      console.log('Successfully signed up:', response.data);
      // Redirect based on role
      if (formData.role === "rentee") {
        navigate('/signin');
      } else if (formData.role === "renter") {
        navigate('/signin');
      }

    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message); // Display error message from backend
      } else {
        setError('Signup failed. Please try again.'); // Generic error message
      }
    }
  };



  const backgroundImageStyle = {
    backgroundImage: `url(${cover})`,
  };

  return (

    <>
      <Header />
      <div className='wrapper' style={backgroundImageStyle}>
        <div className='form-wrapper'>
          <h2>Sign Up</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message here */}
          <form className='form' onSubmit={handleSubmit} noValidate>
            <div className='email'>
              <label htmlFor="username">Full Name</label>
              <input type='text' name='username' onChange={handleChange} />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={handleChange} />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={handleChange} />
            </div>

            <div className='role'>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="rentee"
                  onChange={handleChange}
                  checked={formData.role === "rentee"}
                /> Rentee
              </label>
              <span className='radio-space'></span>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="renter"
                  onChange={handleChange}
                  checked={formData.role === "renter"}
                /> Renter
              </label>
            </div>

            <div className='submit'>
              <button className="btn" type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
