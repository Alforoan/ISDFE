import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//import img from "../assets/images/homepageBg2.jpg";

test("should render Log In button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const logInButton = screen.getByText("Log In");
  expect(logInButton).toBeInTheDocument();

  //check if clicking login button loads up a login page
  fireEvent.click(logInButton);
  expect(window.location.pathname).toBe("/login");
});

test("should render Sign Up button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const signUpButton = screen.getByText("Sign Up");
  expect(signUpButton).toBeInTheDocument();

  //check if clicking sign up button loads up a sign up page
  fireEvent.click(signUpButton);
  expect(window.location.pathname).toBe("/signup");
});
