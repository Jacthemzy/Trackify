import "./Home.css";
import Image from "../assets/expense img.jpg";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchLoggedInUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const decoded = jwtDecode(token);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:4040/api/user/${decoded.id}`,
          config
        );
        // console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching logged-in users:", error);
      }
    };

    fetchLoggedInUsers();

    // Clean up function if needed
    return () => {
      // Any cleanup code can go here
    };
  }, []);
  return (
    <>
      {/* <Tracker/> */}
      <div>
        <h1>{user.email}</h1>
      </div>
      <div className="content">
        <h1>Track your spending, </h1>
        <h1>reach your goals</h1>
        <p>
          Take control of your finances with our powerful and easy-to-use
          expense tracker. track every penny you spend and gain valuable
          insights into your spending habits to make smarter decisions and stay
          on top your finances.
        </p>
        <button> Login </button>
  

      </div>

      <div>
        <img src={Image} />
      </div>
    </>
  );
};

export default Home;
