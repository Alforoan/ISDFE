import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});

test("should render Log In button and navigate to /login", () => {
  const logInButton = screen.getByText("Log In");
  expect(logInButton).toBeInTheDocument();

  fireEvent.click(logInButton);
  expect(window.location.pathname).toBe("/login");
});

test("should render Sign Up button and navigate to /signup", () => {
  const signUpButton = screen.getByText("Sign Up");
  expect(signUpButton).toBeInTheDocument();

  fireEvent.click(signUpButton);
  expect(window.location.pathname).toBe("/signup");
});
