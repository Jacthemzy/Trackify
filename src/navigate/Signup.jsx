import '../navigate/Signup.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
            'http://localhost:4040/api/signup',
            formData
          );
    
          console.log('Sign up successful:', response.data);
          useNavigate('/');
        } catch (error) {
          console.error('Sign up failed:', error);
        }
      };

    return (

        <>
        <h1>Sign-up</h1>

            <div className="Signup">

                <form onSubmit={submitHandler}>
                    <div className='text_input'>
                    <input
          type="text"
          placeholder="firstName"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
                    </div>
                    <div className='text_input'>
                    <input
          type="text"
          placeholder="lastName"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
                    </div>

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

                 


                    <button id='register' className='btn'>Sign-up</button>


                </form>


            </div>

        </>
    )
}

export default Signup