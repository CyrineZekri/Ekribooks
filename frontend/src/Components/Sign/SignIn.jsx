import React, { useState } from "react";
import axios from 'axios';
import './Sign.css';
import { useNavigate } from 'react-router-dom';
import cover from '../../images/book.jpg';
import Header from "../Header/Header";

const SignIN = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); //state to display error 
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
      const response = await axios.post('http://localhost:5001/users/login', formData);
      const { accessToken, role } = response.data;
      localStorage.setItem('token', accessToken);   //store Token and user role in local storage for future requests
      if (role === 'renter') {
        navigate('/renter');
      } else if (role === 'rentee') {
        navigate('/rentee');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);// Display error message from backend
      } else {
        setError('Login failed');// Default  error message
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
          <h2>Sign In</h2>
          <form className='form' onSubmit={handleSubmit} noValidate>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={handleChange} />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={handleChange} />
            </div>
            <div className='submit'>
              <button className="btn" type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIN;
