import './Login.css'
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
   
        const [formData, setFormData] = useState({
          email: '',
          password: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
      
        const submitHandler = async (e) => {
          e.preventDefault();
       
          try {
            const response = await axios.post(
              'http://localhost:4040/api/login',
              formData
            );
            const token = await response.data.data.token;
            localStorage.setItem('token', token);
          
            useNavigate('/home');
          } catch (error) {
            console.error('log in failed:', error.message);
          }
        };

    return (

        <>
        <h1>Log-in</h1>
        <div>

        <form onSubmit={submitHandler}>
       <div className='text_input'>
       <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />

       </div>
        <div className='text_input'>
 <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        </div>
       
        <button type="submit">Log in</button>
      </form>


        </div>
       
        </>
    )
}

export default Login