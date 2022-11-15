import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Signup.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  const handle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SubmitHandler = () => {
    // axios POST request
    const options = {
      url: "http://localhost:3001/api/register",
      method: "POST",
      data: user,
    };
    axios(options)
      .then((response) => {
        console.log("Signed Up");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* {console.log(user)} */}
      <div className=" head">
        <img src={logo} alt="" />
      </div>
      {/* --------------------------------------------------- */}
      <div className="s-box">
        <h2>Signup</h2>
        <div className="sindiv">
          <h5>Full Name</h5>
          <input
            type="text"
            value={user.full_name || ""}
            name="full_name"
            onChange={handle}
          />

          <h5>Email</h5>
          <input
            type="email"
            value={user.email || ""}
            name="email"
            onChange={handle}
          />

          <h5>Phone number</h5>
          <input
            type="number"
            value={user.phone_number || ""}
            name="phone_number"
            onChange={handle}
          />

          <h5>Address</h5>
          <input
            type="text"
            value={user.address || ""}
            name="address"
            onChange={handle}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={user.password || ""}
            name="password"
            onChange={handle}
          />

          <h5>Confirm Password</h5>
          <input
            type="password"
            // value={user.confirmPass || ""}
            name="confirmPass"
            // onChange={handle}
          />
        </div>

        <button className="sbutt" onClick={SubmitHandler}>
          Submit
          {/* <Link to="a" classNameName="blink"> */}
          {/* </Link> */}
        </button>
        <div className="llink">
          Already have an Account?
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
