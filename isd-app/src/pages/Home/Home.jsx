import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Foster change through customized course building experience</h2>
      <p>
        ISD DEsign will hold process documents for building a course for your
        organization.
      </p>
      <Link to="/login">
        <button className="btn btn-yellow">Log In</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-secondary">Sign Up</button>
      </Link>
    </>
  );
};

export default Home;
